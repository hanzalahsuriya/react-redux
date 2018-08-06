import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
        placeHolder="Title"
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
        placeHolder="Author"
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
        placeHolder="category"
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
        placeHolder="Length"
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

export default CourseForm;
