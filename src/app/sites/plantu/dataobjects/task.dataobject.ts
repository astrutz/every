import { Plant } from './plant.dataobject';

export interface Task {
  day: string;
  plants: Plant[];
}
