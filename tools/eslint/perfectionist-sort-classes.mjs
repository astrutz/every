/**
 * Group-Definitionen fuer `perfectionist/sort-classes`.
 *
 * Reihenfolge der Klassenmitglieder:
 *   inject -> constructor -> HostListener -> HostBinding -> ViewChild(ren)
 *   -> Variablen -> Input -> Output -> Signals -> LinkedSignals -> Computeds
 *   -> methods -> getter -> setter -> Lifecycle
 * Innerhalb jeder Kategorie: public -> protected -> private.
 *
 * Liegt bewusst unter tools/ (von globalIgnores ausgenommen), damit die Datei
 * selbst nicht gelintet/umsortiert wird.
 */

const VIS = ['public', 'protected', 'private'];

function make(name, matchers, split = false) {
  const variants = Array.isArray(matchers) ? matchers : [matchers];
  if (!split) return [{ groupName: name, anyOf: variants }];
  return VIS.map((v) => ({
    groupName: `${name}-${v}`,
    anyOf: variants.map((m) => ({ ...m, modifiers: [...(m.modifiers ?? []), v] })),
  }));
}

const names = (name, split = false) => (split ? VIS.map((v) => `${name}-${v}`) : [name]);

const P = 'property';
const M = 'method';

const defs = [
  ['inject', { selector: P, elementValuePattern: '^inject[(<]' }, false],
  ['constructor', { selector: 'constructor' }, false],
  ['host-listener', { selector: M, decoratorNamePattern: '^HostListener$' }, false],
  ['host-binding', { selector: P, decoratorNamePattern: '^HostBinding$' }, false],
  [
    'view-child',
    [
      {
        selector: P,
        decoratorNamePattern: '^(ViewChild|ViewChildren|ContentChild|ContentChildren)$',
      },
      {
        selector: P,
        elementValuePattern: '^(viewChild|viewChildren|contentChild|contentChildren)\\b',
      },
    ],
    true,
  ],
  [
    'input',
    [
      { selector: P, decoratorNamePattern: '^Input$' },
      { selector: P, elementValuePattern: '^input\\b' },
    ],
    true,
  ],
  [
    'output',
    [
      { selector: P, decoratorNamePattern: '^Output$' },
      { selector: P, elementValuePattern: '^output\\b' },
    ],
    true,
  ],
  ['signal', { selector: P, elementValuePattern: '^signal[(<]' }, true],
  ['linked-signal', { selector: P, elementValuePattern: '^linkedSignal[(<]' }, true],
  ['computed', { selector: P, elementValuePattern: '^computed[(<]' }, true],
  [
    'lifecycle',
    {
      selector: M,
      elementNamePattern:
        '^ng(OnChanges|OnInit|DoCheck|AfterContentInit|AfterContentChecked|AfterViewInit|AfterViewChecked|OnDestroy)$',
    },
    false,
  ],
  ['accessor', [{ selector: 'get-method' }, { selector: 'set-method' }], true],
  ['method', { selector: M }, true],
  ['variable', { selector: P }, true],
];

export const customGroups = defs.flatMap(([name, matchers, split]) => make(name, matchers, split));

export const groups = [
  ...names('inject'),
  ...names('constructor'),
  ...names('host-listener'),
  ...names('host-binding'),
  ...names('view-child', true),
  ...names('variable', true),
  ...names('input', true),
  ...names('output', true),
  ...names('signal', true),
  ...names('linked-signal', true),
  ...names('computed', true),
  ...names('method', true),
  ...names('accessor', true),
  ...names('lifecycle'),
  'unknown',
];
