import { useState } from "react";

interface Posiiton {
    x: number;
    y: number;
}
const useContextMenu = () => {
    const [position, setPosition] = useState<Posiiton | null>(null);

    const MENU_WIDTH = 200;
    const MENU_HEIGHT = 150;

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        const { innerWidth, innerHeight } = window;

        let x = e.clientX;
        let y = e.clientY;

        if (x + MENU_WIDTH > innerWidth) x -= MENU_WIDTH + 10;
        if (y + MENU_HEIGHT > innerHeight) y -= MENU_HEIGHT + 10;

        setPosition({ x, y });
    };

    return {
        position,
        handleContextMenu,
        closeMenu: () => setPosition(null),
    };
};

export default useContextMenu;
