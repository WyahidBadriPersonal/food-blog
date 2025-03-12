import SingleComment from "./SingleComment"


const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea placeholder="Share your thoughts or experience" className="w-full p-4 rounded-xl"/>
            <button className="bg-purple-600 px-4 py-3 text-white font-medium rounded-xl">Post</button>
        </div>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
    </div>
  )
}

export default Comments