import React, { Component } from 'react';
import { connect } from 'react-redux';
import RobotModel from '../../models/robot-model';
import { AppState } from '../../reducers';
import { actionFetchRobot } from '../../actions/robot-list-action';
import { actionSearch } from '../../actions/search-box-action';
import RobotList from '../../components/robot-list/robot-list';
import SearchBox from '../../components/search-box/search-box';

import './app.scss';

type Props = {
  loadData: () => () => void,
  searchChange: (text: string) => () => void,
  robots: RobotModel[],
  status: string,
  errorMessage?: string,
  searchfield: string,
};

type State = {
};

class App extends Component<Props, State> {

  componentDidMount() {
    if (this.props.status === 'INIT') {
      this.props.loadData();
      this.setState({
        searchfield: '',
      })
    }
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.props.searchChange(event.currentTarget.value)
  }

  render() {
    let filterRobots:RobotModel[] = this.props.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.props.searchfield.toLocaleLowerCase())
    })
    return (
      <div className="app">
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {this.renderRobotList()}
        <RobotList robots={filterRobots} />
      </div>
    );
  };

  renderRobotList() {
    if (this.props.status === 'LOADING') {
      return (<p>Loading ...</p>);
    } else if (this.props.status === 'ERROR') {
      return (<p>Error: {this.props.errorMessage}</p>);
    } else {
      return;
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    robots: state.list.robots,
    status: state.list.status,
    errorMessage: state.list.errorMessage,
    searchfield: state.filter.searchfield,
  };
};

const mapDispatchToProps = (dispatch: any) => { // tslint:disable-line
  return {
    loadData: () => dispatch(actionFetchRobot()),
    searchChange: (text: string) => dispatch(actionSearch(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
