import React from 'react';
import { faBell, faHand, faMagnifyingGlass, faClock, faMessage, faLock, faDoorOpen, faCircleChevronRight, faCircleChevronDown, faUser, faShareFromSquare, faArchive, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./images/logo.jpg";

function DashBoard({ theme }) {
  return (
    <div className={`bg-${theme === 'dark' ? 'gray-900' : 'gray-300'} text-${theme === 'dark' ? 'white' : 'black'} h-[110vh] md:h-[110vh] pt-2 md:block z-20 relative`}>
      <div className='flex justify-between gap-2 pl-1'>
        <div className='flex gap-1'>
          <img src={logo} className='rounded-[50%] w-[1.3rem]' alt='Silhouette of a man' />
          <p className='text-[0.8rem] flex items-center'>referro team</p>
        </div>
        <div className='ml-4 mr-2'>
          <FontAwesomeIcon color='gray' icon={faBell} />
        </div>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <div className='flex items-center justify-center rounded-lg w-full m-2 bg-white'>
          <FontAwesomeIcon icon={faHand} color='gray' className='p-2' />
          <p className='text-s'>Ask your AI assistant</p>
        </div>
        <div className='bg-white rounded-lg w-[20%] p-2 mr-2 flex justify-center'>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='gray' />
        </div>
      </div>
      <div className='bg-gray-400 w-[95%] rounded-lg m-2'>
        <h6 className='p-2 text-slate-700'>Your team used 8/50 free docs</h6>
        <p className='text-xs text-slate-300 px-2 pb-2'>Upgrade to create unlimited docs</p>
      </div>
              <div className='text-sm flex items-center ml-4 text-slate-700 '>
 <FontAwesomeIcon icon={faClock} color='gray' className='p-2' />
<h6>Catch up</h6>
</div>
<div className='text-sm flex items-center ml-4 text-slate-700 '>
<FontAwesomeIcon icon={faMessage} color='gray' className='p-2' />
<h6>Discussions</h6>
</div>
<h4 className='ml-4 text-md mt-3 text-slate-800'>Favorites</h4>
<h6 className='text-sm text-slate-700 mt-2 ml-4'>👋 Getting started</h6>
<h4 className='ml-4 text-md mt-3 text-slate-800'>My channels</h4>
<h6 className='text-sm text-slate-700 mt-2 ml-4'>
<FontAwesomeIcon icon={faCircleChevronDown} color='gray' className='px-1' />
<FontAwesomeIcon icon={faLock} color='gray' className='px-1' />
My private channel
</h6>
<h6 className='text-sm text-slate-700 mt-2 ml-6 bg-slate-300 rounded-md mr-2'>👋 Getting started</h6>
<h6 className='text-sm text-slate-700 mt-2 ml-4'>
<FontAwesomeIcon icon={faCircleChevronRight} color='gray' className='px-1' />
<FontAwesomeIcon icon={faDoorOpen} color='gray' className='px-1' />
Engineering
</h6>
<h6 className='text-sm text-slate-700 mt-2 ml-4'>
<FontAwesomeIcon icon={faCircleChevronRight} color='gray' className='px-1' />
<FontAwesomeIcon icon={faDoorOpen} color='gray' className='px-1' />
Product
</h6>
<div className='flex-row  ml-2 mt-[6rem] md:mt-[15rem]  '>
<h6>
  <FontAwesomeIcon icon={faUser} color='gray' className='px-1' />
  Add people
</h6>
<h6>
  <FontAwesomeIcon icon={faCircleHalfStroke} color='gray' className='px-1' />
  Templates
</h6>
<h6>
  <FontAwesomeIcon icon={faShareFromSquare} color='gray' className='px-1' />
  Shared with me
</h6>
<h6 >
  <FontAwesomeIcon icon={faArchive} color='gray' className='px-1 ' />
  Archive
</h6>
</div> 

    </div>
   );
}

 export default DashBoard;