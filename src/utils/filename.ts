import { format, isValid } from 'date-fns';
import { FileItem } from '../types';

export function generateFileName(file: FileItem): string {
  const date = isValid(file.date) ? format(file.date, 'yyyyMMdd') : format(new Date(), 'yyyyMMdd');
  
  const parts = [
    'leadwise',
    file.documentType,
    file.clientName,
    file.serviceDescription ? `serv_${slugify(file.serviceDescription)}` : '',
    file.chargeType,
    date,
  ].filter(Boolean);

  return parts.join('-') + getFileExtension(file.file.name);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function getFileExtension(filename: string): string {
  const ext = filename.split('.').pop();
  return ext ? `.${ext}` : '';
}