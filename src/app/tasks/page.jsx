import { getTask } from '@/lib/task';
import React from 'react';

const page = async () => {

    const tasks = await getTask()
    const t = tasks.tasks
    console.log(t)

    return (
        <div>
            <h2>Task: {t.length}</h2>
        </div>
    );
};

export default page;