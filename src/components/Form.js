const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);

    setInputText('');
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        type='text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button' type='submit' onClick={handleSubmit}>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={handleStatus} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
