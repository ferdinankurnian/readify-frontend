import { Search, Home, Heart, Bell } from "lucide-react";

const categories = [
  "Science Fiction", "Fantasy", "Thriller", "Horror", "History", "Adventure", "Romance", "Non-Fiction"
];

const books = [
  { title: "From Zero to Millionaire", author: "Ferry Ukirad" },
  { title: "The Zurich Axioms", author: "Max Gunther" },
  { title: "Market Wizards", author: "Jack D. Schwager" },
  { title: "The Fund", author: "Rob Copeland" },
  { title: "It Didn't Start With You", author: "Mark Wolynn" },
  { title: "The One Thing", author: "Gary Keller and Jay Papasan" }
];

export default function Library() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6">
        <Home className="text-gray-400 cursor-pointer" size={24} />
        <Heart className="text-gray-400 cursor-pointer" size={24} />
        <Bell className="text-gray-400 cursor-pointer" size={24} />
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Library</h1>
          <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-64">
            <Search size={16} className="text-gray-400" />
            <input type="text" placeholder="Search here" className="bg-transparent border-none outline-none text-white pl-2 w-full" />
          </div>
        </div>

        {/* Banner */}
        <div className="mt-6 h-32 bg-gray-700 flex items-center justify-center text-lg font-semibold rounded-lg">
          Library Banner
        </div>

        {/* Continue Reading */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-3">Continue Reading</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {books.map((book, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg w-40">
                <div className="h-24 bg-gray-600 mb-2"></div>
                <h3 className="text-sm font-semibold">{book.title}</h3>
                <p className="text-xs text-gray-400">{book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-3">Categories</h2>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-700 px-4 py-2 rounded-lg text-center font-semibold">
                {category}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
