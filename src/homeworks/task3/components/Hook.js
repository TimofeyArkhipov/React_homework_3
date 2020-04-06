import {useState, useEffect, useCallback} from 'react';

export function Fetching(){
    let [tasks, setTasks] =  useState([]);
    const [fetchComplete, setFetching ] = useState(false);

    useEffect(() => {
        setFetching(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTasks(data)
                setFetching(false)
            })
    },[]);

    const handleRemove = useCallback(id =>
        setTasks(tasks.filter(task => task.id !== id)), [tasks]);

    const toggleComplete = useCallback(updatedTask =>
            setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task)),
        [tasks]);

    const handleAddTodo = useCallback(newTask => {
        setTasks([{ title: newTask, id: Date.now() }, ...tasks])
    }, [tasks])


    return [tasks, toggleComplete, handleRemove, handleAddTodo];
}
