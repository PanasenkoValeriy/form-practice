export const TodoList = ({todos}) => (
    <ul>
        {todos.map(({ id, text, completed }) => (
            <li key={id}>
                <input type="checkbox" /> 
                <p>{text}</p>
                <button>Delete</button>
            </li>

        ))}
    </ul>
) 

