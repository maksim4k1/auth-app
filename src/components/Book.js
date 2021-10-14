import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

function Book(){
  const {id} = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:1717/books/detail/${id}`).then(response => {
      setBook(response.data);
      setIsLoading(false)
    })
  }, [id]);
  
  return (
    <div className="container" style={{textAlign: "start"}}>
      {
        isLoading
        ? <h1>Loadin...</h1>
        : <>
          <h1>{book.name}</h1>
          <h4>Жанр:</h4>
          <ul>
            {
              book.genres ? book.genres.map((item, index) => <li key={index}>{item}</li>) : null
            }
          </ul>
          <h4>Год публикации:</h4>
          <p>{book.publishYear ? book.publishYear : null}</p>
          <h4>Количество страниц:</h4>
          <p>{book.pagesNumber ? book.pagesNumber : null}</p>
          <h4>Язык оригинала:</h4>
          <p>{book.originalLanguage ? book.originalLanguage : null}</p>
          <h4>Книжный дом:</h4>
          <p>{book.publishHouse ? book.publishHouse : null}</p>
        </>
      }
    </div>
  );
}

export default Book;