import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './components/Search/Search';
import { ThemeProvider } from "./components/ThemeContext";
import StorageComponent from './components/StorageComponent/StorageComponent';
import Profiles from './components/Profiles/Profiles';
import VoiceAIComponent from './components/VoiceAIComponent/VoiceAiComponent';
import './Home.css';
import ParticlesComponent from './components/particles';
import ClientDataset from './components/ClientDataset/ClientDataset';
import ClientProfileView from './components/ClientProfileView/ClientProfileView';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from "./components/LandingPage/LandingPage"
import AdminDashboard from './components/AdminPage/AdminDashboard';

const App = () => {
    useEffect(() => {
        document.title = 'Legalee Ai';
    }, []);

    return (
        <div className="App">
            <ParticlesComponent id="particles" />
            <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}>
                <BrowserRouter>
                    <ThemeProvider>
                        <Routes>
                            
                            <Route path='/' element={<LandingPage />} />
                              <Route exact path='/login' element={<Login />} /> 
                            <Route  exact path='/admindashboard' element={<AdminDashboard />} />
                            <Route exact path="/voiceAi" element={<ProtectedRoute element={VoiceAIComponent} />} />
                            <Route exact path="/chat" element={<ProtectedRoute element={Home} />} />
                            <Route exact path='/dataset' element={<ProtectedRoute element={StorageComponent} />} />
                            <Route exact path="/clientDataset" element={<ProtectedRoute element={ClientDataset} />} />
                            <Route exact path="/clientprofile/:id" element={<ProtectedRoute element={ClientProfileView} />} />
                            <Route exact path="/search" element={<ProtectedRoute element={Search} />} />
                            <Route exact path="/profiles" element={<ProtectedRoute element={Profiles} />} />
                        </Routes>
                    </ThemeProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </div>
    );
};

export default App;
