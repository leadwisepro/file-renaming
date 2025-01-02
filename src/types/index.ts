export interface FileItem {
  id: string;
  file: File;
  documentType: string;
  clientName: string;
  serviceDescription: string;
  chargeType: string;
  date: Date;
}

export interface DocumentType {
  id: string;
  name: string;
  prefix: string;
  nameEs?: string;
}

export interface ChargeType {
  id: string;
  name: string;
  code: string;
}