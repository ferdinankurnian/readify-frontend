import type { Metadata } from "next";
import Link from "next/link";
import WithSidebarLayout from "@/app/components/layouts/with-sidebar";
import BookCarousel from "@/app/components/book-carousel";

export const metadata: Metadata = {
    title: "Library - Readify",
    description: "Library Page",
};

export default function HomeLibrary() {
    const books = [
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg",
            title: "From Zero to Millionaire",
            author: "Ferry Unardi",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg",
            title: "From Zero to Millionaire",
            author: "Ferry Unardi",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg",
            title: "From Zero to Millionaire",
            author: "Ferry Unardi",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg",
            title: "From Zero to Millionaire",
            author: "Ferry Unardi",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/T-sDq3H1iX0rU9SZhBQyMC9PCu3Zr52Fagk5rLcjtNc.jpg",
            title: "From Zero to Millionaire",
            author: "Ferry Unardi",
        },
        {
            imageUrl:
                "https://storage.googleapis.com/a1aa/image/vUCuq67Q3x0voyb4_jgAVwpEjKVfQ8dyTzW3sbwd9aA.jpg",
            title: "The Zurich Axioms",
            author: "Max Gunther",
        },

        // ... tambahkan buku lainnya
    ];

    return (
        <WithSidebarLayout>
            {/* Jangan ubah max width 100rem disini, ini buat max width kalau misal di zoom out page nya, itu tuh biar ga melebar, dikasih 100rem ini biar dibatesin widthnya dan di center gitu loh */}
            <div className="w-full max-w-[100rem] flex flex-col gap-6 mx-auto p-10 py-5">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-8">
                        <a className="text-white text-lg" href="#">
                            Library
                        </a>
                        <Link
                            className="text-gray-400 text-lg hover:text-gray-300"
                            href="books"
                        >
                            Books
                        </Link>
                        <Link
                            className="text-gray-400 text-lg hover:text-gray-300"
                            href="categories"
                        >
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
                <div className="max-w-full">
                    <h1 className="text-3xl font-bold mb-4">Continue Reading</h1>
                    <div className="flex w-full justify-center">
                        <BookCarousel books={books} />
                    </div>
                </div>
            </div>
        </WithSidebarLayout>
    );
}
