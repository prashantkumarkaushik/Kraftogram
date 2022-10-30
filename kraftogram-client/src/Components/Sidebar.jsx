import { FaHome, FaFire } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
import { IoTimerSharp } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div>
      <div className="text-gray-100 w-[15vw] h-[100vh] fixed bg-background pt-4 border-t-[1.5px] border-solid border-gray-400">
        <div className='flex items-center text-xl ml-7'><FaHome className='text-2xl' /><span className='ml-2 py-3'>Home</span></div>
        <div className='flex items-center text-xl ml-7'><FaFire className='text-2xl' /><span className='ml-2 py-3'>Trending</span></div>
        <div className='flex items-center text-xl ml-7'><MdVideoLibrary className='text-2xl' /><span className='ml-2 py-3'>DIY</span></div>
        <div className='flex items-center text-xl ml-7'><IoTimerSharp className='text-2xl' /><span className='ml-2 py-3'>Challenges</span></div>
      </div>
    </div>
  )
}

export default Sidebar
