import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wishlist - Readify',
  description: 'Wishlist Page',
};

export default function MyBooks() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-24 bg-[#324549] flex flex-col items-center justify-between py-4 space-y-4">
          <button className="p-3 rounded-lg ">
            <img src="favicon.ico" width={40} alt="Icon" />
          </button>
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            <Link href="/">
              <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  home
                </span>
              </button>
            </Link>
            <Link href="/mybooks">
            <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                auto_stories
              </span>
            </button>
            </Link>
            <Link href="/history">
            <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                search_activity
              </span>
            </button>
            </Link>
            <button className="p-3 rounded-lg bg-[#1D282C] active:scale-90 transition-transform">
              <span className="material-symbols-outlined filled text-[32px]">
                favorite
              </span>
            </button>
            <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                notifications
              </span>
            </button>
          </div>
          <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[32px]">
              settings
            </span>
          </button>
        </div>
        <div className="flex-1 p-10 py-5">
          <div className="flex justify-between items-center mb-6 mt-3">
            <h2 className="text-3xl font-bold">My Books</h2>
            <div>
              <input
                className="bg-gray-700 text-white rounded-full px-4 py-2"
                placeholder="Search here"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="flex space-x-4">
              <button className="flex flex-col w-48 bg-[#324549] rounded-lg overflow-hidden shadow-lg max-w-xs">
                <img
                  alt="Book cover of 'From Zero to Millionaire' by Nicolas Bérubé"
                  className="w-[200px] h-[200px]"
                  src="https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg"
                />
                <div className="flex flex-col gap-1 p-3 pt-2 text-left">
                  <h2 className="text-white text-md font-semibold">
                    From Zero to Millionaire
                  </h2>
                  <p className="text-sm text-gray-400">Ferry Unardi</p>
                </div>
              </button>
              <button className="flex flex-col w-48 bg-[#324549] rounded-lg overflow-hidden shadow-lg max-w-xs">
                <img
                  alt="Book cover of 'From Zero to Millionaire' by Nicolas Bérubé"
                  className="w-[200px] h-[200px]"
                  src="https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg"
                />
                <div className="flex flex-col gap-1 p-3 pt-2 text-left">
                  <h2 className="text-white text-md font-semibold">
                  The Zurich Axioms
                  </h2>
                  <p className="text-sm text-gray-400">Max Gunther</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
