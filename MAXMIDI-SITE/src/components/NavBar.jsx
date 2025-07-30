import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-plum text-offwhite px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MaxMidi</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-lavender">Home</a></li>
        <li><a href="#" className="hover:text-lavender">Programs</a></li>
        <li><a href="#" className="hover:text-lavender">Docs</a></li>
        <li><a href="#" className="hover:text-lavender">Demos</a></li>
      </ul>
    </nav>
  );
}