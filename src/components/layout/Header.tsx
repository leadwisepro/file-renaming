import React from 'react';

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">File Renamer</h1>
          <p className="mt-1 text-sm text-gray-500">Rename your files with a consistent format</p>
        </div>
      </div>
    </header>
  );
}