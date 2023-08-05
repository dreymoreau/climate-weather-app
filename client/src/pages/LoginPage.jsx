import { useState } from "react";
import { useRouteError } from "react-router-dom";

// https://tailwind-elements.com/docs/standard/forms/login-form/
export default function LoginPage() {
  const error = useRouteError();
  console.error(error);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerEmail,
        password: registerPassword,
      },
      withCredentials: true,
      url: `${process.env.VITE_BACKEND_URI}/register`,
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: `${process.env.VITE_BACKEND_URI}/login`,
    }).then((res) => console.log(res));
  };

  return (
    // <!-- Left column container-->
    <div className="bg-dark">
      <div className="bg-dark px-4 md:px-0 lg:w-6/12">
        <div className="md:mx-6 md:p-12">
          {/* <!--Logo--> */}
          <div className="text-center">
            {/* <img
            className="mx-auto w-48"
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo" /> */}
            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              Welcome to Weather Wizard
            </h4>
          </div>

          <form>
            <p className="mb-4">Please login to your account</p>
            {/* <!--Username input--> */}
            <div className="relative mb-4" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
              <label
                for="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                Username
              </label>
            </div>

            {/* <!--Password input--> */}
            <div className="relative mb-4" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput11"
                placeholder="Password"
              />
              <label
                for="exampleFormControlInput11"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                Password
              </label>
            </div>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
              <button
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                Log in
              </button>

              {/* <!--Forgot password link--> */}
              <a href="#!">Forgot password?</a>
            </div>

            {/* <!--Register button--> */}
            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-dark h-[1500px]">
        <main>
          <div className="text-center p-6">
            <h1>Register / Login Page</h1>
          </div>

          <div className="flex justify-center mt-40">
            <section>
              <h2>Sign Up</h2>
              <form>
                <input
                  placeholder="email"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                  placeholder="password"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </form>
              <button onClick={register} type="submit">
                Register
              </button>
            </section>
          </div>

          <div className="flex justify-center">
            <section>
              <h2>Login</h2>
              <form>
                <input
                  placeholder="email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                  placeholder="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </form>
              <button onClick={login} type="submit">
                Login
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
