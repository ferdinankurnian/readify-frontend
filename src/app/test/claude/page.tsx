import React from 'react';

const LibraryInterface: React.FC = () => {
  // Sample book data
  const books = [
    {
      id: 1,
      title: 'From Zero to Millionaire',
      author: 'Terry Unwell',
      coverImg: '/book-cover-green.jpg', // Using placeholder paths
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    },
    {
      id: 2,
      title: 'The Zurich Axioms',
      author: 'Max Gunther',
      coverImg: '/book-cover-pink.jpg',
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    },
    {
      id: 3,
      title: 'Market Wizards',
      author: 'Jack D. Schwager',
      coverImg: '/book-cover-white.jpg',
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    },
    {
      id: 4,
      title: 'The Fund',
      author: 'Rob Crawford',
      coverImg: '/book-cover-red.jpg',
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    },
    {
      id: 5,
      title: 'It Didn\'t Start With You',
      author: 'Mark Wolynn',
      coverImg: '/book-cover-beige.jpg',
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    },
    {
      id: 6,
      title: 'The One Thing',
      author: 'Gary Keller and Jay Papasan',
      coverImg: '/book-cover-white-line.jpg',
      categories: ['Adventure', 'Manga', 'Romance', 'Sci-fi']
    }
  ];

  const categories = [
    { id: 1, name: 'Science Fiction', bgColor: 'bg-blue-500' },
    { id: 2, name: 'Fantasy', bgColor: 'bg-purple-600' },
    { id: 3, name: 'Thriller', bgColor: 'bg-red-800' },
    { id: 4, name: 'Horror', bgColor: 'bg-red-800' },
    { id: 5, name: 'History', bgColor: 'bg-amber-700' },
    { id: 6, name: 'Adventure', bgColor: 'bg-green-500' },
    { id: 7, name: 'Romance', bgColor: 'bg-pink-500' },
    { id: 8, name: 'Non-Fiction', bgColor: 'bg-blue-400' }
  ];

  const sections = [
    { id: 1, title: 'Continue Reading', books: books.slice(0, 4) },
    { id: 2, title: 'Most Read Books', books: books },
    { id: 3, title: 'Adventure', books: books },
    { id: 4, title: 'Manga', books: books },
    { id: 5, title: 'Romance', books: books },
    { id: 6, title: 'Sci-fi', books: books }
  ];

  // Book Card Component
  const BookCard = ({ book }: { book: typeof books[0] }) => (
    <div className="flex flex-col w-32 transition-transform hover:scale-105">
      <div className="h-40 overflow-hidden rounded shadow-md">
        <img 
          src={book.coverImg} 
          alt={book.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-xs font-medium text-white truncate">{book.title}</h4>
        <p className="text-xs text-gray-400">{book.author}</p>
      </div>
    </div>
  );

  // Section with Book Rows
  const BookSection = ({ section }: { section: typeof sections[0] }) => (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {section.books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-4">
        <div className="mb-8">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="flex flex-col items-center space-y-6 flex-grow">
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="mt-auto mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            C
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-8">
            <h1 className="text-white text-xl font-bold">Library</h1>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Books</a>
              <a href="#" className="text-gray-400 hover:text-white">Categories</a>
            </nav>
          </div>
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-700 text-white text-sm rounded-full w-full pl-10 p-2 outline-none"
              placeholder="Search here"
            />
          </div>
        </div>
        
        {/* Hero Banner */}
        <div className="relative h-32 md:h-48 w-full overflow-hidden">
          <img 
            src="/library-banner.jpg" 
            alt="Library Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">check-out</h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-6 py-4">
          {/* Continue Reading Section */}
          <BookSection section={sections[0]} />
          
          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className={`${category.bgColor} rounded-lg p-6 flex items-center justify-center text-white font-medium cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Book Sections */}
          {sections.slice(1).map((section) => (
            <BookSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryInterface;