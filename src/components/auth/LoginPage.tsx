import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const testEmail = 'bob.alatoo.com';
    const testPassword = '333444';

    if (email === testEmail && password === testPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
