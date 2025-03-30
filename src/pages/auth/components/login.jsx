/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import TextField from "../../../components/text/textfield";
import Button from "../../../components/buttons/button";
import { useNavigate } from "react-router";
import useAuthStore from "../../../zustand/authStore";
import { useEffect, useState } from "react";
import styles from "../auth.module.css";

const Login = ({ api, setCookie, register }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        api.add_endpoint("users");
        api.add_endpoint("login");
    }, []);

    return (
        <div className={styles.login}>
            <h2>Добро пожаловать!</h2>
            <TextField
                about="Email или номер телефона"
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                placeholder="Email"
            />
            <TextField
                about="Пароль"
                type={"password"}
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                placeholder="Your password"
            />
            <Button
                text="Вход"
                onClick={async () => {
                    api.add_get("username", email);
                    api.add_get("password", password);
                    let resp = await api.get();
                    if (resp["status"] === 1) {
                        setCookie("token", resp["token"]);
                        navigate("../");
                    }
                    console.log(resp);
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "left",
                    width: "100%",
                }}
            >
                <p className={styles.text}>
                    Нужна учетная запись?{" "}
                    <span
                        className={styles.link}
                        onClick={() => {
                            register();
                        }}
                    >
                        {" "}
                        Зарегестрироваться{" "}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
