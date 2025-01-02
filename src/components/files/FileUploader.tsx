import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFileStore } from '../../store/useFileStore';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export function FileUploader() {
  const addFiles = useFileStore((state) => state.addFiles);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      addFiles(acceptedFiles);
    },
    [addFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`relative rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
        isDragActive
          ? 'border-blue-400 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <input {...getInputProps()} />
      <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-4 text-sm font-medium text-gray-900">
        {isDragActive ? 'Drop files here...' : 'Drag & drop files here'}
      </p>
      <p className="mt-1 text-xs text-gray-500">or click to browse</p>
    </div>
  );
}