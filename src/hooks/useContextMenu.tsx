import { useState, useRef, useEffect } from "react";

const useContextMenu = () => {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(
        null
    );
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("right clicked");
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(`is menu opened: ${position !== null}`);
    };

    useEffect(() => {
        if (!position || !menuRef.current) return;

        const menu = menuRef.current;
        const { width, height } = menu.getBoundingClientRect();
        const { innerWidth, innerHeight } = window;

        // Корректировка позиции
        let x = position.x;
        let y = position.y;

        if (x + width > innerWidth) x = innerWidth - width - 10;
        if (y + height > innerHeight) y = innerHeight - height - 10;

        if (x < 0) x = 10;
        if (y < 0) y = 10;

        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;
    }, [position]);

    return {
        position,
        menuRef,
        handleContextMenu,
        closeMenu: () => {
            setPosition(null);
            console.log(`menu closed, position: ${position}`);
        },
    };
};

export default useContextMenu;
