import React from 'react';
import ChildDiv from './ChildDiv';

const FlexContainer: React.FC = () => {
  return (
    <div className="flex gap-4">
      <ChildDiv content="Showcase 1" />
      <ChildDiv content="Showcase 2" />
      <ChildDiv content="Showcase 3" />
    </div>
  );
};

export default FlexContainer;