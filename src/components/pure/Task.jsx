import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import TaskModel from '../../models/task-model'
import "../../styles/task.scss"
import { LEVELS } from '../../models/levels';
function Task({task}) {

    useEffect(() => {
        console.log("Created task");
        return () => {
            console.log('====================================');
            console.log("Task is going to unmount");
            console.log('====================================');
        };
    }, [task]);

    /**
     * Return badge depending on the level of the task
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                );                
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                );
                case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                );
                default:
                    break;
            
        }
    }

  return (
        <tr>
            <td>
                <span className='ms-2'>{task.name}</span>    
            </td>
            <td className='align-middle'>
                <span>{task.description}</span> 
            </td>
            <td className='align-middle'>
                <span>{renderCompleted()}
                    <i className='bi-trash' style={{color:"tomato"}}></i>
                </span>                
            </td>
            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>    
            </td>
        </tr>   
  )

    function renderCompleted() {
        return task.isDone
            ? (<i className='bi-toggle-on' style={{ color: "green" }}></i>)
            : (<i className='bi-toggle-off' style={{ color: "red" }}></i>);
    }
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}

export default Task
