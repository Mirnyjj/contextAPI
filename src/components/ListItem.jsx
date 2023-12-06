import { useRequestDeletingTodos, useRequestUpdateTodos } from '../hooks'
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';

import './ListItem.css'

// eslint-disable-next-line react/prop-types
function ListItem({ id, title }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [newText, setNewText] = useState('')
    const { isUpdating, requestUpdateTodos } = useRequestUpdateTodos();
    const { isDeleting, requestDeletingTodos } = useRequestDeletingTodos();


    const onChange = ({ target }) => {
        setNewText(target.value)
    }

    const onOpenUpdateTask = () => setIsEditMode(true);
    const onCloseUpdateTask = () => setIsEditMode(false);


    return (
        <li key={id} id={id} className='todosItem'>
            {isEditMode ?
                <>
                    <input
                        name='todo'
                        type='text'
                        placeholder={title}
                        value={newText}
                        onChange={onChange}
                    />
                    <button disabled={isUpdating} className='ButtonReady' onClick={() => { requestUpdateTodos(id, newText), onCloseUpdateTask() }}>
                        <CheckIcon />
                    </button>
                </>

                : <>
                    {title}
                    <button className='ButtonEdit' disabled={isUpdating && isEditMode} onClick={onOpenUpdateTask}>
                        <EditNoteIcon />
                    </button>
                    <button className='ButtonDelete' disabled={isDeleting && isEditMode} onClick={() => requestDeletingTodos(id)}>
                        <DeleteOutlineIcon />
                    </button>
                </>
            }
        </li>
    )
}
export default ListItem
