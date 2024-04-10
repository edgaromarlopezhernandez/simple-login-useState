import "./Login-form.css";
import { useState } from "react";

export function LoginForm({ setSuperu }) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === "" || password === "") {
            setError(true)
            return
        }

        setError(false)

        setSuperu([user])

        console.log("The user is: " + user);
        console.log("The password is: " + password);
    }

    return (
        <section>
            <h1>Login</h1>
            <form className="login-form"
                onSubmit={handleSubmit}
            >
                <input type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>SignIn</button>
            </form>
            {error && <p>User and password can not be empty!!!!!!!!!!!!!</p>}
            {/* <p>User: {user} and Password: {password}</p> */}
        </section>
    )
}