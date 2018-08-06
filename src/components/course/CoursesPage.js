import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from  '../../actions/courseActions';
import CourseList from './CourseList';
class CoursesPage extends React.Component {
  constructor(props, context){
    super(props,context);
  }

  render() {
    const { courses } = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
        <h2>Add Courses</h2>
      </div>
    );
  }
}


CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// function mapDispatchToProps() {

// }

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
// MANUALLY
// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse : course => dispatch(courseActions.createCourse(course))
//   };
// }

// Bind All the actions
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
