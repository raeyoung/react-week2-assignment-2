import React, { useState } from 'react';

import Page from './Page';

export default function App() { 
    const [state, setState] = useState({
        newId: 100,
        taskTitle: '',
        tasks: [
            { id: 1, title: '아무것도 하지 않기 #1'},
            { id: 2, title: '아무것도 하지 않기 #2'},
        ]
    })

    const { newId, taskTitle, tasks } = state;

    function handleClickAddTask() {
        // todo : 할 일 추가
        setState({
            ...state,
            newId: newId + 1,
            taskTitle: '',
            tasks: [...tasks, { id: newId, title: taskTitle }],
        })

    }

    function handleChangeTitle(event) {
        setState({
            ...state,
            taskTitle: event.target.value,
        })
    }

    function handleClickDeleteTask(id) {
        // todo : 할 일 삭제
        setState({
            ...state,
            tasks: tasks.filter(task => task.id !== id),
        })

    }
    return (
        <Page 
            taskTitle={taskTitle}
            onChangeTitle={handleChangeTitle}
            onClickAddTask={handleClickAddTask} 
            tasks={tasks}
            onClickDeleteTask={handleClickDeleteTask}
        />
    )
}