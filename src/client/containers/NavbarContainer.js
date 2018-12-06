import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  state = {
    selectedTab: 0
  };

  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  render() {
    const { selectedTab } = this.state;

    return <Navbar selectedTab={selectedTab} handleChange={this.handleChange} />;
  }
}

export default NavbarContainer;
