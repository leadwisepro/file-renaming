import React from 'react';
import { useFileStore } from '../../store/useFileStore';
import { TrashIcon } from '@heroicons/react/24/outline';

export function FileActions() {
  const clearFiles = useFileStore((state) => state.clearFiles);
  const fileCount = useFileStore((state) => state.files.length);

  if (fileCount === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex justify-end">
      <button
        onClick={clearFiles}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md"
      >
        <TrashIcon className="h-5 w-5 mr-2" />
        Clear all files
      </button>
    </div>
  );
}