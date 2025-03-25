import { React, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
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
                <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
                <TodoList todos={todos}/>
            </header>
        </div>


    );
};

export default App;