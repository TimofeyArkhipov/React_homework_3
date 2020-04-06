import React, {useEffect, useState} from 'react';
import {Fetching} from './Hook';
import TaskItem from './TaskItem';
import NewTask from "./NewTask";

function List() {
   let [tasks, toggleComplete, handleRemove, handleAddTodo] = Fetching();

        return(
            <div>
                <button>Theme</button>
                <NewTask addTask={handleAddTodo}/>
                {tasks.map(task =>
                    <TaskItem
                        key={task.id}
                        task={task}
                        onRemove={handleRemove}
                        complete={toggleComplete}
                    />
                )}
            </div>
        )
}


export default List;
