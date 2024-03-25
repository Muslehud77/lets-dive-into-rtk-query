
import { useGetPostByIdQuery, useGetPostsQuery } from '../Redux/features/api/baseApi';
import PostCard from '../components/PostCard';



const Feed = () => {

    // const {data : posts,isLoading, isError, error} = useGetPostsQuery() //returns an object
    const {data : post,isLoading, isError, error} = useGetPostByIdQuery(1) //returns an object

    if(isLoading){
        return <h1 className='text-7xl'>Loading........</h1>
    }

    if(!isLoading && isError){
        return <h1 className='text-7xl'>Something went wrong</h1>
    }

    return (
      <div>
        <h1>Feed</h1>
        {/* <div className='flex flex-col gap-5'>
            {
                posts?.map(post=><PostCard key={post?.id} post={post}/>)
            }
        </div> */}
        <PostCard post={post}/>
      </div>
    );
};

export default Feed;