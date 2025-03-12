import React from 'react'
import Image from './Image'

const SingleComment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            <Image src="johnny.png" className="rounded-full w-10 h-10 object-cover" alt="johnny" w="40"/>
            <span className='font-medium'>Johnny Bravo</span>
            <span className='text-sm text-gray-500'>3 hours ago</span>
        </div>
        <div className='mt-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae!</p>
        </div>
    </div>
  )
}

export default SingleComment