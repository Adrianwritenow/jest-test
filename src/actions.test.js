import  {createTodo} from './actions';
import  {toggleTodo} from './actions';
import  {filterTodos} from './actions';

describe('test action creators',()=>{
test("Will create Todo", ()=>{
  expect(createTodo('Test').toEqual({ type: 'CREATE_TODO', payload:'Test'}))
})
})


describe('test action creators',()=>{
test("Will toggle Todo", ()=>{
  expect(toggleTodo(1).toEqual({ type: 'TOGGLE_TODO', payload:1}))
})
})


describe('test action creators',()=>{
test("Will filter Todo", ()=>{
  expect(createTodo('Test').toEqual({ type: 'FILTER', payload:'Test'}))
})
})
