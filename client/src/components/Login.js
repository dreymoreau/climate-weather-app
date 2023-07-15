import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [registerEmail, setRegisterEmail] = useState()
    const [registerPassword, setRegisterPassword] = useState()
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const register = () => {
        axios({
            method: "post",
            data: {
                username: registerEmail,
                password: registerPassword
            },
            withCredentials: true,
            url : "http://localhost:3000/register"
        }).then((res) => console.log(res))
    }
    const login = () => {}
    const getUser = () => {}

   return (
    <div>
        <div>
            <h1>Sign Up</h1>
            <form>
                <input placeholder="email" onChange={e => setRegisterEmail(e.target.value)}/>
                <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
            </form>
            <button onClick={register} type="submit">Submit</button>
        </div>

        <div>
            <h1>Login</h1>
            <form>
                <input placeholder="email" onChange={e => setLoginEmail(e.target.value)}/>
                <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
            </form>
            <button onClick={login} type="submit"></button>
        </div>

        <div>
            <h1>Get User</h1>
            <button onClick={getUser} type="submit"></button>
        </div>
    </div>
  )
}

export default Login