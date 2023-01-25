const InputWords = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="inner-wrapper">
      <input
        className="box"
        type="text"
        placeholder="Create a new todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div>
        <button className="save" onClick={addTodo}>
          Save Todo
        </button>
      </div>
    </div>
  );
};
export default InputWords;
