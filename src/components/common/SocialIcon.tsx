import React from 'react';
import * as LucideIcons from 'lucide-react';
import LeetCodeIcon from './icons/LeetCode';

interface SocialIconProps {
  name: string;
  size?: number;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 24, className = '' }) => {
  if (name === 'LeetCode') {
    return <LeetCodeIcon size={size} className={className} />;
  }
  
  // @ts-ignore - dynamic component
  const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
  return <Icon size={size} className={className} />;
};

export default SocialIcon;