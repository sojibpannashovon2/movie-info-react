import React from 'react';


const SingleMovie = ({ movie, handaleWatchTime }) => {
    const { movieName, watchTime, imdbRating, category, description, poster, id } = movie;

    const bookmark = (movieName, watchTime, imdbRating, id) => {
        const previousBookmark = JSON.parse(localStorage.getItem("bookmark"))
        let bookmarks = [];
        const product = { movieName, watchTime, imdbRating, id }
        if (previousBookmark) {
            const markedProduct = previousBookmark.find(pd => pd.id == id);
            // console.log(markedProduct);
            if (markedProduct) {
                alert("Wrong Marked !!!")
            }
            else {
                bookmarks.push(...previousBookmark, product)
                localStorage.setItem("bookmark", JSON.stringify(bookmarks))
            }
        }
        else {
            bookmarks.push(product)
            localStorage.setItem("bookmark", JSON.stringify(bookmarks))
        }

    }

    const movieHandle = (id) => {
        const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
        console.log(previousBookmark);
        const restOfBookmark = previousBookmark.filter(cd => cd.id != id);
        console.log(restOfBookmark);
        localStorage.setItem("bookmark", JSON.stringify(restOfBookmark))
    }
    return (
        <>
            <div className="card w-full h-full bg-base-100 shadow-4xl border-2 border-amber-200 p-2 ">
                <figure><img className='h-48 w-48 rounded-xl' src={poster} alt="Shoes" /></figure>
                <div className="card-body text-start p-2 ml-3 shadow-xl">
                    <h2 className="card-title text-amber-200">{movieName}
                        <span onClick={() => bookmark(movieName, watchTime, imdbRating, id)} className='hover:bg-red-500 ml-6 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </span>
                        <span onClick={() => movieHandle(id)} className='hover:bg-red-500 text-amber-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                            </svg>

                        </span>
                    </h2>
                    <p>{description}</p>
                    <p>IMD Rating: {imdbRating}</p>
                    <p>Catagory: {category}</p>
                    <strong>WatchTime: {watchTime} min</strong>

                    <button onClick={() => handaleWatchTime(watchTime)}
                        className='btn btn-success'>Add-WatchTime</button>



                </div>
            </div>

        </>
    );
};

export default SingleMovie;