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
        <tr>
            <td>
                <span className='ms-2'>{task.name}</span>    
            </td>
            <td className='align-middle'>
                <span>{task.description}</span> 
            </td>
            <td className='align-middle'>
                <span>{task.isDone ? "Completado" : "Pendiente"}</span>                
            </td>
            <td className='align-middle'>
                
                <span>{task.level}</span>    
            </td>
        </tr>   
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}

export default Task
