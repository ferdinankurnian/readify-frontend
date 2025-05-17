import type { Metadata } from "next";
import Link from "next/link";
import WithSidebarLayout from "@/components/layouts/with-sidebar";
import BookCarousel from "@/components/book-carousel";

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
      <div className="w-full max-w-[100rem] flex flex-col mx-auto p-10 py-5">
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
        <div className="bg-gray-700 rounded-lg h-64 mb-10"></div>
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-3xl font-bold">Continue Reading</h1>
          <div className="flex w-full justify-center">
            <BookCarousel books={books} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 mb-10">
          <h1 className="text-3xl font-bold">Categories</h1>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Fiksi
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-red-500 rounded-lg hover:bg-red-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Romansa
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Pendidikan
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Sejarah
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Anak-anak
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Sains
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Bisnis
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-20 py-10 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
              <h1 className="text-white text-xl font-bold text-center">
                Biografi
              </h1>
            </div>
          </div>
        </div>
      </div>
    </WithSidebarLayout>
  );
}
