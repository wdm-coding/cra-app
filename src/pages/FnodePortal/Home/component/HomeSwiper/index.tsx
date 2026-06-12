import { Carousel } from 'antd'
import { useCallback, useEffect, useRef, useState } from 'react'

const HomeSwiper:React.FC<{onScrollDown:()=>void}> = ({onScrollDown}) => {
  const switchInterval = 3000; // 切换间隔时间，单位为毫秒
  const [activeVideo, setActiveVideo] = useState<HTMLVideoElement | null>(null); // 当前正在播放的视频元素
  const [autoSwitch, setAutoSwitch] = useState(true);
  const carouselRef = useRef<any>(null)
  const mediaItems:any[] = [
    {
      id: 0,
      type: 'image',
      src: require('@/assets/images/portalImg/home-banner1.png'),
      alt: '示例图片 1'
    },
    {
      id: 1,
      type: 'image',
      src: require('@/assets/images/banner01.png'),
      alt: '示例图片 1'
    },
    // { 
    //   id: 2,
    //   type: 'video',
    //   src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    //   poster: 'https://via.placeholder.com/800x400/28a745/ffffff?text=Video+Poster',
    //   alt: '示例视频'
    // },
    // { 
    //   id: 3,
    //   type: 'image',
    //   src: require('@/assets/images/login-banner.png'),
    //   alt: '示例图片 2'
    // },
    // {
    //   id: 4,
    //   type: 'video',
    //   src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    //   poster: 'https://via.placeholder.com/800x400/28a745/ffffff?text=Video+Poster',
    //   alt: '示例视频'
    // }
  ]
  const onChange = useCallback((currentSlide: number) => {
    if(activeVideo) {
      activeVideo.currentTime = 0; // 重置视频到开头
    }
  }, [activeVideo])
  useEffect(() => {
    let timer: any = null;
    if (autoSwitch) {
      timer = setInterval(() => {
        carouselRef.current?.next();
      }, switchInterval);
    }
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    }
  }, [autoSwitch, switchInterval])
  return (
    <div className="w-full relative">
      <div
        className="absolute bottom-[50px] left-0 right-0 text-center text-[#3D3D3D] z-[999] cursor-pointer text-[16px]"
        onClick={onScrollDown}
      >
        下滑查看更多
      </div>
      <Carousel afterChange={onChange} ref={carouselRef} style={{ width: '100%', height: '100%' }}>
        {mediaItems.map((item, index) => (
          <div className="w-full h-[100vh]" key={item.id}>
            {item.type === 'image' ? (
              <img
                alt={item.alt}
                src={item.src}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <video
                autoPlay
                muted
                onEnded={(e) => {
                  setAutoSwitch(true)
                  setActiveVideo(e.target as HTMLVideoElement)
                }}
                onError={() => setAutoSwitch(true)}
                onPlay={() => {
                  setAutoSwitch(false)
                }}
                poster={item?.poster || ''}
                src={item.src}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default HomeSwiper
