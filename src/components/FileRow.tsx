import { FileItem } from '../types';
import { useFileStore } from '../store/useFileStore';
import { DocumentTypeSelect } from './DocumentTypeSelect';
import { ChargeTypeSelect } from './ChargeTypeSelect';
import { DatePicker } from './DatePicker';

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
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">{file.file.name}</span>
        <button
          onClick={() => removeFile(file.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <DocumentTypeSelect
          value={file.documentType}
          onChange={(value) => handleUpdate('documentType', value)}
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Client Name
          </label>
          <input
            type="text"
            value={file.clientName}
            onChange={(e) => handleUpdate('clientName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Description
          </label>
          <input
            type="text"
            value={file.serviceDescription}
            onChange={(e) => handleUpdate('serviceDescription', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <ChargeTypeSelect
          value={file.chargeType}
          onChange={(value) => handleUpdate('chargeType', value)}
        />

        <DatePicker
          value={file.date}
          onChange={(value) => handleUpdate('date', value)}
        />
      </div>

      <div className="mt-4 p-2 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          Preview: {generateFileName(file)}
        </p>
      </div>
    </div>
  );
}