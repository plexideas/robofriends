import React from 'react';
import RobotModel from '../../models/robot-model';
import Robot from './robot/robot';

import './robot-list.scss';

type Props = {
  robots: RobotModel[]
};

const RobotList = (props: Props) => {
  return (
    <div className="robot-list">
      { 
        props.robots.map(
          (robot: RobotModel, key: number) => <Robot key={ key } {...robot} />
        ) 
      }
    </div>
  )
}

export default RobotList;
