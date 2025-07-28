import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "../pages/home"
import Cadastro from "../pages/cadastro"
import Login from "../pages/login"
import Erro from "../pages/erroNaPesquisa"

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Cadastro/>} path="/cadastro"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<Erro/>} path="*"/>
            </Routes>
        </Router>
    )
}