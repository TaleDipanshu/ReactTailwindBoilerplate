
import React, { useState } from 'react';
import { faChevronLeft, faChevronRight, faComment, faCube, faEllipsisVertical, faLock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "./images/img.png"

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`main ${isSidebarOpen ? 'blur' : ''}`}>
      <div className='flex justify-between text-sm text-blue-400 m-2 ml-36'>
  <div className='flex space-x-2'> 
    <div>
      <FontAwesomeIcon className='text-blue-400' icon={faCube} onClick={toggleSidebar} />
    </div>
    <div className='flex space-x-2'>
      <div>
        <FontAwesomeIcon className='text-blue-400' icon={faChevronLeft} />
      </div>
      <div>
        <FontAwesomeIcon className='text-blue-400' icon={faChevronRight} />
      </div>
    </div>
    <div className='space-x-1 flex'>
      <p className='gap-1'>
        <FontAwesomeIcon className='text-blue-400 text-xs ' icon={faLock}  />
        My private channel
      </p>
      <p>/</p>
      <p>👋Getting Started</p>
    </div>
  </div>
  
  <div className='flex space-x-2 ml-auto'>
    <div>
      <p>Share</p>
    </div>
    <div>
      <FontAwesomeIcon className='text-blue-400' icon={faComment} />
    </div>
    <div>
      <FontAwesomeIcon className='text-blue-400'icon={faStar} /> 
    </div>
    <div>
      <FontAwesomeIcon className='text-blue-400' icon={faEllipsisVertical} />
    </div>
  </div>
</div>

      <div className='ml-20 md:ml-40 w-[full] h-[104vh] mt-8'>
        <div>
          <h1 className='text-3xl font-extrabold font-poppins mb-8'>Getting started</h1>
        </div>
        <div className='bg-gray-200 dark:bg-slate-600 mb-15 mr-20 dark:text-white  text-gray-600 rounded flex'>
        <div className='pt-4 pl-2'>
            🔒
          </div>
          <div className='pt-4  pr-3 pl-2 pb-3'>
          <p>
           This doc is in your <strong>private channel</strong>, where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use <strong>workspace channels.</strong><br/>

          </p>
          
          <p className='mt-4 '>
          You can make channels <strong>public</strong> to make all docs visible to everyone on the team, or <strong>private</strong> if you want the channel's docs to only be visible by a selection of teammates.
          </p>
          </div>
        </div>
        <div className='mt-10 text-2xl font-sans font-bold text-slate-800 dark:text-white'>
          <h1 >Collaborate with your team with these three features</h1>
        </div>
        <div className='mt-6'>
          <h1 className='text-xl text-slate-900 dark:text-white'>✍️Docs</h1>
        </div>
        <div  className='bg-[#C9DAF8]  dark:bg-slate-600 w-[full] h-auto mr-20 rounded-[10px] mt-4 p-5 pr-0 pb-0'>
          <div>
            <p className='bg-blue-400 w-20 rounded-lg text-white flex text-center justify-center text-sm'>DOCS</p>
          </div>
          <div className='flex justify-between'>
            <div className='w-4/6 px-6 mr-6'> 
              <h1 className='text-xl leading-tight mb-4 tracking-wide mt-5'> 
                Create docs to collaborate with your team.<br/>
                Type <span className='bg-blue-300'>/</span> to discover Slite's editor tools and bring your docs to life.
              </h1>
            </div>
            <div className='relative bg-white dark:border-blue-400 border-t-4 border-l-4 border-slate-500 rounded-tl-lg w-5/6 mt-20 h-60'>
  <img
    src={img}
    alt="menu"
    className="absolute inset-0 w-full bottom-0 z-0 h-full object-cover rounded-tl-lg"
  />
</div>


          </div>
        </div>
        <div>
          <h2 className='bg-gray-200 mt-2 mr-20 rounded dark:text-slate-100 dark:bg-slate-400'>💡Give it a go by typing <span className='bg-gray-400'>/</span> below</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
