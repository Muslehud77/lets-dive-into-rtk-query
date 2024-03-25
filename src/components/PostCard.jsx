/* eslint-disable react/prop-types */
import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className='bg-zinc-800 rounded-md p-10 text-zinc-300'>
            <h1 className='mb-5 text-xl font-semibold hover:underline cursor-pointer'>
                {post?.title}
            </h1>
            <p className='mb-5'>{post?.body}</p>
            <hr/>
        </div>
    );
}; 


export default PostCard