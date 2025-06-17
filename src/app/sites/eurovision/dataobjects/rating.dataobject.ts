export interface RatingModel {
  energy: number;
  staging: number;
  studio: number;
  fun: number;
  vocals: number;
}

export class Rating implements RatingModel {
  readonly energy: number;
  readonly staging: number;
  readonly studio: number;
  readonly fun: number;
  readonly vocals: number;

  constructor(energy: number, staging: number, studio: number, fun: number, vocals: number) {
    this.energy = energy;
    this.staging = staging;
    this.studio = studio;
    this.fun = fun;
    this.vocals = vocals;
  }

  public getTotal(): number {
    return (
      Math.round(
        (this.energy * ENERGY_FACTOR +
          this.staging * STAGING_FACTOR +
          this.studio * STUDIO_FACTOR +
          this.fun * FUN_FACTOR +
          this.vocals * VOCALS_FACTOR) *
          10,
      ) / 10
    );
  }
}

/**
 * Wie sehr bringt dich dieses Lied zum Tanzen oder Bewegen? Hoch energetische Songs mit starkem Beat und Party-Atmosphäre punkten hier. Balladen und langsame Lieder schneiden automatisch schlechter ab.
 */
const ENERGY_FACTOR = 0.3;

/**
 * Wie kreativ, mutig und visuell beeindruckend ist die Performance? Achte auf Requisiten, Kostüme, Choreografie, Lichteffekte und den typischen Eurovision-Faktor. Je innovativer und einprägsamer, desto höher die Punktzahl
 */
const STAGING_FACTOR = 0.3;

/**
 * Würdest du diesen Song auch außerhalb von Eurovision hören? Hält er sich in der Studio-Version? Songs mit bleibendem Eindruck, eingängigen Hooks und Wiederspielwert punkten hier.
 */
const STUDIO_FACTOR = 0.15;

/**
 * Wie unterhaltsam und spaßig ist der Song? Bringt er dich zum Lächeln, Lachen oder fühlst du dich euphorisch? Quirky, freudige oder übertriebene Beiträge glänzen in dieser Kategorie.
 */
const FUN_FACTOR = 0.15;

/**
 * Wie gut tragen die Gesangsleistungen zum Gesamteindruck bei? Es geht nicht nur um technische Perfektion – einzigartige oder unterhaltsame Gesangseinlagen (z. B. Gruppenchöre, wilde Falsettos) können hier ebenfalls punkten.
 */
const VOCALS_FACTOR = 0.1;
