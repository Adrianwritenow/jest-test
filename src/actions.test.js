import React from 'react';
import ReactDOM from 'react-dom';

import  {createTodo, toggleTodo, filterTodos} from './actions';

describe('test action creators',()=>{
test("Will create Todo", ()=>{
  expect(createTodo('Test')).toEqual({type: 'CREATE_TODO', payload:'Test'})
})

test("Will toggle Todo", ()=>{
  expect(toggleTodo(1)).toEqual({type: 'TOGGLE_TODO', payload:1})
})



test("Will filter Todo", ()=>{
  expect(filterTodos('Test')).toEqual({ type: 'FILTER_TODOS', payload:'Test'})
  })
})
