import TaskCart from '@/component/TaskCart';
import { getTask } from '@/lib/task';
import React from 'react';

const page = async () => {

    const tasks = await getTask()
    const t = tasks.tasks
    console.log(t)

    return (
        <div>
            <h2>Task: {t.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    t.map(v => <TaskCart key={v.id} p={v}></TaskCart>)
                }
            </div>
        </div>
    );
};

export default page;