import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

const Navbar = ({ selectedTab, handleChange }) => (
  <AppBar title="Voting App">
    <Tabs value={selectedTab} onChange={handleChange}>
      <Tab label="tab1" />
      <Tab label="tab2" />
    </Tabs>
  </AppBar>
);

export default Navbar;
