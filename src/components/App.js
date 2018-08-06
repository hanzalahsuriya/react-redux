// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <hr/>
        <Header />
        <hr/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
