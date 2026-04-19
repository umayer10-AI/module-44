import { Button } from '@heroui/react';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-5'>Hero</h2>
            <Button>Button</Button>
            <Button variant='secondary'>Button</Button>
            <Button variant='outline'>Button</Button>
        </div>
    );
};

export default page;