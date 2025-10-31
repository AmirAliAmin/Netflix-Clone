import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { RxCross1 } from "react-icons/rx";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const [preview, setPreview] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardRef = useRef();

  const navigate = useNavigate()
  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI0YmZhMTE3OThkOTljZDFkYWE5MWMyN2Q0MzFkMSIsIm5iZiI6MTc0NjA3MjAxMi45ODQsInN1YiI6IjY4MTJmMWNjYmM4MmNhNjBiYWEwZWNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaL9rFThQlCW7BSHi5GNUDJFl3LoPezKK4sYNWg7NCc",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += e.deltaY;
    }
  };

  const handlePreview = (card) => {
    setSelectedCard(card);
    setPreview(true);
  };

  const closePreview = () => {
    setPreview(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));
  }, [category]);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="mt-12">
      <h1 className="mb-2 text-lg font-bold">{title}</h1>
      <div className="flex overflow-x-scroll gap-2.5 card-list" ref={cardRef}>
        {category === "popular"
          ? apiData.slice(1, 11).map((card, index) => {
              return (
                <div
                  className="relative bg-transparent flex items-center min-w-[250px] h-[180px]"
                  key={card.id}
                >
                  <h1
                    className="text-[140px] absolute left-7 -top-2 font-extrabold z-0 text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                  >
                    {index + 1}
                  </h1>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                    alt={card.title}
                    className="w-[60%] h-[169px] object-cover rounded cursor-pointer ml-auto z-10 hover:transition-all hover:scale-110"
                    onClick={() => handlePreview(card)}
                  />
                </div>
              );
            })
          : apiData.map((card, index) => {
              return (
                <div className="relative bg-transparent min-w-[250px]" key={card.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                    alt={card.title}
                    className="w-[90%] h-[169px] object-fit rounded cursor-pointer hover:transition-all hover:scale-110"
                    onClick={() => handlePreview(card)}
                  />
                </div>
              );
            })}
      </div>

      {/* Preview Modal - Moved outside the map */}
      {preview && selectedCard && (
        <div className="fixed inset-0 bg-[#280101cb] flex items-center justify-center z-500 p-4">
          <div className="bg-[#040404ea] h-fit sm:w-[50%] w-full max-w-2xl rounded-lg text-white max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between sm:px-6 px-3 py-3">
              <p className="text-xl font-semibold ">Preview</p>
              <RxCross1
                className="cursor-pointer text-2xl hover:text-gray-700 transition-colors"
                onClick={closePreview}
              />
            </div>

            <div className=" relative flex flex-col gap-4 sm:p-6 p-3 ">
              <img
                src={`https://image.tmdb.org/t/p/w780/${selectedCard.backdrop_path}`}
                alt={selectedCard.title}
                className="w-full h-48 object-fit rounded-lg"
              />
              <p className="absolute top-40 right-auto hover:text-[#E50914] cursor-pointer font-extrabold text-5xl" onClick={()=>navigate(`player/${selectedCard.id}`)}><FaRegCirclePlay /></p>
              <h1 className="text-2xl font-bold text-[#E50914]">{selectedCard.title}</h1>
              <p className=" leading-relaxed">{selectedCard.overview.slice(0,160)} <span>...</span></p>
              <div className="flex flex-wrap gap-6 text-sm ">
                <p className="text-white"><span className="font-semibold text-[#E50914]">Popularity:</span> {Math.round(selectedCard.popularity)}</p>
                <p className="text-white"><span className="font-semibold text-[#E50914]">Release Date:</span> {selectedCard.release_date}</p>
                <p className="text-white"><span className="font-semibold text-[#E50914]">Rating:</span> {selectedCard.vote_average}/10</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}