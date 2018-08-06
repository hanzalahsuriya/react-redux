import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';

import CourseForm from './CourseForm';
class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange() {

  }

  onSave() {

  }

  render() {
    const { authors } = this.props;
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm course={this.state.course} allAuthors={authors} onSave={this.onSave} onChange={this.onChange} loading={false} error={this.state.errors} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let course = {
    id: '', title: '', watchHref:'', authorId: '', length: '', category: ''
  };

  const authorsFormattedForDropdowns = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdowns
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    courseActions: bindActionCreators(courseActions, dispatch),
    authorActions: bindActionCreators(authorActions, dispatch)
  };
};

export default connect(mapStateToProps)(ManageCoursePage);
