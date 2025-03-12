import React from "react";

const Row = ({ children }) => {
    return (
        <div style={{ display: "flex", displayDirection: "row", alignItems: "center" }}>
            {children}
        </div>
    );
};

export default Row;
