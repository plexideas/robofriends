import RobotModel from '../models/Robot';
import { robots } from './data/robots';

const ENABLE_RANDOM_ERRORS = false;

export default class RobotService {
  static getAll(): Promise<RobotModel[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
            reject(new Error('Error'));
          } else {
            console.log(robots)
            resolve(robots);
          }
        }, 1500);
      });
  }
}
