export const InputTodo = (props) => {
  const {onClickAdd, onChange, inputText} = props;
  return (
    <>
      <input
        placeholder="Todoを入力"
        onChange={onChange}
        value={inputText}
      ></input>
      <button onClick={onClickAdd}>追加</button>
    </>
  )
}