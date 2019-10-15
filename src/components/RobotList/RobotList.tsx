import * as React from 'react';
import RobotModel from '../../models/Robot';

export interface RobotListProps {
  robots: RobotModel[]
}

export interface RobotListState {
  robots: number[]
}

class RobotList extends React.Component<RobotListProps, RobotListState> {
  render() {
    return (
      <div>
        { this.props.robots.map((robot: RobotModel) => <p key={robot.id}>{robot.username}</p>) }
      </div>
    )
  }
}

export default RobotList;
