import './styles.css';

const Dm = ({ data, onClick }) => {
    return (
        <div className="dmwrapper" onClick={() => { onClick(data.id); console.log(data.id) }}>
            <img src={data.user.avatar} alt="" />
            <p className="nametext">{data.user.display_name}</p>
        </div>
    )
}

export default Dm;