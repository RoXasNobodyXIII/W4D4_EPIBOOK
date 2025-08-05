import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function MyPagination({ howManyPages, active, setActive }) {
  let items = [];

  function handlePage(newPage) {
    window.location.search = `?page=${newPage}`;
    setActive(newPage);
  }

  for (let number = 1; number <= howManyPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default MyPagination;
