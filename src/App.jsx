import React from "react";
import NotFound from "./components/NotFound";
import Procurement from "./services-component/Procurement";
import Maintenance from "./services-component/Maintenance";
import Consultancy from "./services-component/Consultancy";
import ServicesNav from "./services-component/ServicesNav";
import SignIn from "./Form-components/SignIn";
import LoginPage from "./Form-components/LoginPage";
import Services from "./components/Services";
import Layout from "./components/Layout";
import Form from "./components/Form";
import About from "./components/About";
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom";
import "./style.css"
import HomeSection from "./components/Homesection";


function App() {
    const [hamburgerState, setHamburgerState] = React.useState(false)

    function handleClick() {
        setHamburgerState(prevState => !prevState)
    }

    return (
        <BrowserRouter>
        <Routes>
        <Route element={<Layout onclick={handleClick} hamburgerState={hamburgerState}/>}>
            <Route path="/" element={<HomeSection hamburgerState={hamburgerState}/>}/>
            <Route path="/about" element={<About hamburgerState={hamburgerState}/>}/>
            <Route path="/services" element={<ServicesNav/>}>
                <Route index element={<Services hamburgerState={hamburgerState}/>}/>
                <Route path="/services/procurement" element={<Procurement/>}/>
                <Route path="/services/maintenance" element={<Maintenance/>}/>
                <Route path="/services/consultancy" element={<Consultancy/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}>
                <Route index element={<Form/>}/>
                <Route path="/login/signin" element={<SignIn/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Route>
        </Routes>
        </BrowserRouter> 
    )
}

export default App