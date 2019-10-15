import * as React from 'react';
import { connect } from 'react-redux';
import RobotModel from '../../models/Robot';
import { AppState } from '../../reducers';
import { actionFetchRobot } from '../../actions';
import RobotList from '../../components/RobotList/RobotList';

interface AppViewProps {
  loadData: () => () => void,
  robots: RobotModel[],
  status: string,
  errorMessage?: string
};

interface AppViewState {
};

class App extends React.Component<AppViewProps, AppViewState> {
  constructor(props: AppViewProps, state: AppViewState) {
    super(props, state);
  }

  componentDidMount() {
    if (this.props.status === 'INIT') {
      this.props.loadData();
    }
  }

  render() {
    return (
      <div className="app">
        <h1>RobotFriends</h1>
        {this.renderRobotList()}
      </div>
    );
  };

  renderRobotList() {
    console.log(this.props);
    if (this.props.status === 'LOADING') {
      return (<p>Loading ...</p>);
    } else if (this.props.status === 'ERROR') {
      return (<p>Error: {this.props.errorMessage}</p>);
    } else if (this.props.status === 'LOADED') {
      return (<RobotList robots={this.props.robots} />);
    } else {
      return 'Init State';
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    robots: state.list.robots,
    status: state.list.status,
    errorMessage: state.list.errorMessage,
  };
};

const mapDispatchToProps = (dispatch: any) => { // tslint:disable-line
  return {
    loadData: () => dispatch(actionFetchRobot())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
