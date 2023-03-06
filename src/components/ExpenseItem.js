import React, { useContext } from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  console.log(props);
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const handleEditExpense = () => {
    dispatch({
      type: 'EDIT_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li class='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span class='badge badge-primary badge-pill mr-3'>{props.cost}Rs</span>
        <TiEdit size='1.5em' onClick={handleEditExpense} />
        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
