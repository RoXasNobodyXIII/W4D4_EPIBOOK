import React from "react";
import fantasyBooks from "../../books/fantasy.json";
import historyBooks from "../../books/history.json";
import horrorBooks from "../../books/horror.json";
import romanceBooks from "../../books/romance.json";
import scifiBooks from "../../books/scifi.json";
import SingleBook from "./SingleBook";
import { useSearchValue } from "@context/searchContext";

const allBooks = [
  ...fantasyBooks,
  ...historyBooks,
  ...horrorBooks,
  ...romanceBooks,
  ...scifiBooks,
];

const AllTheBooks = () => {
  const { currentSearchValue } = useSearchValue();

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(currentSearchValue.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="mb-4">
        {}
      </div>
      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-6 col-md-3 mb-4" key={book.asin}>
            <SingleBook book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;
