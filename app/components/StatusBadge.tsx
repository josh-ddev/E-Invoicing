import React from 'react';
import { StatusType } from '../../types';

interface StatusBadgeProps {
  status: string;
  type: StatusType;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  const getStatusConfig = () => {
    switch (type) {
      case 'accepted':
        return {
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5 8l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          dotColor: 'green-500',
          textColor: 'text-gray-900',
        };
      case 'processing':
        return {
          icon: (
            // <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            //   <circle
            //     cx="8"
            //     cy="8"
            //     r="7"
            //     stroke="currentColor"
            //     strokeWidth="2"
            //   />
            // </svg>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 4.5v3.5l2.5 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          dotColor: 'blue-500',
          textColor: 'text-gray-900',
        };
      case 'rejected':
        return {
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
          dotColor: 'red-500',
          textColor: 'text-gray-900',
        };
      case 'created':
        return {
          icon: (
            // <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            //   <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
            // </svg>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 4.5v5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="11.5" r="1" fill="currentColor" />
            </svg>
          ),
          dotColor: 'orange-500 ',
          textColor: 'text-gray-900',
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="flex items-center gap-2">
      <span className={`text-${config.dotColor}`}>{config.icon}</span>
      <span className={`w-2 h-2 rounded-full bg-${config.dotColor}`}></span>
      <span className={config.textColor}>{status}</span>
    </div>
  );
};
export default StatusBadge;
