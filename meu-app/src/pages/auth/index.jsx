import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import "./style.css";

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPass, setShowPass] = useState(false);

    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState("");

    const navigate = useNavigate();

    async function registerUser(e) {
        e.preventDefault();

        setErros({});
        setSucesso("");

        try {
            const form = e.target;

            const data = {
                nome: form.name.value,
                email: form.email.value,
                senha: form.password.value
            };

            const result = await api.post("/auth", data);

            setSucesso(result?.data?.message || "Usuário criado com sucesso");

            form.reset();
            setTimeout(() => {
                setIsLogin(true);
            }, 1500);
        } catch (erro) {
            const mensagem = erro?.response?.data?.message;

            if (typeof mensagem === "string") {
                setErros({ geral: mensagem });
            } else {
                setErros(mensagem || {});
            }
        }
    }

    async function loginUser(e) {
        e.preventDefault();

        setErros({});
        setSucesso("");

        try {
            const form = e.target;

            const data = {
                email: form.email.value,
                senha: form.password.value
            };

            const result = await api.post("/auth/login", data);

            setSucesso("Login realizado com sucesso");

            localStorage.setItem("token", result.data.token);

            setTimeout(() => {
                navigate("/dashboard");
            }, 1500);

            form.reset();
        } catch (erro) {
            const mensagem = erro?.response?.data?.message;

            if (typeof mensagem === "string") {
                setErros({ geral: mensagem });
            } else {
                setErros(mensagem || {});
            }
        }
    }

    return (
        <main className="main_form">
            {!isLogin ? (
                <section className="form_register">
                    <h1 className="logo">MinhaTurma</h1>

                    <h2>Cadastrar-se</h2>

                    <form onSubmit={registerUser}>
                        <div className="input_group">
                            <input type="text" name="name" placeholder="Nome" />

                            <i className="bi bi-person"></i>
                        </div>

                        {erros.nome && <p className="erro">{erros.nome}</p>}

                        <div className="input_group">
                            <input type="email" name="email" placeholder="Email" />

                            <i className="bi bi-envelope-at"></i>
                        </div>

                        {erros.email && <p className="erro">{erros.email}</p>}

                        <div className="input_group">
                            <input type={showPass ? "text" : "password"} name="password" placeholder="Senha" />

                            <i onClick={() => setShowPass(!showPass)} className={showPass ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                        </div>

                        {erros.senha && <p className="erro">{erros.senha}</p>}

                        {erros.geral && <p className="erro">{erros.geral}</p>}

                        {sucesso && <p className="sucesso">{sucesso}</p>}

                        <button type="submit" className="btn_cadastrar">
                            Cadastrar
                        </button>
                    </form>

                    <p>
                        Já tenho uma conta?{" "}
                        <a
                            onClick={() => {
                                setIsLogin(true);
                                setErros({});
                                setSucesso("");
                            }}>
                            Fazer login
                        </a>
                    </p>
                </section>
            ) : (
                <section className="form_login">
                    <h1 className="logo">MinhaTurma</h1>
                    

                    <h2>Entrar</h2>

                    <form onSubmit={loginUser}>
                        <div className="input_group">
                            <input type="email" name="email" placeholder="Digite seu email" />

                            <i className="bi bi-envelope-at"></i>
                        </div>

                        {erros.email && <p className="erro">{erros.email}</p>}

                        <div className="input_group">
                            <input type={showPass ? "text" : "password"} name="password" placeholder="Digite sua senha" />

                            <i onClick={() => setShowPass(!showPass)} className={showPass ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                        </div>

                        {erros.senha && <p className="erro">{erros.senha}</p>}

                        {erros.geral && <p className="erro">{erros.geral}</p>}

                        {sucesso && <p className="sucesso">{sucesso}</p>}

                        <button type="submit" className="btn_cadastrar">
                            Entrar
                        </button>
                    </form>

                    <p>
                        Não tenho uma conta?{" "}
                        <a
                            onClick={() => {
                                setIsLogin(false);
                                setErros({});
                                setSucesso("");
                            }}>
                            Criar conta
                        </a>
                    </p>
                </section>
            )}
        </main>
    );
}

export default Auth;
