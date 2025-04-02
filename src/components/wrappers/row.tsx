import React, { CSSProperties, ReactNode } from "react";

const Row = ({
    children,
    styles = {},
}: {
    children: ReactNode;
    styles?: CSSProperties;
}) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                ...styles,
            }}
        >
            {children}
        </div>
    );
};

export default Row;
