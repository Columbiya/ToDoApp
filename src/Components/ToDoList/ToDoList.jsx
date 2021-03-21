import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import { idGenerator } from '../../helpers/id-generator';
import todolistReducer from '../../reducers/todolist-reducer';
import AddToDoStyled from '../AddToDo/AddToDo';
import Task from '../Task/Task';

const initialValue = {
    tasks: []
}

const ToDoList = props => {
    let [state, dispatch] = useReducer(todolistReducer, initialValue);
    const doneTasks = state.tasks.filter(task => task.done).map(doneTask => <Task done={true} 
                                                                                  text={doneTask.text} 
                                                                                  key={doneTask.id} 
                                                                                  id={doneTask.id}
                                                                                  dispatch={dispatch} />);
    const notDoneTasks = state.tasks.filter(task => !task.done).map(notDoneTask => <Task done={false} 
                                                                                         text={notDoneTask.text}
                                                                                         key={notDoneTask.id} 
                                                                                         id={notDoneTask.id}
                                                                                         dispatch={dispatch} />);

    const wrapper = useRef(null);
    return (
        <Wrapper ref={wrapper}>
            <Title>To Do List</Title>
            <AddToDoStyled dispatch={dispatch} wrapperRef={wrapper} />
            {doneTasks}
            {notDoneTasks}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    max-width: 500px;
    height: 80vh;
    overflow-y: auto;
    margin: 50px auto 0;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50px;

    box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.6);

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 30px;
    }
`;

const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    border-bottom: 1px solid #000;
`;

export default ToDoList;