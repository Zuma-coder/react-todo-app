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
    const newTodos = {
      id: uuidv4(),
      text: inputText,
      isEditing: false,
      isDone: false
    }
    setTodos([...todos, newTodos]);
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
    if(window.confirm('本当に削除してもよろしいですか？')) {
      setTodos(todos.filter((todo) => todo.id !== id))
    }
  }
  // Todo完了未完了切り替え
  const onToggleDone = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    )))
  }
  
  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClickAdd={onClickAdd}
      />
      <p>すべてのタスク：{todos.length}</p>
      <p>完了済み：{todos.filter((todo) => todo.isDone).length}</p>
      <p>未完了：{todos.filter((todo) => !todo.isDone).length}</p>
      <TodoList
        todos={todos}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
        onToggleDone={onToggleDone}
      />
    </>
  );
}
