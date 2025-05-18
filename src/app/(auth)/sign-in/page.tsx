/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import Link from 'next/link';
import Image from "next/image";
import { Mail, KeyRound } from "lucide-react";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Tentukan URL endpoint API Laravel Anda
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: false,
      });

      // Jika login berhasil, simpan token
      if (response.data.status && response.data.data.token) {
        localStorage.setItem('auth_token', response.data.access_token);

        console.log("Response data:", response.data);
        
        
        // Simpan data user jika ada
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        setSuccess('Login successful! Redirecting to dashboard...');
        
        // Redirect ke halaman dashboard
        router.push('/');
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Login failed.');
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="w-full md:w-1/2 p-10">
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-center space-x-2">
              <Image src="/readifybrand.svg" alt="My Icon" width={100} height={100} />
            </div>
            <Link className="text-gray-400 p-2 px-3 rounded-md hover:text-white hover:bg-gray-600" href="/sign-up">
              Sign Up
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">
              Sign in
            </h2>
            <p className="text-gray-400 mb-8">
              Sign in to explore many things.
            </p>
            
            {(success || error) && (
              <div
              className={`mb-4 p-3 rounded-lg border text-white ${
                success ? 'bg-blue-600 bg-opacity-20 border-blue-500' : 'bg-red-500 bg-opacity-20 border-red-500'
              }`}
              >
              {success || error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Email
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <Mail />
                  <input 
                    className="w-full px-3 py-2 text-white focus:outline-none" 
                    id="email" 
                    placeholder="name@example.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">
                  Password
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <KeyRound />
                  <input 
                    className="w-full px-3 py-2 text-white focus:outline-none" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button 
                className={`w-full ${isLoading ? 'bg-gray-500' : 'bg-neutral-400 hover:bg-gray-600'} text-white py-2 rounded-lg flex justify-center`} 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 bg-gray-600 rounded-l-[50px]">
          <Image 
            alt="A stack of books with an open book on top in a library setting" 
            className="w-full h-full object-cover rounded-l-[50px]" 
            src="https://storage.googleapis.com/a1aa/image/a39XT4Ih73lIZV3lqGYOU7y0o20KgEqZNNe3_vos2SA.jpg" 
            width={600} 
            height={800} 
          />
        </div>
      </div>
    </>
  );
}