import React from 'react';

interface DotGridProps {
  cols: number;
  rows: number;
  opacity?: number;
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({ cols, rows, opacity = 0.3, className = "" }) => {
  const dots = Array.from({ length: cols * rows });

  return (
    <div 
      className={`grid gap-[6px] pointer-events-none ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        opacity 
      }}
    >
      {dots.map((_, i) => (
        <span 
          key={i} 
          className="w-[3px] h-[3px] bg-purple rounded-full block"
        />
      ))}
    </div>
  );
};
