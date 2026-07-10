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
      type: 'img',
      src: require('@/assets/images/portalImg/home-banner1.png'),
      alt: '示例图片 1'
    },
    { 
      id: 2,
      type: 'video',
      src: require('@/assets/images/portalImg/0.mp4'),
      alt: '示例视频'
    },
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
          <div key={item.id} style={{ width: '100%', height: '100vh' }}>
            {item.type === 'img' ? (
              <img
                alt={item.alt}
                src={item.src}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
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
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default HomeSwiper
