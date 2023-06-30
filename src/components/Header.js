import React, { useEffect, useState } from "react";
import Search from "./Search";

function Header() {

  const [input, setInput] = useState('')

  const fetchData = () => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      setInput(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search />
    </header>
  );
}

export default Header;
