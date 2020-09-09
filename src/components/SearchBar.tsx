import React from 'react';
import Thx from '../../lib/thx';

import { Paper, TextField } from '@material-ui/core';
type props = {
  onFormSubmit: Function;
};
class SearchBar extends React.Component<props, {}> {
  state = {
    searchTerm: '',
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label="Search..." onChange={this.handleChange} />
      </form>
      //  <Paper elevation={6} style={{ padding: '25px' }}>
      //   <form onSubmit={this.handleSubmit}>
      //     <TextField fullWidth label="Search..." onChange={this.handleChange} />
      //   </form>
      // </Paper>
    );
  }
}

export default SearchBar;