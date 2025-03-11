'use client';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export default function UserSettings() {
  const router = useRouter();

  const handleClose = () => {
    // Kembali ke halaman sebelumnya
    router.back();
  };

  return (
    <div className="flex flex-col max-w-[100rem] mx-auto">
      <div className="flex w-full p-4 items-center gap-4">
        <button
          onClick={handleClose}
          className="p-2 hover:bg-[#324549] rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[32px]">close</span>
        </button>
        <h1 className="text-2xl font-semibold">
          User Settings
        </h1>
      </div>
      <div className="flex flex-col md:flex-row h-screen p-10 gap-10">
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="mt-8 flex flex-col items-center">
            <img alt="User profile picture" className="rounded-full w-48 h-48" height="100" src="https://yt3.ggpht.com/ArqBq92wF9uqOL8N5r6sV8FBqECZL4ABMEKsl3MK47ReWK0Pt71QOooV55YN3zrrRdZkoqRmww=s88-c-k-c0x00ffffff-no-rj" width="100" />
            <h2 className="mt-4 text-2xl font-semibold">
              Domisili Mana?
            </h2>
            <p className="text-gray-500">
              Joined since 2025
            </p>
          </div>
          <div className="mt-8 bg-[#223E44] p-4 rounded-lg w-full">
            <h3 className="text-lg font-semibold">
              Stats
            </h3>
            <div className="mt-4 flex justify-between">
              <span>
                My Books
              </span>
              <span className="bg-[#101D20] px-2 py-1 rounded-md">
                12
              </span>
            </div>
            <div className="mt-2 flex justify-between">
              <span>
                Wishlist
              </span>
              <span className="bg-[#101D20] px-2 py-1 rounded-md">
                3
              </span>
            </div>
          </div>
          <button className="mt-8 bg-red-600 text-white px-4 py-2 rounded-lg">
            Log out
          </button>
        </div>
        <div className="md:w-2/3">
          <div className="flex space-x-2 bg-[#324549] rounded-xl p-2 w-fit">
            <button className="bg-[#192D31] text-white px-4 py-2 rounded-lg">
              Account
            </button>
            <button className="hover:bg-[#20383C] text-white px-4 py-2 rounded-lg">
              Notifications
            </button>
          </div>
          <div className="mt-8">
            <label className="block text-sm font-medium">
              Name
            </label>
            <input className="mt-1 block w-full bg-[#101D20] outline-none text-white border border-gray-700 rounded-lg py-2 px-3" type="text" value="Domisili Mana?" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">
              Email
            </label>
            <input className="mt-1 block w-full bg-[#101D20] outline-none text-white border border-gray-700 rounded-lg py-2 px-3" type="email" value="jkt@jauh.akujatim" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">
              Phone Number
            </label>
            <input className="mt-1 block w-full bg-[#101D20] outline-none text-white border border-gray-700 rounded-lg py-2 px-3" type="text" value="+62 812 3445 5678" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">
              Address
            </label>
            <input className="mt-1 block w-full bg-[#101D20] outline-none text-white border border-gray-700 rounded-lg py-2 px-3" type="text" value="Jl. Surabaya, Jawa Timur" />
          </div>
          <div className="mt-4 flex space-x-4 justify-between">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              Change Password
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 