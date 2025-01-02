import React from 'react';
import { useFileStore } from '../../store/useFileStore';
import { FileRow } from './FileRow';

export function FileList() {
  const files = useFileStore((state) => state.files);

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Files to Rename</h2>
        <span className="text-sm text-gray-500">{files.length} file(s)</span>
      </div>
      <div className="space-y-4">
        {files.map((file) => (
          <FileRow key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}