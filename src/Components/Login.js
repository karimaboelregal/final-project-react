import 'bootstrap/dist/css/bootstrap.css'
import './login.css'
import { Button } from "adminlte-2-react"
import { useState } from 'react'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var data = {};
            data.Email = email;
            data.Password = password
            let res = await fetch("https://localhost:7028/api/authentication/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json;"}
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                setPassword("");
                localStorage.setItem("token", resJson["token"])
                window.location.reload()
            } else {
                document.getElementById("errorText").classList.remove("hideLogin");
                setTimeout(()=> {
                    document.getElementById("errorText").classList.add("hideLogin")
                }, 2000)
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div class="d-flex justify-content-md-center align-items-center vh-100">
            <form onSubmit={handleSubmit}>
                <div class="loginbox justify-content-center text-center">
                    <span className="headerText">Login</span>
                    <span id="errorText" className='text-danger hideLogin'>Invalid email or password</span>
                    <div className='pb-3 pt-3'>
                        <input type="text" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email" aria-describedby="basic-addon2" />
                    </div>
                    <div className='pb-3'>
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} aria-label="Password" aria-describedby="basic-addon2" />
                    </div>
                    <button id="1" size="md" className='p-3 loginbutton btn btn-primary' type="submit">Login</button>

                </div>
            </form>
        </div>
    )
}

export default Login;