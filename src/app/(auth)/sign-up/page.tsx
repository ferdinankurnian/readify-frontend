import type { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import { Mail, KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: 'Sign Up - Readify',
  description: 'Sign Up Readify',
};

export default function SignIn() {
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
            <form>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Username
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <span className="material-symbols-outlined opacity-[0.75]">
                    mail
                  </span>
                  <input className="w-full px-3 py-2 bg-gray-800 text-white focus:outline-none" id="email" placeholder="name@example.com" type="email" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Email
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <span className="material-symbols-outlined opacity-[0.75]">
                    mail
                  </span>
                  <input className="w-full px-3 py-2 bg-gray-800 text-white focus:outline-none" id="email" placeholder="name@example.com" type="email" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">
                  Password
                </label>
                <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden px-3">
                  <span className="material-symbols-outlined opacity-[0.75]">
                    lock
                  </span>
                  <input className="w-full px-3 py-2 bg-gray-800 text-white focus:outline-none" id="password" placeholder="••••••••" type="password" />
                </div>
              </div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 bg-gray-600 rounded-l-[50px]">
          <img alt="A stack of books with an open book on top in a library setting" className="w-full h-full object-cover rounded-l-[50px]" height="800" src="https://storage.googleapis.com/a1aa/image/a39XT4Ih73lIZV3lqGYOU7y0o20KgEqZNNe3_vos2SA.jpg" width="600" />
        </div>
      </div>
    </>
  );
}