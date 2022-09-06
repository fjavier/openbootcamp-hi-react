import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Task from './pure/Task'
import TaskModel from '../models/task-model'
import { LEVELS } from '../models/levels';
import "../styles/task.scss"

function TaskList(props) {
    const task1 = new TaskModel("Primer tarea","primer tarea", false, LEVELS.NORMAL);

    const [task, settask] = useState([task1]);
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        console.log('====================================');
        console.log("Componente actualizado");
        console.log('====================================');
        setloading(false);
        return () => {
            console.log('====================================');
            console.log("Componente desmontado");
            console.log('====================================');
        };
    }, [task]);

  return (
    <div>
        <h1>Mis Tareas</h1>
        <Task task={task1}></Task>
    </div>
    
  )
}

TaskList.propTypes = {}

export default TaskList
