import { useState } from 'react';
import FloatingInput from '../components/InputBox.jsx';

export default function RegisterScreen({ onNavigate, setUserData, onRegister }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: 'yes' // Default value matching layout choice
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save state globally up to App.jsx container
        setUserData({
            name: formData.name || 'Marry Doe',
            email: formData.email || 'Marry@Gmail.com',
            phone: formData.phone,
            company: formData.company,
            isAgency: formData.isAgency === 'yes'
        });

        onRegister(); // Route directly into Screen 4
    };

    return (
        <div className="flex h-full w-full flex-col justify-between px-5 pt-6 pb-9 bg-bg-main">

            <div className="w-full">
                {/* --- ADDED: Back Navigation Button --- */}
                <button
                    onClick={() => onNavigate('welcome')}
                    className="mb-4 flex items-center text-gray-600 hover:text-popx-purple transition-colors"
                    aria-label="Go back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <h1 className="text-[28px] font-bold text-[#1f1f2e] tracking-tight mb-6 leading-tight">
                    Create your<br />PopX account
                </h1>
                <form id="register-form" onSubmit={handleSubmit} className="w-full">
                    <FloatingInput
                        label="Full Name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        labelClass="text-popx-purple"
                        labelBgClass="bg-bg-main"
                    />
                    <FloatingInput
                        label="Phone number"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        labelClass="text-popx-purple"
                        labelBgClass="bg-bg-main"
                    />
                    <FloatingInput
                        label="Email address"
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        labelClass="text-popx-purple"
                        labelBgClass="bg-bg-main"
                    />
                    <FloatingInput
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        required
                        labelClass="text-popx-purple"
                        labelBgClass="bg-bg-main"
                    />
                    <FloatingInput
                        label="Company name"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        labelClass="text-popx-purple"
                        labelBgClass="bg-bg-main"
                    />

                    {/* Radio Options Block */}
                    <div className="mt-2 mb-6">
                        <span className="block text-sm text-gray-800 font-medium mb-2">
                            Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
                        </span>

                        <div className="flex items-center gap-6">
                            {/* Option Yes */}
                            <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value="yes"
                                    checked={formData.isAgency === 'yes'}
                                    onChange={(e) => handleChange('isAgency', e.target.value)}
                                    className="w-4 h-4 accent-popx-purple cursor-pointer"
                                />
                                Yes
                            </label>

                            {/* Option No */}
                            <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value="no"
                                    checked={formData.isAgency === 'no'}
                                    onChange={(e) => handleChange('isAgency', e.target.value)}
                                    className="w-4 h-4 accent-popx-purple cursor-pointer"
                                />
                                No
                            </label>
                        </div>
                    </div>
                </form>
            </div>

            {/* Persistent Sticky Form Control Button at Bottom */}
            <div className="w-full pt-4">
                <button
                    type="submit"
                    form="register-form"
                    className="w-full py-3.5 bg-popx-purple text-white font-semibold rounded-md text-sm transition-all duration-200 hover:bg-[#5b4cc4] active:scale-[0.99] cursor-pointer"
                >
                    Create Account
                </button>
            </div>

        </div>
    );
}
