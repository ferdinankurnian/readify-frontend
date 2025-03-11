"use client";
import { type FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"; // Import Swiper core
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation";

// Define the Book interface
interface Book {
  title: string;
  author: string;
  imageUrl: string;
}

// Define the BookSliderProps interface
interface BookSliderProps {
  books: Book[];
}

// BookCard component with responsive width
const BookCard: FC<{ book: Book }> = ({ book }) => (
  <button className="flex flex-col w-full max-w-[200px] bg-[#324549] rounded-lg overflow-hidden shadow-lg hover:bg-[#3a4f54] transition-colors">
    <img
      alt={`Book cover of '${book.title}' by ${book.author}`}
      className="w-full aspect-square object-cover"
      src={book.imageUrl}
      loading="lazy"
    />
    <div className="flex flex-col gap-1 p-3 pt-2 text-left">
      <h2 className="text-white text-md font-semibold line-clamp-2">{book.title}</h2>
      <p className="text-sm text-gray-400 line-clamp-1">{book.author}</p>
    </div>
  </button>
);

// BookSlider component dengan fix tombol tidak bisa balik
const BookSlider: FC<BookSliderProps> = ({ books }) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(books.length > 1);

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        slidesPerView="auto"
        onSlideChange={(swiper) => {
          setShowPrev(!swiper.isBeginning);
          setShowNext(!swiper.isEnd);
        }}
        onInit={(swiper) => {
          setShowPrev(!swiper.isBeginning);
          setShowNext(!swiper.isEnd);
        }}
        onReachBeginning={() => setShowPrev(false)} // Pastikan tombol hilang saat di awal
        onReachEnd={() => setShowNext(false)} // Pastikan tombol hilang saat di akhir
        className="w-full "
      >
        {books.map((book, index) => (
          <SwiperSlide 
            key={`${book.title}-${index}`} 
            style={{ width: "200px" }}
            className={`${index < books.length - 1 ? 'mr-[10px]' : ''}`}
          >
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Previous Button - Full Height */}
      <button
        className={`swiper-button-prev-custom absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-800 to-transparent text-white flex items-center justify-center z-10 transition-opacity ${
          showPrev ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-3xl bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          arrow_back
        </span>
      </button>

      {/* Custom Next Button - Full Height */}
      <button
        className={`swiper-button-next-custom absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-800 to-transparent text-white flex items-center justify-center z-10 transition-opacity ${
          showNext ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-3xl bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          arrow_forward
        </span>
      </button>
    </div>
  );
};

export default BookSlider;
