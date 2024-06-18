import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed bottom-12 max-w-full gap-x-2 gap-y-2 rounded-[10px] bg-menu_bg border flex-col flex p-[9px] max-sm:p-[5px] border-solid border-menu_border transition-all ease-in-out duration-[0.5s]'>
        <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[10px] bg-[#2D2933] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <a href="#home" className="font-bold text-[30px] text-slate-300 ease-in-out transition-all duration-[0.5s] opacity-[100%] hover:text-slate-600 pl-[12px]">PA</a>
        </div>
        <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[10px] bg-[#5F5D5D] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <a href="#about" className='font-bold text-[17px] text-slate-300 ease-in-out transition-all duration[0.5s] rounded-[10px] stroke-[#5C5C5C]'>About</a>
        </div>
        <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[10px] bg-[#5F5D5D] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <a href="#about" className='font-bold text-[17px] text-slate-300 ease-in-out transition-all duration[0.5s] rounded-[10px] stroke-[#5C5C5C]'>Techs</a>
        </div>
        <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[10px] bg-[#5F5D5D] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <a href="#about" className='font-bold text-[17px] text-slate-300 ease-in-out transition-all duration[0.5s] rounded-[10px] stroke-[#5C5C5C]'>Projects</a>
        </div>
        <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[10px] bg-[#49464C] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <a href="#about" className='font-bold text-[17px] text-slate-300 ease-in-out transition-all duration[0.5s] rounded-[10px] stroke-[#5C5C5C]'>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar