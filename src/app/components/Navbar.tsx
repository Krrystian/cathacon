import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen h-[80px] border-b-2 border-black bg-transparent backdrop-blur-xl justify-between p-4 items-center flex">
      <p className="text-4xl font-black select-none">FED.</p>
      <div className="h-full">
        <ul className="flex h-full">
          <NavButton href="/quiz">Przystąp do Quizu</NavButton>
          <NavButton href="#">Wyszukiwarka zajęć</NavButton>
          <NavButton href="/aboutUs">O nas</NavButton>
          <NavButton href="#" separator={false}>
            Zaloguj się
          </NavButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
