import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';



function TodoItemsRemaining() {

  const { todos } = useContext(TodosContext);

  function remainingCalculation() {
    // console.log('calculating remaining todos. this is slow');
    // for (let index = 0; index < 200000000; index++) {}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remaining =useMemo(remainingCalculation, [todos]); //for testing memo / cahce

  return <span>{remaining} items remaining</span>;
  
}

export default TodoItemsRemaining
