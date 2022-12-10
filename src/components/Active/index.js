    // Todo.js
    
    import React, { useState } from 'react';

    
    function Task({ task, index, completeTask }) {
        return (
            <div>{task.completed ? null : <div className="task">
            {task.title}
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>}
            </div>
        );
    }

    
    function Active() {
        const [tasks, setTasks] = useState([
            {
                title: "Grab some Pizza",
                completed: true
            },
            {
                title: "Do your workout",
                completed: true
            },
            {
                title: "Hangout with friends",
                completed: false
            }
        ]);
    

    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            setTasks(newTasks);
        };
    
        return (
            <div className="todo-container">
                <h1>Active</h1>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
    
    export default Active;