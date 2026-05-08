import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (isTouchDevice || (x === -100 && y === -100)) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[10000] flex items-center justify-center"
      style={{ x: x - 10, y: y - 10 }}
      animate={{ scale: isHovering ? 1.5 : 1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
    >
      <motion.div 
        className="absolute w-full h-[1.5px] bg-purple"
        animate={{ backgroundColor: isHovering ? '#4ade80' : '#c084fc' }}
      />
      <motion.div 
        className="absolute w-[1.5px] h-full bg-purple"
        animate={{ backgroundColor: isHovering ? '#4ade80' : '#c084fc' }}
      />
    </motion.div>
  );
};
