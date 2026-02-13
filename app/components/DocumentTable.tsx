'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  SortingState,
  ColumnFiltersState,
  RowSelectionState,
} from '@tanstack/react-table';
import { Document } from '../../types';
import columns from './Columns';

interface DocumentTableProps {
  data: Document[];
  onSelectionChange?: (selectedData: Document[]) => void;
}

export const DocumentTable = function ({ data, onSelectionChange }: DocumentTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  // Notify parent of selection changes
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = table.getSelectedRowModel().rows;
      const selectedData = selectedRows.map(row => row.original);
      onSelectionChange(selectedData);
    }
  }, [rowSelection, onSelectionChange, table]);

  // Calculate status counts
  const statusCounts = useMemo(() => {
    const selected = table.getSelectedRowModel().rows;
    const dataToCount =
      selected.length > 0 ? selected.map((row) => row.original) : data;

    return {
      accepted: dataToCount.filter((d) => d.statusType === 'accepted').length,
      rejected: dataToCount.filter((d) => d.statusType === 'rejected').length,
      pending: dataToCount.filter(
        (d) => d.statusType === 'created' || d.statusType === 'processing'
      ).length,
    };
  }, [data, table.getSelectedRowModel().rows]);

  return (
    <div className="flex flex-col h-full">
      {/* Table Container - fixed height with scroll */}
      <div className="flex-1 border border-gray-200 rounded-lg overflow-auto">
        <table className="w-full bg-white text-xs">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-2 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap"
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none flex items-center gap-1'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-50 transition-colors ${
                  row.getIsSelected() ? 'bg-blue-50' : ''
                }`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-2 py-2 text-xs text-gray-900 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with stats - fixed at bottom */}
      <div className="mt-3 flex items-center gap-6 text-xs shrink-0">
        <div className="text-gray-600">
          Pitch Overview: {table.getSelectedRowModel().rows.length} of{' '}
          {data.length} selected
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Accepted: {statusCounts.accepted}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Rejected: {statusCounts.rejected}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Pending: {statusCounts.pending}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
