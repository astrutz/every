import {
  AfterViewInit,
  Directive,
  ElementRef,
  EnvironmentInjector,
  OnDestroy,
  afterNextRender,
  inject,
  input,
  runInInjectionContext,
} from '@angular/core';

/**
 * Counts a number value inside an HTMLElement up with an ease-out counting transition/animation.
 * Can optionally animate a progress bar width in sync.
 */
@Directive({
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  private readonly _elementRef = inject(ElementRef<HTMLElement>);
  private readonly _environmentInjector = inject(EnvironmentInjector);

  /**
   * Number to which the directive should count up to
   */
  public target$ = input.required<number>();

  /**
   * Duration of the animation
   */
  public duration$ = input<number>(2000);

  /**
   * Optional element whose width should grow together with the count-up animation.
   * Example: target = 8.4 -> width = 84% when multiplier = 10
   */
  public barElement$ = input<HTMLElement | null>(null);

  /**
   * Multiplier used to convert the numeric value to a width percentage.
   * Example:
   *  - rating 8.4 * 10 => 84%
   *  - progress 0.84 * 100 => 84%
   */
  public barMultiplier$ = input<number>(10);

  /**
   * Observer to determine when the transition should start.
   */
  private _observer?: IntersectionObserver;

  /**
   * Indicates if the counting has already started, so it won't get restarted on second intersection
   */
  private _started = false;

  /**
   * Returns how many decimal places the target value has.
   */
  private _getFractionDigits(): number {
    const value = this.target$();
    const valueAsString = value.toString();

    if (!valueAsString.includes('.')) {
      return 0;
    }

    return valueAsString.split('.')[1]?.length ?? 0;
  }

  /**
   * Formats a value using the same decimal precision as the target value.
   */
  private _formatValue(value: number): string {
    const fractionDigits = this._getFractionDigits();

    return value.toLocaleString(undefined, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
      useGrouping: true,
    });
  }

  /**
   * Rounds a number to the given decimal places.
   */
  private _roundToFractionDigits(value: number, fractionDigits: number): number {
    const factor = Math.pow(10, fractionDigits);
    return Math.round(value * factor) / factor;
  }

  /**
   * Reserve enough width for the final formatted value to prevent layout shifts.
   */
  private _applyFixedWidth(): void {
    const targetText = this._formatValue(this.target$());
    const length = targetText.length;

    const element = this._elementRef.nativeElement;
    element.style.display = 'inline-block';
    element.style.minWidth = `${length}ch`;
    element.style.textAlign = 'right';
    element.style.fontVariantNumeric = 'tabular-nums';
  }

  /**
   * Updates the optional progress bar width based on the current animated value.
   */
  private _updateBar(value: number): void {
    const bar = this.barElement$();

    if (!bar) {
      return;
    }

    const width = Math.max(0, Math.min(100, value * this.barMultiplier$()));
    bar.style.width = `${width}%`;
  }

  /**
   * Initiates an IntersectionObserver
   */
  private _initObserver(): void {
    this._applyFixedWidth();

    this._elementRef.nativeElement.textContent = this._formatValue(0);
    this._updateBar(0);

    this._observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this._started) {
        this._started = true;
        this._animate(0);
        this._observer?.disconnect();
      }
    });

    this._observer.observe(this._elementRef.nativeElement);
  }

  /**
   * Starts the animation and updates number + optional bar on every animation frame.
   */
  private _animate(from: number): void {
    const start = performance.now();
    const to = this.target$();
    const fractionDigits = this._getFractionDigits();

    const tick = (now: number) => {
      const linearProgress = Math.min((now - start) / this.duration$(), 1);
      const easedProgress = this._easeOutCubic(linearProgress);

      const rawValue = from + (to - from) * easedProgress;
      const value = this._roundToFractionDigits(rawValue, fractionDigits);

      this._elementRef.nativeElement.textContent = this._formatValue(value);
      this._updateBar(value);

      if (linearProgress < 1) {
        requestAnimationFrame(tick);
      } else {
        // ensure exact final values
        this._elementRef.nativeElement.textContent = this._formatValue(to);
        this._updateBar(to);
      }
    };

    requestAnimationFrame(tick);
  }

  /**
   * Ease-out easing function.
   */
  private _easeOutCubic(linearProgress: number): number {
    return 1 - Math.pow(1 - linearProgress, 5);
  }

  ngAfterViewInit(): void {
    runInInjectionContext(this._environmentInjector, () => {
      afterNextRender(() => {
        this._initObserver();
      });
    });
  }

  ngOnDestroy(): void {
    this._observer?.disconnect();
  }
}
