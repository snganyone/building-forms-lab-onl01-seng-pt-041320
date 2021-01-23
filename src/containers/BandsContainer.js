import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput />
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return {bands: state.bands}
}

export default connect(mapDispatchToProps)(BandsContainer);
