
import { useForm } from 'react-hook-form';
import { useGetPostByIdQuery, useGetPostsQuery, useSetPostMutation } from '../Redux/features/api/baseApi';
import PostCard from '../components/PostCard';
import { useEffect, useState } from 'react';



const Feed = () => {
      const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

    const [setPost,{data: postData}] = useSetPostMutation() // returns an array
    const [postId,setPostId] = useState(null)
    const {data : posts,isLoading, isError, error} = useGetPostsQuery() //returns an object
    // const { data: post } = useGetPostByIdQuery(postId); //returns an object


     useEffect(() => {
        setPostId(postData?.id || 1)
        console.log(postData);
     }, [postData]);


    if(isLoading){
        return <h1 className='text-7xl'>Loading........</h1>
    }

    if(!isLoading && isError){
        return <h1 className='text-7xl'>Something went wrong</h1>
    }

   
    
  const onSubmit = (data) => {
    console.log(data)
    setPost({title : 'this is a title', body : data.post, userId : 45454})
};


    return (
      <div>
        <h1 className="text-5xl my-2">Feed</h1>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-2'>
            <input placeholder='post' className="w-full" {...register("post")} />
            <button className="px-5 py-2 border" type="submit">
              Post
            </button>
          </div>
        </form>
        <div className='flex flex-col gap-5'>
            {
                posts?.map(post=><PostCard key={post?.id} post={post}/>)
            }
        </div>
        {/* <PostCard post={post} /> */}
      </div>


    );
};

export default Feed;