/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import TextField from "../../../components/text/textfield";
import Button from "../../../components/buttons/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styles from "../auth.module.css";

const Register = ({ api, login, setCookie }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        api.add_endpoint("users");
        api.add_endpoint("login");
    }, []);

    return (
        <div className={styles.register}>
            <h1>Создать учетную запись</h1>
            <TextField
                type="email"
                value={email}
                about={"Адрес электронной почты"}
                placeholder="Email"
                onChange={(event) => {
                    setEmail(event.target.text);
                }}
            />
            <TextField
                type="displayName"
                value={displayName}
                about={"Отображаемое имя"}
                placeholder="Display Name"
                onChange={(event) => {
                    setDisplayName(event.target.text);
                }}
            />
            <TextField
                type="username"
                value={username}
                about={"Имя пользователя"}
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.text);
                }}
            />
            <TextField
                type="password"
                value={password}
                about={"Пароль"}
                placeholder="Password"
                onChange={(event) => {
                    setPassword(event.target.text);
                }}
            />
            <Button
                text="Продолжить"
                onClick={async () => {
                    api.add_endpoint("users");
                    api.add_endpoint("register");
                    api.add_post("username", username);
                    api.add_post("password", password);
                    api.add_post("display_name", displayName);
                    api.add_post("email", email);
                    let resp = await api.get();
                    if (resp["status"] === 1) {
                        setCookie("token", resp["token"]);
                    }
                    console.log(resp);
                    navigate("../");
                }}
            />
            <p className={styles.text}>
                Уже зарегестрированы?{" "}
                <span
                    className={styles.link}
                    onClick={() => {
                        login();
                    }}
                >
                    Войдите
                </span>
            </p>
        </div>
    );
};

export default Register;
