import React, { useState } from 'react';
import FloatingInput from '../components/InputBox.jsx';

export default function LoginScreen({ onNavigate, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onLogin();
        }
    };

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <div className="flex h-full w-full flex-col px-5 pt-6 pb-9 bg-bg-main">

            {/* --- ADDED: Back Navigation Button --- */}
            <button
                onClick={() => onNavigate('welcome')}
                className="mb-4 self-start flex items-center text-gray-600 hover:text-popx-purple transition-colors"
                aria-label="Go back"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>

            {/* Header Block */}
            <div className="mb-7">
                <h1 className="text-[28px] font-bold text-[#1f1f2e] tracking-tight mb-2 leading-tight">
                    Signin to your<br />PopX account
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
            </div>

            {/* Input Form Fields */}
            <form onSubmit={handleSubmit} className="pt-2 flex flex-col gap-2">
                <FloatingInput
                    label="Email Address"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelClass="text-popx-purple"
                    labelBgClass="bg-bg-main"
                />
                <FloatingInput
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelClass="text-popx-purple"
                    labelBgClass="bg-bg-main"
                />

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-3.5 text-center font-semibold rounded-md text-sm transition-all duration-200 mt-2 ${isFormValid
                        ? "bg-popx-purple text-white hover:bg-[#5b4cc4] active:scale-[0.99] cursor-pointer"
                        : "bg-[#cbcbcb] text-white cursor-not-allowed"
                        }`}
                >
                    Login
                </button>
            </form>

        </div>
    );
}
