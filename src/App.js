import { BrowserRouter, Route, Routes } from "react-router-dom";

import ResetStyle from "./components/styles/resetStyle";
import GlobalStyle from "./components/styles/globalStyle";

import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/Home";

const App = () => {
    return (
        <AuthProvider>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider >

    );
}

export default App;