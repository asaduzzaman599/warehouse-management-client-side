import { EmojiSadIcon } from '@heroicons/react/solid';
import React from 'react';

const NotFound = () => {
    return (
        <div className='my-16'>
            <EmojiSadIcon className="h-32 w-32 text-gray-500 mx-auto mb-8" />
            <p className='text-4xl text-gray-500 font-semibold'>404 ! Page Not Found</p>
        </div>
    );
};

export default NotFound;