import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.less'
const MarqueeText = ({ text }: { text: string }) => {
  // 测量锚点必须是带 overflow: hidden 和宽度约束的外层容器，
  // 内层 inline-block 宽度随内容撑开，其 scrollWidth 与 clientWidth 永远相等
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  useEffect(() => {
    const checkOverflow = () => {
      const el = containerRef.current;
      if (el) {
        setIsOverflowing(el.scrollWidth > el.clientWidth);
      }
    };
    // 初始渲染时检查
    checkOverflow();
    // 字体加载完成后复测一次，避免字体未加载时文本宽度测量偏小
    document.fonts?.ready.then(checkOverflow);
    // 监听窗口大小变化，动态响应式检测
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [text]); // 当传入的 text 发生变化时重新检测

  return (
    <div className={classNames(styles.marqueeContainer)} ref={containerRef}>
      {/* 只有当文本溢出时，才添加 is-scrolling 类名开启动画 */}
      <div
        className={
          classNames(styles.marqueeText, {
            [styles.isScrolling]: isOverflowing
          })
        }
        data-text={text}
      >
        {text}
      </div>
    </div>
  );
};

export default MarqueeText;