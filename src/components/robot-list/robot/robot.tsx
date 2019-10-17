import React from 'react';
import RobotModel from '../../../models/robot-model'

import './robot.scss';

const Robot = (props: RobotModel) => (
  <div className="robot">
    <img src={`https://robohash.org/${props.username}`} alt="Robot Photo"/>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>
);

export default Robot;
