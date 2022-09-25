function TodoForm( {addTodo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
      }

    return (
    <form className="list-group-item gap-3 bg-light add-items" onSubmit={handleSubmit}>
        <input type = "text" className="input" value={value} placeholder="Enter a task here"
            onChange = { e => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary add">Add Task</button>
    </form>)
}