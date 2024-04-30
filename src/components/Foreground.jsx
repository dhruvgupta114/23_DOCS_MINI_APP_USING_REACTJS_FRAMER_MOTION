import { useEffect, useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {
  const [desc, setDesc] = useState('')
  const [size, setSize] = useState('')
  const [tagcolor,setTagcolor] = useState('')
  const [data, setData] = useState([])

  const ref = useRef(null)
  
  const handleSubmit = () =>{
    let newBox = {
      description: desc,
      fileSize: size,
      close: true,
      tag: {
        isOpen:true, 
        tagTitle: 'Download Now', 
        tagColor: tagcolor
      }
    };
    let updateData = [...data]
    updateData.push(newBox);
    setData(updateData)
    setDesc('')
    setSize('')
    setTagcolor('')
  }

  return (
    <>
      <div className=" fixed z-[3]  p-10 flex flex-row gap-3 flex-wrap items-start justify-center">
        <input required type="text" placeholder='Enter the Description' className='px-5 border-none outline-none  bg-zinc-500 rounded-full text-white font-light py-2' value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <input required type="text" placeholder='Enter the Size of the file' className='px-5 border-none outline-none  bg-zinc-500 rounded-full text-white font-light py-2' value={size} onChange={(e)=>setSize(e.target.value)} />
        <input required type="text" placeholder='write blue or green' className='px-5 border-none outline-none  bg-zinc-500 rounded-full text-white font-light py-2 lowercase' value={tagcolor} onChange={(e)=>setTagcolor(e.target.value)} />
        <button type='button' className='px-5 border-none outline-none  bg-zinc-500 rounded-full text-white font-light py-2 cursor-pointer' onClick={handleSubmit}>Submit</button>
      </div>
        <div ref={ref} className=" fixed z-[3] top-20 left-0 w-full h-full flex gap-5 flex-wrap p-10 ">
        {data.map((item,index)=>(
          <Card  key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  )
}

export default Foreground
