import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:1717/books").then(response => {
			setBooks(response.data);
		});
	}, []);

	return (
		<div>
			<h1>Home page!</h1>
			<ul style={{textAlign: "start"}} className="container">
				{
					books.map(book => {
						return <li key={book.id}><NavLink to={`/book/${book.id}`}>{book.name}</NavLink></li>
					})
				}
			</ul>
		</div>
	)
}

export default Home;