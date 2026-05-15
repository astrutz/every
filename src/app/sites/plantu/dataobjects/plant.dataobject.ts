export interface Plant {
  _id: string;
  name: string;
  botanicalName?: string;
  wateringInterval: number;
  sprayingInterval?: number;
  fertilizingInterval?: number;
  cuttingInterval?: number;
  wipingInterval?: number;

  lastWateredAt?: Date;
  lastSprayedAt?: Date;
  lastFertilizedAt?: Date;
  lastTrimmedAt?: Date;
  lastWipedAt?: Date;

  birthDate: Date;

  location: 'Balkon' | 'Schlafzimmer' | 'Flur' | 'Arbeitszimmer' | 'Wohnzimmer' | 'Babiel';

  dormantPeriod?: {
    from: Date;
    to: Date;
    wateringInterval: number;
    sprayingInterval?: number;
    fertilizingInterval?: number;
    cuttingInterval?: number;
    wipingInterval?: number;
  };

  snooze?: {
    wateringUntil?: Date;
    sprayingUntil?: Date;
    fertilizingUntil?: Date;
    cuttingUntil?: Date;
    wipingUntil?: Date;
  };

  imageUrl?: string;
  temperature?: string;
  lighting?: string;

  nextWatering?: Date;
  nextSpraying?: Date;
  nextFertilizing?: Date;
  nextCutting?: Date;
  nextWiping?: Date;
}
