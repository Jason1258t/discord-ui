/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import TextField from "../../../components/text/textfield"
import Button from "../../../components/buttons/button"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
import { 
  setEmail, 
  setPassword, 
  setDisplayName, 
  setUsername, 
} from '../../../redux/authSlice';
import { useEffect } from "react";


const Login = ({api, setCookie, register }) => {
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
        <div className="login">
            <h2>Добро пожаловать!</h2>
            <TextField about='Email или номер телефона' type="email" value={email} onChange={(event) => {dispatch(setEmail(event.target.value))}} placeholder="Email"/>
            <TextField about='Пароль' type={"password"} value={password} onChange={(event) => {dispatch(setPassword(event.target.value))}} placeholder="Your password"/>
            <Button text='Вход' onClick={async () => {
                api.add_get('username', email)
                api.add_get('password', password)
                let resp = await api.get()
                if(resp['status'] === 1){
                    setCookie('token', resp['token'])
                    navigate('../')
                }
                console.log(resp)
            }}/>
            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left', width: '100%'}}>
                <p className="text">Нужна учетная запись? <span className="link" onClick={() => {
                    register()
                }}> Зарегестрироваться </span></p>
            </div>
        </div>
    )
}

export default Login;