/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './styles.css'
import {useEffect, useState} from 'react'
import discord_logo from '../../images/discord_logo.png'
import testqr from '../../images/testqr.png'
import TextField from '../../components/text/textfield'
import Button from '../../components/buttons/button'
import API from '../../api/api';
import { useNavigate } from 'react-router'
import { useCookies } from 'react-cookie'
import Login from './components/login'
import Register from './components/register'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [page, setPage] = useState('login')
    const [username, setUsername] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const api = new API();
    api.add_endpoint('users')

    useEffect(() => {
        api.add_endpoint('getdata')
        let t = async () => {
            let resp;
            if (cookie['token'] != null) {
                api.add_get('token', cookie['token'])
                console.log('fullpath:', api.getfullpath("GET"))
                resp = await api.get()
                if(resp['status'] === 1){
                    console.log(resp)
                }
            }
            else {
                console.log('Token not found')
            }
        };
        t()
    }, [])

    return (
        <div className="wrapper">
            <div className="logo">
                <img src={discord_logo} alt="logo" className="logo" />
                <h1>Discord</h1>
            </div>

            <div className="forms">
                {page === 'login' ?
                <Login
                    api={new API()}
                        register={() => setPage('register')}
                        setCookie={setCookie}
                /> : page === 'register' ?
                <Register
                    api={new API()}
                        login={() => { setPage('login') }}
                        setCookie={setCookie}
                /> : ''
                }

                <div className="qr">
                    <img src={testqr} alt="qr" />
                    <h2>Или войдите c помощью QR кода</h2>
                </div>
            </div>
        </div>
    )
}

export default Auth;