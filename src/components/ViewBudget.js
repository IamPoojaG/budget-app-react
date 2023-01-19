import React from 'react';

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: {props.budget}Rs</span>
      <button
        type='button'
        class='btn btn-success'
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
