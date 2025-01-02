export const chargeTypes = [
  { id: 'hoc', name: 'Ad-Hoc', code: 'hoc' },
  { id: 'mm', name: 'Monthly Maintenance', code: 'mm' },
  { id: 'year', name: 'Yearly Contract', code: 'year' },
  { id: 'week', name: 'Weekly Service', code: 'week' },
] as const;

export type ChargeTypeId = typeof chargeTypes[number]['id'];