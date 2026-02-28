// src/components/ui/InfiniteMarquee.jsx

import { useRef } from 'react';

export default function InfiniteMarquee({
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) {
  const containerRef = useRef(null);
  const animClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div
      ref={containerRef}
      className={`marquee-mask overflow-hidden ${pauseOnHover ? 'marquee-container' : ''} ${className}`}
    >
      <div
        className={`marquee-track flex w-max gap-4 ${animClass}`}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        {/* Original + duplicate for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}
