import React from 'react';

interface MaskedDivProps {
  children: React.ReactNode;
  maskType: 'type-1' | 'type-2' | 'type-3' | 'type-4';
  size?: number;
  className?: string;
}

const MaskedDiv: React.FC<MaskedDivProps> = ({ 
  children, 
  maskType, 
  size = 1, 
  className = '' 
}) => {
  const getMaskStyle = () => {
    switch (maskType) {
      case 'type-1':
        return {
          clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
        };
      case 'type-2':
        return {
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        };
      case 'type-3':
        return {
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        };
      case 'type-4':
        return {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        };
      default:
        return {};
    }
  };

  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{
        ...getMaskStyle(),
        transform: `scale(${size})`,
      }}
    >
      {children}
    </div>
  );
};

export default MaskedDiv;
