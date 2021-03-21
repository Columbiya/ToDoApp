import React, { useState } from 'react';
import styled from 'styled-components';
import { idGenerator } from '../../helpers/id-generator';
import { addToDo } from '../../reducers/todolist-reducer';
import { Button, Input } from '../common/FormElements';


const AddToDo = ( { className, dispatch, wrapperRef }) => {
    let [text, setText] = useState('');
    let [error, setError] = useState(null);

    const onInputChange = e => {
        setError(null);
        setText(e.target.value)
    };

    const checkKeys = e => {
        if (e.keyCode === 13) onAddToDo();
    }

    const onAddToDo = async e => {
        if (!text) {
            setError('ToDo не может быть пустым!');
            return;
        }

        let newTask = {
            text,
            id: idGenerator.next().value,
            done: false
        };
        await dispatch(addToDo(newTask));

        wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;

        setText('');
    };

    return (
        <>
            {error && <Paragraph>{error}</Paragraph>}

            <div className={className}>
                <Input type={'text'} value={text} onChange={onInputChange} onKeyDown={checkKeys} placeholder={'Вводите ваш ToDo here...'} />
                <Button onClick={onAddToDo}>Добавить To Do</Button>
            </div>
        </>

    );
};

const AddToDoStyled = styled(AddToDo)`
    margin: 0 auto;
    padding: 15px 15px;

    border-bottom: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 515px) {
        & {
            flex-direction: column;
        }

        & button {
            margin-top: 10px;
        }
    }
`;

const Paragraph = styled.p`
    margin-top: 15px;
    text-align: center;
    color: red;
`;

export default AddToDoStyled;