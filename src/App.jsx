import React from 'react';

import Input from './Input';
import List from './List';

export default function App() { 
    const tasks = [
        { id: 1, title: '아무것도 하지 않기 #1'},
        { id: 2, title: '아무것도 하지 않기 #2'},
    ]
    function onClick() {
        // todo : 할 일 추가

    }
    return (
        <div>
            <h1>To-do</h1>
            <Input onClick={onClick} />
            <List tasks={tasks} />
        </div>
    )
}