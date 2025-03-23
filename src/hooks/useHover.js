import { useState } from 'react';

const useHover = () => {
    const [isHover, setHover] = useState(false);

    const bind = {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
    };

    return [isHover, bind];
};

export default useHover;