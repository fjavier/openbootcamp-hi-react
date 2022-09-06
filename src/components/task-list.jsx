import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Task from './pure/Task'
import TaskModel from '../models/task-model'
import { LEVELS } from '../models/levels';
import "../styles/task.scss"

function TaskList(props) {
    const task1 = new TaskModel("Primer tarea","primer tarea", true, LEVELS.BLOCKING);
    const task2 = new TaskModel("Tarea 2","Segunda tarea", true, LEVELS.NORMAL);
    const task3 = new TaskModel("Tarea 3","Tercer Tarea", true, LEVELS.URGENT);

    const [tareas, setTareas] = useState([task1, task2, task3]);
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        setloading(false);        
    }, [tareas]);

  return (
    <div>
        <div className='col-12'>
        
          <div className='card'>
            <div className='card-header p-3'>
              <h5>Mis Tareas</h5>
            </div>
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
              <table>         
              <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>  
                <tbody>
                  {
                    tareas.map(
                      (tarea, index) => {
                          return <Task task={tarea} key={index}></Task>;
                      }
                    )
                  }
                </tbody>     
              </table>
            </div>            
          </div>
          
        </div>        
        
    </div>
    
  )
}

TaskList.propTypes = {}

export default TaskList
