import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const dateValue = isValid(value) ? format(value, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = parseISO(e.target.value);
    if (isValid(date)) {
      onChange(date);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Date
      </label>
      <input
        type="date"
        value={dateValue}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}