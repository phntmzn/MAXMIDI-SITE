import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-plum text-lavender text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} MaxMidi Programs. All rights reserved.</p>
    </footer>
  );
}