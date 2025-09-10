import { Entry } from '../dataobjects/entry.dataobject';
import { entries2017 } from './entries2017.data';
import { entries2018 } from './entries2018.data';
import { entries2019 } from './entries2019.data';
import { entries2021 } from './entries2021.data';
import { entries2022 } from './entries2022.data';
import { entries2023 } from './entries2023.data';
import { entries2024 } from './entries2024.data';
import { entries2025 } from './entries2025.data';

export const entries: Entry[] = [
  ...entries2017,
  ...entries2018,
  ...entries2019,
  ...entries2021,
  ...entries2022,
  ...entries2023,
  ...entries2024,
  ...entries2025,
];

export function entriesByYear(year: number): Entry[] {
  return entries.filter((entry) => entry.year === year);
}
