export const documentTypes = [
  { id: 'summary', name: 'Executive Summary', prefix: 'summary', nameEs: 'Resumen Ejecutivo' },
  { id: 'op', name: 'Order Purchase', prefix: 'op', nameEs: 'Orden de Compra' },
  { id: 'invoice', name: 'Invoice', prefix: 'inv', nameEs: 'Factura' },
  { id: 'proposal', name: 'Proposal', prefix: 'prop', nameEs: 'Propuesta' },
  { id: 'contract', name: 'Contract', prefix: 'contract', nameEs: 'Contrato' }
] as const;

export type DocumentTypeId = typeof documentTypes[number]['id'];