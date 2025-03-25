import { useState } from 'react';

const useHover = (): [
  boolean, 
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
] => {
  const [isHover, setHover] = useState(false);

  const bind = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  return [isHover, bind];
};

export default useHover;