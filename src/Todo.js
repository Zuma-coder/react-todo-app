import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useState } from "react";
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'

export const Todo = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  // Todo入力
  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  }
  // Todo追加
  const onClickAdd = () => {
    setTodos([...todos, {id: uuidv4(), text: inputText, isEditing: false }]);
    setInputText('');
  }
  // Todo編集
  const onClickEdit = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, isEditing: true} : todo
    )))
  }
  // Todo保存
  const onClickSave = (id, newText) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, text: newText, isEditing: false} : todo
    )))
  }
  // Todo削除
  const onClickDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todos={todos}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
