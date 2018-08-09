import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';

import CourseForm from './CourseForm';
import { prototype } from 'stream';
class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    const { course } = this.state;
    this.props.cActions.saveCourse(course);
    this.context.router.push('/courses');
  }

  render() {
    const { authors } = this.props;
    const { course } = this.state;
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={course}
          allAuthors={authors}
          onSave={this.saveCourse}
          onChange={this.updateCourseState}
          loading={false}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, courseId) {
  const course = courses.filter(c => c.id === courseId);
  return course ? course[0] : null;
}

const mapStateToProps = (state, ownProps) => {

  const courseId = ownProps.params.id;
  let course = {
    id: '', title: '', watchHref:'', authorId: '', length: '', category: ''
  };

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

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
    cActions: bindActionCreators(courseActions, dispatch),
    aActions: bindActionCreators(authorActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
