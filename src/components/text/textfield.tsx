import React from "react";
import "./styles.css";

const TextField = ({
    onChange,
    type,
    value,
    about,
    placeholder,
}: {
    onChange?: ((v: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    type: string;
    value?: string | undefined;
    about?: string | null;
    placeholder?: string | undefined;
}) => {
    return (
        <div style={{ alignContent: "left", minWidth: "100%" }}>
            {about && <p className="about">{about}</p>}
            <input
                className="base-textfield"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextField;
