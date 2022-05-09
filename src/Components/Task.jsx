import React from 'react'
import "./TodoList.css"

const Task = ({task, time}) => {
  return (
    <div className='tasklist'>
        <h2>Task: {task}</h2>
        <h2>Time to Complete: {time}</h2>
    </div>
  )
}

export default Task