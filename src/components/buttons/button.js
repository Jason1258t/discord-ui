import './style.css'

const Button = ({ text, onClick }) => {
    return (
        <input className='base-button' type="button" value={text} onClick={() => {onClick()}} />
    )
}

export default Button