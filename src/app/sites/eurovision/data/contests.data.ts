import { Contest } from '../dataobjects/contest.dataobject';
import {
  israel,
  italy,
  netherlands,
  portugal,
  sweden,
  switzerland,
  ukraine,
  unitedKingdom,
} from './countries.data';
import { entriesByYear } from './entries.data';

export const contest2025 = new Contest(2025, entriesByYear(2025), switzerland, [
  '#4e1c8f',
  '#0adad8',
  '#ffffff',
  '#4e1c8f',
]);
export const contest2024 = new Contest(2024, entriesByYear(2024), sweden, [
  '#f6d915',
  '#ff46e0',
  '#000000',
  '#000000',
]);
export const contest2023 = new Contest(2023, entriesByYear(2023), unitedKingdom, [
  '#03035d',
  '#e5df25',
  '#ffffff',
  '#000000',
]);
export const contest2022 = new Contest(2022, entriesByYear(2022), italy, [
  '#540c16',
  '#2d2e39',
  '#ffffff',
  '#ffffff',
]);
export const contest2021 = new Contest(2021, entriesByYear(2021), netherlands, [
  '#070838',
  '#f86bcf',
  '#ffffff',
  '#000000',
]);
export const contest2019 = new Contest(2019, entriesByYear(2019), israel, [
  '#0072d4',
  '#ffffff',
  '#ffffff',
  '#000000',
]);
export const contest2018 = new Contest(2018, entriesByYear(2018), portugal, [
  '#003e71',
  '#ffc646',
  '#ffffff',
  '#000000',
]);
export const contest2017 = new Contest(2017, entriesByYear(2017), ukraine, [
  '#190540',
  '#fb1544',
  '#ffffff',
  '#000000',
]);
export const contest2016 = new Contest(2016, entriesByYear(2016), sweden, [
  '#17394F',
  '#910291',
  '#ffffff',
  '#ffffff',
]);

export const contests: Contest[] = [
  contest2025,
  contest2024,
  contest2023,
  contest2022,
  contest2021,
  contest2019,
  contest2018,
  contest2017,
  contest2016,
];
