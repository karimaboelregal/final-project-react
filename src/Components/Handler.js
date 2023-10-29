import { LoginCore } from "adminlte-2-react";
import Navbar from "./Sidebar";
import Login from "./Login";




function Handler() {
    var token = localStorage.getItem("token");
    if (token == "" || token == undefined || token == null) {
        return <Login />
    } else {
        return <Navbar />
    }
}

export default Handler;