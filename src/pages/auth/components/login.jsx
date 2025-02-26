import TextField from "../../../components/text/textfield"
import Button from "../../../components/buttons/button"

const Login = ({email, setEmail, password, setPassword, api, setCookie, register}) => {
    return (
        <div className="login">
            <h2>Добро пожаловать!</h2>
            <TextField about='Email или номер телефона' type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} placeholder="Email"/>
            <TextField about='Пароль' type={"password"} value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Your password"/>
            <Button text='Вход' onClick={async () => {
                api.add_endpoint('login')
                api.add_get('username', email)
                api.add_get('password', password)
                let resp = await api.get()
                if(resp['status'] === 1){
                    setCookie('token', resp['token'])
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