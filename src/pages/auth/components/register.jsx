/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import TextField from "../../../components/text/textfield";
import Button from "../../../components/buttons/button";
import { useSelector, useDispatch } from 'react-redux';
import { 
  setEmail, 
  setPassword, 
  setDisplayName, 
  setUsername, 
} from '../../../redux/authSlice';
import { useNavigate } from "react-router";
import { useEffect } from "react";


const Register = ({ api, login, setCookie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { 
        email, 
        password, 
        displayName, 
        username 
    } = useSelector((state) => state.auth);

    useEffect(() => {
            api.add_endpoint('users')
            api.add_endpoint('login')
    }, [])
    
    return (
        <div className="register">
            <h1>Создать учетную запись</h1>
            <TextField
                type='email'
                value={email}
                about={'Адрес электронной почты'}
                placeholder='Email'
                onChange={(event) => {setEmail(event.target.text)}}
            />
            <TextField
                type='displayName'
                value={displayName}
                about={'Отображаемое имя'}
                placeholder='Display Name'
                onChange={(event) => {setDisplayName(event.target.text)}}
            />
            <TextField
                type='username'
                value={username}
                about={'Имя пользователя'}
                placeholder='Username'
                onChange={(event) => {setUsername(event.target.text)}}
            />
            <TextField
                type='password'
                value={password}
                about={'Пароль'}
                placeholder='Password'
                onChange={(event) => {setPassword(event.target.text)}}
            />
            <Button
                text='Продолжить'
                onClick={async () => {
                    api.add_endpoint('users')
                    api.add_endpoint('register')
                    api.add_post('username', username)
                    api.add_post('password', password)
                    api.add_post('display_name', displayName)
                    api.add_post('email', email)
                    let resp = await api.post()
                    if(resp['status'] === 1){
                        setCookie('token', resp['token'])
                    }
                    console.log(resp)
                    navigate('../')
                }}
            />
            <p className="text">Уже зарегестрированы? <span className="link" onClick={() => {
                login()
            }}>Войдите</span></p>
        </div>
    )
}

export default Register;