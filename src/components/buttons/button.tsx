import "./style.css";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
    return (
        <input
            className="base-button"
            type="button"
            value={text}
            onClick={onClick}
        />
    );
};

export default Button;
