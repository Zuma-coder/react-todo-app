import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  const {todos, onClickEdit, onClickSave, onClickDelete} = props;
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onClickEdit={onClickEdit}
              onClickSave={onClickSave}
              onClickDelete={onClickDelete}
            />
          </li>
        ))}
      </ul>
    </>
  )
}