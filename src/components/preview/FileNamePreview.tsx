import React from 'react';
import { FileItem } from '../../types';
import { generateFileName } from '../../utils/filename';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface FileNamePreviewProps {
  file: FileItem;
}

export function FileNamePreview({ file }: FileNamePreviewProps) {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
      <div className="flex items-center text-sm text-gray-500">
        <DocumentTextIcon className="h-5 w-5 mr-2" />
        New filename
      </div>
      <div className="mt-1 font-mono text-sm text-gray-900 break-all">
        {generateFileName(file)}
      </div>
    </div>
  );
}