import { React, useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {

    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    //UseEffect
    useEffect(() => {
        getLocalTodos();
    }, []
    );

    //useEfect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    //Filter Handler
    const filterHandler = () => {
        switch (status) {
            case 'completed': 
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;

            case 'uncompleted': 
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;

            default: 
                setFilteredTodos(todos);
                break;
        }
    };

    //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
        };

    return (
        // <>
        //     <div>
        //         <h1 className="title" style={{}}>
        //             ToDo List
        //         </h1>
        //     </div>

        //     <div>
        //         <input 
        //             type="text" 
        //             placeholder="Add or eddit item"
        //         />
        //         <input 
        //             type="text"
        //             placeholder="Low"
        //         />
        //         <input 
        //             type="date"
        //         />
        //         <button type="submit" value="Submit">Submit</button>
        //     </div>
        //     <div>
        //         <input 
        //             type="search"
        //             placeholder="Search ToDo"            
        //         />
        //     </div>

        //     <div>
        //         <table style={{border: '1px solid black', borderCollapse: 'colapse'}}>
        //             <thead>
        //                 <tr>
        //                     <th style={{border: '1px solid black'}}>S.No</th>
        //                     <th style={{border: '1px solid black'}}>Task</th>
        //                     <th style={{border: '1px solid black'}}>Task</th>
        //                     <th style={{border: '1px solid black'}}>Priority</th>
        //                     <th style={{border: '1px solid black'}}>DueDate</th>
        //                     <th style={{border: '1px solid black'}}>Action</th>
        //                 </tr>
        //                 <tr>
        //                     <th style={{border: '1px solid black'}}>S.No</th>
        //                     <th style={{border: '1px solid black'}}>Task</th>
        //                     <th style={{border: '1px solid black'}}>Task</th>
        //                     <th style={{border: '1px solid black'}}>Priority</th>
        //                     <th style={{border: '1px solid black'}}>DueDate</th>
        //                     <th style={{border: '1px solid black'}}>Action</th>
        //                 </tr>
        //             </thead>
        //         </table>
        //     </div>
        // </>

        <div className="App">
            <header>
                <h1>
                    Todo list
                </h1>
                <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
                <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
            </header>
        </div>


    );
};

export default App;