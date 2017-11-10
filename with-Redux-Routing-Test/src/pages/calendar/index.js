import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles/style.css';


const Home = props => (
  <div>
    <h1>Calendar</h1>
  </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
