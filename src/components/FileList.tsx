import { FileItem } from '../types';
import { useFileStore } from '../store/useFileStore';
import { FileRow } from './FileRow';

export function FileList() {
  const files = useFileStore((state) => state.files);

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Files to Rename</h2>
      <div className="space-y-4">
        {files.map((file) => (
          <FileRow key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}