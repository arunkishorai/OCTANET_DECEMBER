import React from 'react';

interface CharacterCountProps {
  count: number;
}

const CharacterCount = ({ count }: CharacterCountProps) => {
  return (
    <div className="text-sm text-blue-400 mt-2">
      Character Count: {count}
    </div>
  );
};

export default CharacterCount;