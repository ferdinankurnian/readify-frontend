import type { Metadata } from 'next';
import Link from 'next/link';
import WithSidebarLayout from '@/app/components/layouts/with-sidebar';

export const metadata: Metadata = {
    title: 'Books - Readify',
    description: 'Books Page',
};

export default function HomeBooks() {
    return (
        <WithSidebarLayout>
            <div className="p-10 py-5">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-8">
                        <Link className="text-gray-400 text-lg hover:text-gray-300" href="library">
                            Library
                        </Link>
                        <a className="text-white text-lg" href="#">
                            Books
                        </a>
                        <Link className="text-gray-400 text-lg hover:text-gray-300" href="categories">
                            Categories
                        </Link>
                    </div>
                    <div className="flex items-center bg-gray-700 rounded-full px-3 py-2 gap-2 w-64 hover:w-96 focus-within:w-96 [&:has(input:not(:placeholder-shown))]:w-96 transition-all duration-300">
                        <span className="material-symbols-outlined text-gray-400">
                            search
                        </span>
                        <input
                            className="bg-gray-700 text-white outline-none w-full"
                            placeholder="Search books.."
                            type="text"
                        />
                    </div>
                </div>
                <div className="bg-gray-700 rounded-lg h-48 mb-6"></div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Continue Reading</h2>
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
        </WithSidebarLayout>
    );
}
