import { useLocation, useNavigate } from 'react-router';
import styles from './index.module.less'
import classnames from 'classnames'
import { useCallback, useEffect, useState } from 'react';
type Props = {
  navMenus:any[];
  pageTitle:string;
}
const PortalHeader:React.FC<Props> = ({navMenus,pageTitle}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isActive = useCallback((key:string) => {
    return pathname.indexOf(key) > -1;
  }, [pathname])
  const navItemClick = (item:any) => {
    if(item.key === 'backstage'){
      navigate(`/manager`);
      return;
    }
    navigate(`/fnodePortal${item.path}`);
  }
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    // 定义滚动处理函数
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={
      classnames('w-full h-[72px] flex-shrink-0 fixed top-0 left-0 pl-[30px] pr-[30px] z-[1000]', styles.headerContainer,{
        [styles.scrollHeader]: scrollY > 10
      })
    }>
      <div className="w-full h-full flex items-center" style={{fontFamily:'SHS-M'}}>
        <img alt="logo" className="w-[50px] h-[50px] rounded-full mr-[10px]" src={require('@/assets/images/ai-avator.png')} />
        <div className="color-[#000000] text-[24px] font-bold mr-[80px]">{pageTitle}</div>
        <div className={styles.navMenus}>
          {
            navMenus?.map((item) => (
              <div className={classnames(styles.navItem, {
                [styles.active]: isActive(item.key)
              })} key={item.key} onClick={()=>navItemClick(item)}>
                <div className="h-[40px] leading-[40px]">
                  {item.name}
                </div>
              </div>
            ))
          }
        </div>
        <div className="right_action">
          登录/注册
        </div>
      </div>
    </div>
  );
} 

export default PortalHeader;