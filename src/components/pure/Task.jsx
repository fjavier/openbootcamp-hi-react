import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import TaskModel from '../../models/task-model'
import "../../styles/task.scss"
function Task({task}) {

    useEffect(() => {
        console.log("Created task");
        return () => {
            console.log('====================================');
            console.log("Task is going to unmount");
            console.log('====================================');
        };
    }, [task]);

  return (
    <div>
        <h1>{task.name}</h1>
        <h3>{task.description}</h3>
        <h3>{task.isDone ? "Completado" : "Pendiente"}</h3>
        <h3>{task.level}</h3>
   </div>
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}

export default Task
