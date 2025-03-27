import { useState, useEffect } from "react";

const useContextMenu = () => {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(
        null
    );

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();

        const pos = { x: e.clientX, y: e.clientY };
        const width = 200;
        const height = 150;

        const { innerWidth, innerHeight } = window;

        let x = pos.x;
        let y = pos.y;

        console.log(`got position ${x} ${y}`);

        if (x + width > innerWidth) x -= width + 10;
        if (y + height > innerHeight) y -= height + 10;

        console.log(`window constarints: w ${innerWidth} h ${innerHeight}`);
        console.log(`positon: x ${x} y ${y}`);

        setPosition({ x, y });
    };

    return {
        position,
        handleContextMenu,
        closeMenu: () => setPosition(null),
    };
};

export default useContextMenu;
