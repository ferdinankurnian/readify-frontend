"use client";
import Image from "next/image";
import { House, Books, Gear } from "@phosphor-icons/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-24 bg-[#324549] flex flex-col items-center justify-between py-4 space-y-4">
          <button className="p-3 rounded-lg "><img src="favicon.ico" width={40} alt="Icon" /></button>
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            <button className="p-3 rounded-lg bg-[#1D282C]"><House size={ 32 } weight="fill" /></button>
            <button className="p-3 rounded-lg hover:bg-[#1D282C]"><Books size={ 32 } /></button>
          </div>
          <button className="p-3 rounded-lg hover:bg-[#1D282C]"><Gear size={ 32 } /></button>
        </div>
        <div className="flex-1 p-10 py-5">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-8">
              <a className="text-white text-lg" href="#">
                Library
              </a>
              <a className="text-gray-400 text-lg hover:text-gray-300" href="#">
                Books
              </a>
              <a className="text-gray-400 text-lg hover:text-gray-300" href="#">
                Categories
              </a>
            </div>
            <div>
              <input className="bg-gray-700 text-white rounded-full px-4 py-2" placeholder="Search here" type="text" />
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg h-48 mb-6">
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Continue Reading
            </h2>
            <div className="flex space-x-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <img alt="Book cover of 'From zero to Millionaire'" className="rounded-lg mb-2" height="150" src="https://storage.googleapis.com/a1aa/image/TBX2gPskPn5WNgkkSVYTunhUpKPqVMvvZqQ-wbNAvPY.jpg" width="100" />
                <p className="text-white">
                  From zero to Millionaire
                </p>
                <p className="text-gray-400">
                  Ferry Unardi
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <img alt="Book cover of 'The Zurich Axioms'" className="rounded-lg mb-2" height="150" src="https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg" width="100" />
                <p className="text-white">
                  The Zurich Axioms
                </p>
                <p className="text-gray-400">
                  Max Gunther
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <img alt="Book cover of 'Market Wizards'" className="rounded-lg mb-2" height="150" src="https://storage.googleapis.com/a1aa/image/peS5orE3ouacTR1nEZBvzaqL7kQYs2WZJ8oN6FcR7Kg.jpg" width="100" />
                <p className="text-white">
                  Market Wizards
                </p>
                <p className="text-gray-400">
                  Jack D. Schwager
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <img alt="Book cover of 'The Fund'" className="rounded-lg mb-2" height="150" src="https://storage.googleapis.com/a1aa/image/675rzFFKHVTvRKlgOfIW_YWnVPpW8mb3ta9meB2sdhI.jpg" width="100" />
                <p className="text-white">
                  The Fund
                </p>
                <p className="text-gray-400">
                  Rob Copeland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
