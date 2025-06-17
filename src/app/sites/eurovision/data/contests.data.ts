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

const contest2025 = new Contest(2025, entriesByYear(2025), switzerland);
const contest2024 = new Contest(2024, entriesByYear(2024), sweden);
const contest2023 = new Contest(2023, entriesByYear(2023), unitedKingdom);
const contest2022 = new Contest(2022, entriesByYear(2022), italy);
const contest2021 = new Contest(2021, entriesByYear(2021), netherlands);
const contest2019 = new Contest(2019, entriesByYear(2019), israel);
const contest2018 = new Contest(2018, entriesByYear(2018), portugal);
const contest2017 = new Contest(2017, entriesByYear(2017), ukraine);

export const contests: Contest[] = [
  contest2025,
  contest2024,
  contest2023,
  contest2022,
  contest2021,
  contest2019,
  contest2018,
  contest2017,
];
