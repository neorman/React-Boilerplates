import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import {
  increment,
  decrement,
} from '../../actions/home'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </p>

    <RaisedButton
        label="Open Calendar"
        primary={true}
        onClick={() => props.changePage()}
    />
  </div>
)

const mapStateToProps = state => ({
  count: state.homeReducers.count,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement,
  changePage: () => push('/calendar')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
