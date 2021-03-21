import React from 'react';
import styled, { keyframes } from 'styled-components';
import { deleteTask, toggleTask } from '../../reducers/todolist-reducer';
import { Button, Input } from '../common/FormElements';

const Task = ({ done, id, text, dispatch }) => {
    const onToggleTask = e => {
        if (e.target.tagName === 'BUTTON') return;

        dispatch(toggleTask(id));
    };

    const onDeleteTask = e => {
        dispatch(deleteTask(id));
    };

    return (
        <Container onClick={onToggleTask}>
            <Input type={'checkbox'} checked={done} />
            <Paragraph>{text}</Paragraph>
            <Button onClick={onDeleteTask}>&#10008;</Button>
        </Container>
    );
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    padding: 30px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: ${fadeIn} 1s ease-in-out 1;

    cursor: pointer;

    transition: background-color .3s ease;

    &:not(:last-child) {
        border-bottom: 1px solid #000;
    }

    &:hover {
        background-color: rgba(0, 0, 0, .5);
    }
`;

const Paragraph = styled.p`
    display: inline;
    margin-left: 15px;
`;

export default Task;