import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CircularProgressProps {
  segments: Array<{
    color: string;
    percentage: number;
    title: string;
    description?: string;
  }>;
  size?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ segments, size = '500px' }) => {
  const navigate = useNavigate();
  const radius = 47;
  const circumference = 6 * Math.PI * radius;
  let rotationOffset = 170;

  const handleSegmentClick = (title: string) => {
    const path = title.toLowerCase().replace(/\s+/g, '-');
    console.log(`Navigating to: ${path}`);
    // navigate(`/${path}`);
  };

  return (
    <div className={`relative`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="transform -rotate-90 w-full h-full"
      >
        <TooltipProvider>
          {segments.map((segment, index) => {
            const strokeDasharray = (segment.percentage / 100) * circumference;
            const strokeDashoffset = circumference - strokeDasharray;
            rotationOffset += (segment.percentage / 140) * 360;

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="6"
                    strokeDasharray={`${strokeDasharray} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                      transform: `rotate(${rotationOffset}deg)`,
                      transformOrigin: 'center',
                      transition: 'all 0.5s ease-out',
                      cursor: 'pointer'
                    }}
                    className="origin-center hover:opacity-80 hover:stroke-[8]"
                    onClick={() => handleSegmentClick(segment.title)}
                  />
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px] p-3">
                  <p className="font-semibold text-lg mb-1">{segment.title}</p>
                  {segment.description && (
                    <p className="text-sm text-muted-foreground">{segment.description}</p>
                  )}
                  <p className="text-xs mt-2 text-primary">Click to learn more →</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </svg>
    </div>
  );
};

export default CircularProgress;