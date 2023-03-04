/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import React, {useState} from 'react';

export const App = () => {
	const [allTasks, setTasks] = useState<string[]>([]);
	const [completedTask, setCompletedTasks] = useState([1, 2]);

	const [inputValue, setInputValue] = useState('');

	return <div>
		<div className={`
            p-5
            h-screen
            bg-black/10
        `}>
			<h1>Active notes</h1>
			{
				allTasks.map(task => <div key={task}>
					{task}
				</div>)
			}

			<h1>Completed notes</h1>
			{
				completedTask.map(task => <div key={task}>
					{task}
				</div>)
			}
		</div>
		<div className={`
            fixed
            bottom-0
            w-full
            bg-white
            p-5
        `}>
			<textarea className={`
                rounded-md
                w-full
                p-2
                resize-none
                border-solid
                border-2
                border-black-500
            `} onChange={e => {
				setInputValue(e.target.value);
			}}></textarea>
			<button className={`
                mt-1
                w-full
                p-2
                text-white
                bg-violet-700
            `} onClick={() => {
				void axios.post('http://localhost:2020/api/create_note', {
					data: inputValue,
				}).then((r: any) => {
					setTasks(prev => prev.concat(`${r.data}`));
				});
			}}>send</button>
		</div>
	</div>;
};
