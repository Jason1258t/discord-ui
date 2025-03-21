import "./dm.css";

const Dm = ({ data, onClick, isSelected = false }) => {
    console.log(data.message, isSelected, isSelected && "active");
    return (
        <div
            className="dmwrapper"
            onClick={() => {
                onClick(data.id);
                console.log(data.id);
            }}
        >
            <img src={data.user.avatar} alt="" />
            <div className="content-wrapper">
                <p className="name">{data.user.display_name}</p>
                <p className="last-message">
                    {data.message ? data.message.text : "Начните общение"}
                </p>
            </div>
        </div>
    );
};

export default Dm;
