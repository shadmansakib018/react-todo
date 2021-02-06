import React, {useState} from 'react';
import Todoform from './Todoform';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

	const [edit, setEdit] = useState({
		id : null,
		value: ""
	});

	const submitUpdate = value =>{
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: ""
		});
	};

	if(edit.id){
		return <Todoform edit={edit} add={submitUpdate} />;
	}



	return todos.map((todo, i)=>(
		<div className={todo.isComplete ? "todo-row complete": "todo-row"} key={i}>
			
			<div key={todo.id} onClick={()=>completeTodo(todo.id)} >
				{todo.text}
			</div>

			<div className="icons">
				<RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete-icon' />
				<TiEdit className='edit-icon' onClick={()=>setEdit({id:todo.id, value:todo.text}) } />
			</div>
		</div>
	))
}

export default Todo