import React from 'react';

export default function ProgramCard({ title, description }) {
  return (
    <div className="bg-offwhite text-charcoal rounded shadow-md p-6 max-w-md mx-auto my-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}