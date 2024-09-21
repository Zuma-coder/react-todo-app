import { useState } from "react";

export const TodoItem = (props) => {
  const {todo, onClickEdit, onClickSave, onClickDelete} = props;
  const [editText, setEditText] = useState(todo.text);

  const handleChange = (event) => {
    setEditText(event.target.value);
  };
  return (
    <>
      {todo.isEditing ? (
        <>
          <input
            value={editText}
            onChange={handleChange}
          ></input>
          <button onClick={() => onClickSave(todo.id, editText)}>保存</button>
        </>
      ) : (
        <>
          <p>{todo.text}</p>
          <button onClick={() => onClickEdit(todo.id)}>編集</button>
          <button onClick={() => onClickDelete(todo.id)}>削除</button>
        </>
      )}
    </>
  )
}