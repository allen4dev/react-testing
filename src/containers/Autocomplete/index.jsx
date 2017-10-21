import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';

import TrackList from './../../modules/tracks/components/TrackList';

import Form from './../../shared/Form';

import './index.css';

import tracks from './../../modules/tracks';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.fillForm = debounce(500, this.fillForm);

    this.state = {
      term: '',
      message: 'Search something',
    };
  }

  handleChange = e => {
    const term = e.target.value;

    this.fillForm(term);

    this.setState({ term });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ term: '' });
  };

  async fillForm(term) {
    const search = term.toLowerCase();

    if (search.length === 0) {
      return this.setState({ message: 'Search something' });
    }

    const results = await this.props.searchTracks(search);

    return results.length > 0
      ? this.setState({ message: '' })
      : this.setState({ message: 'No results found' });
  }

  render() {
    return (
      <div className="Autocomplete">
        <Form
          placeholder="Search..."
          value={this.state.term}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TrackList items={this.props.items} message={this.state.message} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.tracks.results;

  return {
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchTracks: tracks.actions.searchTracks,
})(Autocomplete);
