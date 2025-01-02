import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFileStore } from '../store/useFileStore';

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
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the files here...</p>
      ) : (
        <p>Drag & drop files here, or click to select files</p>
      )}
    </div>
  );
}