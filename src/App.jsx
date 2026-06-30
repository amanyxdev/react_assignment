import React, { useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen.jsx';
import LoginScreen from './pages/LoginScreen.jsx';
import RegisterScreen from './pages/RegisterScreen.jsx';
import ProfileScreen from './pages/ProfileScreen.jsx';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('welcome');

    const [userData, setUserData] = useState({
        name: 'Marry Doe',
        email: 'Marry@Gmail.com',
        phone: '',
        company: '',
        isAgency: false
    });
    return (
        <div className="flex min-h-screen w-screen items-center justify-center bg-[#f8f9fa] sm:p-4 font-sans select-none">

            {/* Target mobile window canvas: full screen on mobile, centered mockup container on desktop */}
            <div className="relative h-screen w-full sm:h-[812px] sm:w-[375px] overflow-y-auto sm:border sm:border-gray-200 bg-white sm:shadow-xl sm:rounded-2xl flex flex-col justify-between">

                {currentScreen === 'welcome' && (
                    <WelcomeScreen onNavigate={setCurrentScreen} />
                )}

                {currentScreen === 'login' && (
                    <LoginScreen onNavigate={setCurrentScreen} onLogin={() => setCurrentScreen('profile')} />
                )}

                {currentScreen === 'register' && (
                    <RegisterScreen
                        onNavigate={setCurrentScreen}
                        setUserData={setUserData}
                        onRegister={() => setCurrentScreen('profile')}
                    />
                )}

                {currentScreen === 'profile' && (
                    <ProfileScreen userData={userData} />
                )}

            </div>
        </div>
    );
}
