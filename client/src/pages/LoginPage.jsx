import { useState } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const register = () => {
        axios({
            method: "post",
            data: {
                username: registerEmail,
                password: registerPassword
            },
            withCredentials: true,
            url : `${process.env.VITE_BACKEND_URI}/register`
        }).then((res) => console.log(res))
    }
    const login = () => {
        axios({
            method: "post",
            data: {
                username: loginEmail,
                password: loginPassword
            },
            withCredentials: true,
            url : `${process.env.VITE_BACKEND_URI}/login`
        }).then((res) => console.log(res))
    }

  return (
    <main>
        <section>
            <h2>Sign Up</h2>
            <form>
                <input placeholder="email" onChange={e => setRegisterEmail(e.target.value)}/>
                <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
            </form>
            <button onClick={register} type="submit">Register</button>
        </section>

        <section>
            <h2>Login</h2>
            <form>
                <input placeholder="email" onChange={e => setLoginEmail(e.target.value)}/>
                <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
            </form>
            <button onClick={login} type="submit">Login</button>
        </section>
    </main>
  )
}
