
import React, { useState, useEffect } from 'react';
import { cn } from '../Libs/utils';

const TextWithMarquee = ({ children, className, threshold = 10 }) => {
  const [isMarquee, setIsMarquee] = useState(false);

  useEffect(() => {
    const textElement = document.querySelector('.marquee-text');
    if (textElement && textElement.textContent.trim().length > threshold) {
      setIsMarquee(true);
    } else {
      setIsMarquee(false);
    }
  }, [children, threshold]);

  return (
    <p className={cn('marquee-text', `${isMarquee ? 'animate-marquee whitespace-nowrap' : ''}`, className)}>
    {children}
    </p>
  );
};

export default TextWithMarquee; 