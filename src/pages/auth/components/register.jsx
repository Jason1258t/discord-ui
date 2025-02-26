import TextField from "../../../components/text/textfield";
import Button from "../../../components/buttons/button";


const Register = ({email, setEmail, username, setUsername, displayName, setDisplayName, password, setPassword, api, login}) => {
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
                onClick={() => {
                    console.log('clicked')
                }}
            />
            <p className="text">Уже зарегестрированы? <span className="link" onClick={() => {
                login()
            }}>Войдите</span></p>
        </div>
    )
}

export default Register;