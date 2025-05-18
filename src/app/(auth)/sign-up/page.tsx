"use client"

import Link from 'next/link';
import Image from "next/image";
import { Mail, KeyRound, User } from "lucide-react";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordConfirmation] = useState('');
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
      const response = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordconfirmation
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: false,
      });

      // Jika register berhasil, simpan token
      if (response.data.status && response.data.data.token) {
        localStorage.setItem('auth_token', response.data.access_token);

        console.log("Response data:", response.data);
        
        
        // Simpan data user jika ada
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        setSuccess('Login successful! Redirecting to login...');
        
        // Redirect ke halaman dashboard
        router.push('/sign-in');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log("🛑 Error response:", err.response);
      } else {
        console.log("🛑 Unknown error:", err);
      }
      if (axios.isAxiosError(err) && err.response?.data?.errors) {
        // errors format: { field1: ["msg1", "msg2"], field2: [...] }
        Object.entries(err.response.data.errors).forEach(([field, msgs]) => {
          if (Array.isArray(msgs)) {
            console.error(`${field}: ${msgs.join(", ")}`);
          } else {
            console.error(`${field}: ${String(msgs)}`);
          }
        });
        setError(Object.values(err.response.data.errors).flat().join(" "));
      } else if (axios.isAxiosError(err) && err.response?.data?.message) {
        setError(err.response.data.message);
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
              <Image src="/readifybrand.svg" alt="My Icon" width={200} height={100} />
            </div>
            <Link className="text-gray-400 p-2 px-3 rounded-md hover:text-white hover:bg-gray-600" href="/sign-in">
              Sign In
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">
              Create an account
            </h2>
            <p className="text-gray-400 mb-8">
                Create an account to explore many things.
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
                  Name
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <User />
                  <input className="w-full px-3 py-2 text-white focus:outline-none" id="name" placeholder="Your Name" type="text" value={name}
  onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Email
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                <Mail />
                  <input className="w-full px-3 py-2 text-white focus:outline-none" id="email" placeholder="name@example.com" type="email" value={email}
  onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">
                  Password
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <KeyRound />
                  <input className="w-full px-3 py-2 text-white focus:outline-none" id="password" placeholder="••••••••" type="password" value={password}
  onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <KeyRound />
                  <input className="w-full px-3 py-2 text-white focus:outline-none" id="passwordconfirmation" placeholder="••••••••" type="password" value={passwordconfirmation}
  onChange={e => setPasswordConfirmation(e.target.value)} />
                </div>
              </div>
              <Button 
                type="submit"
                size="full"
                disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Sign up'}
              </Button>
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