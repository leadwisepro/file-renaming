import React from 'react';
import { FileItem } from '../../types';
import { useFileStore } from '../../store/useFileStore';
import { DocumentTypeSelect } from '../form/DocumentTypeSelect';
import { ChargeTypeSelect } from '../form/ChargeTypeSelect';
import { DatePicker } from '../form/DatePicker';
import { Input } from '../form/Input';
import { FileNamePreview } from '../preview/FileNamePreview';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface FileRowProps {
  file: FileItem;
}

export function FileRow({ file }: FileRowProps) {
  const updateFile = useFileStore((state) => state.updateFile);
  const removeFile = useFileStore((state) => state.removeFile);

  const handleUpdate = (field: keyof FileItem, value: any) => {
    updateFile(file.id, { [field]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <span className="font-medium text-gray-900 text-sm">{file.file.name}</span>
        <button
          onClick={() => removeFile(file.id)}
          className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DocumentTypeSelect
            value={file.documentType}
            onChange={(value) => handleUpdate('documentType', value)}
          />
          
          <Input
            label="Client Name"
            value={file.clientName}
            onChange={(value) => handleUpdate('clientName', value)}
          />

          <Input
            label="Service Description"
            value={file.serviceDescription}
            onChange={(value) => handleUpdate('serviceDescription', value)}
          />

          <ChargeTypeSelect
            value={file.chargeType}
            onChange={(value) => handleUpdate('chargeType', value)}
          />

          <DatePicker
            value={file.date}
            onChange={(value) => handleUpdate('date', value)}
          />
        </div>

        <FileNamePreview file={file} />
      </div>
    </div>
  );
}