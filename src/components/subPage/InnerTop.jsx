import React from 'react'

const InnerTop = ({subtitle, title, url, color}) => {
  return (
    <div 
    className="h-[320px] bg-cover bg-center relative"
    style={{ backgroundImage: `url('/images/pattern/${url}')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-30">
      <div className={`flex flex-col gap-[5px] pt-[180px] ${color==='black'?'text-black':'text-white'} px-[320px] text-5xl font-semibold text-center
      mobileMore:ml-5
      mobileMore:pl-3
      mobileMore:text-6xl
      mobileMore:text-left
      tabletMore:px-[320px]
      `}>
        <div className='text-3xl opacity-70'>
            {subtitle}
        </div>
        {title}
    </div>
  </div>
</div>
  )
}

export default InnerTop