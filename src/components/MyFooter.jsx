import React from "react";

const MyFooter = () => (
  <footer className="bg-dark text-white text-center py-3 mt-5">
    <div>
      <small>
        &copy; {new Date().getFullYear()} EpiBooks. Tutti i diritti riservati.
      </small>
    </div>
  </footer>
);

export default MyFooter;