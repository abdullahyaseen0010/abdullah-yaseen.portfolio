// components/projects/SectionHeader.tsx (Server Component)
import React from 'react';
import AnimatedHeader from './AnimatedHeader';

interface SectionHeaderProps {
  iconName: string;
  label: string;
  title: string;
  description: string;
}

const SectionHeader = ({ iconName, label, title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-16 text-center">
      <AnimatedHeader 
        iconName={iconName}
        label={label}
        title={title}
        description={description}
      />
    </div>
  );
};

export default SectionHeader;