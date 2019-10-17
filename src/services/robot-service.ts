import RobotModel from '../models/robot-model';
import { robots } from './data/robots';

const ENABLE_RANDOM_ERRORS = false;

export default class RobotService {
  static getAll(): Promise<RobotModel[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
            reject(new Error('Error'));
          } else {
            // fetch('https://jsonplaceholder.typicode.com/users').then(resp => {
            //   return resp.json();
            // }).then(users => {
            //   resolve(users);
            // })
            resolve(robots);
          }
        }, 300);
      });
  }
}
