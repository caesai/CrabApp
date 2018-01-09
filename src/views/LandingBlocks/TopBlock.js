import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actions} from 'utils/actions';

import CurrentGames from './CurrentGames';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  location: state.routing
});

class TopBlock extends React.Component {
  render(){
    return(
      <div>
        <h1>Crab bucket</h1>
        <h2>Current game:</h2>
        <CurrentGames />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(TopBlock));
