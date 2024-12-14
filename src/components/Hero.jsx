import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1)
    const [HasClicked, setHasClicked] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [LoudedVideos, setLoudedVideos] = useState(0)
    const total = 3
    const upcomingvideo = (currentIndex % total) + 1
    const nextVedeoRef = useRef(null)
    const handelMiniVedeoClick = ()=>{
        setHasClicked(true)
        setcurrentIndex(upcomingvideo)
    }
    console.log(currentIndex, HasClicked);
    const getVedeoSrc  =(index) => `videos/hero-${index}.mp4`
    const handelVideoLoad = ()=>{
        setLoudedVideos(p => p + 1)
    }
  return (
    <div
    className='relative h-dvh a w-screen overflow-x-hidden'
    >
        <div
        id='vedeo-frame'
        className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'
        >
            <div>
                <div
                className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer  rounded-lg overflow-hidden'
                >
                    <div
                        onClick={handelMiniVedeoClick}
                        className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100'
                    >
                        <video 
                        loop
                        ref={nextVedeoRef}
                        src={getVedeoSrc(currentIndex + 1)}
                        muted 
                        id='current-video'
                        className='size-64 origin-center scale-150 object-cover object-center'
                        onLoadedData={handelVideoLoad}
                        />
                    </div>
                    </div>
            <video 
            ref={nextVedeoRef}
            src={getVedeoSrc(currentIndex)}
            loop 
            muted
            id='next-vidoe'
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
            onLoad={handelVideoLoad}
            /> 
            <video 
            autoPlay
            loop
            src={getVedeoSrc(currentIndex === total - 1 ? 1 : currentIndex )}
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            </div>
        </div>
    </div>
  )
}

export default Hero