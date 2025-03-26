import { useState } from "react";

const useHover = (options?: {
    onChange?: (isHovering: boolean) => void;
}): [
    boolean,
    {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    }
] => {
    const [isHover, setHover] = useState(false);
    const { onChange } = options || {};
    const bind = {
        onMouseEnter: () => {
            setHover(true);
            onChange?.(true);
        },
        onMouseLeave: () => {
            setHover(false);
            onChange?.(false);
        },
    };

    return [isHover, bind];
};

export default useHover;
