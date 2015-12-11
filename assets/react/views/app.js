import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

const mapStateToProps = (state) => ({
  // routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  // actions : bindActionCreators(counterActions, dispatch)
});
export class App extends React.Component {
  static propTypes = {
	// actions  : React.PropTypes.object,
  };

  render () {
  	return <div> Welcome to hell </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);