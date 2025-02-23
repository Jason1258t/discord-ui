import './styles.css';

const Dm = ({ data }) => {
    return (
        <div className="dmwrapper" onClick={data.onClick}>
            <img src={data.user.avatar} alt="" />
            <p className="nametext">{data.user.display_name}</p>
        </div>
    )
}

export default Dm;