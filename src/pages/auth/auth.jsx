import './styles.css'
import {useState} from 'react'
import discord_logo from '../../images/discord_logo.png'
import testqr from '../../images/testqr.png'
import TextField from '../../components/text/textfield'
import Button from '../../components/buttons/button'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="wrapper">
            <div className="logo">
                <img src={discord_logo} alt="logo" className="logo" />
                <h1>Discord</h1>
            </div>

            <div className="forms">
                <div className="login">
                    <h2>Добро пожаловать!</h2>
                    <TextField about='Email или номер телефона' type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} placeholder="Email"/>
                    <TextField about='Пароль' type={"password"} value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Your password"/>
                    <Button text='Вход' onClick={() => console.log('Clicked')}/>
                    <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left', width: '100%'}}>
                        <p className="text">Нужна учетная запись? <span className="link"> Зарегестрироваться </span></p>
                    </div>
                </div>

                <div className="qr">
                    <img src={testqr} alt="qr" />
                    <h2>Или войдите c помощью QR кода</h2>
                </div>
            </div>
        </div>
    )
}

export default Auth;