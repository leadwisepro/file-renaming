import { create } from 'zustand';
import { FileItem } from '../types';
import { documentTypes } from '../data/documentTypes';
import { chargeTypes } from '../data/chargeTypes';

interface FileStore {
  files: FileItem[];
  addFiles: (newFiles: File[]) => void;
  updateFile: (id: string, updates: Partial<FileItem>) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  addFiles: (newFiles) => {
    set((state) => ({
      files: [
        ...state.files,
        ...newFiles.map((file) => ({
          id: crypto.randomUUID(),
          file,
          documentType: documentTypes[0].id,
          clientName: '',
          serviceDescription: '',
          chargeType: chargeTypes[0].id,
          date: new Date(),
        })),
      ],
    }));
  },
  updateFile: (id, updates) => {
    set((state) => ({
      files: state.files.map((file) =>
        file.id === id ? { ...file, ...updates } : file
      ),
    }));
  },
  removeFile: (id) => {
    set((state) => ({
      files: state.files.filter((file) => file.id !== id),
    }));
  },
  clearFiles: () => set({ files: [] }),
}));