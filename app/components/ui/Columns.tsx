'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Document } from '../../../types';
import  StatusBadge  from './StatusBadge';
import  Checkbox  from './Checkbox';

export const columns: ColumnDef<Document>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 1,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <StatusBadge 
        status={row.original.status} 
        type={row.original.statusType}
      />
    ),
    size: 1,
  },
  {
    accessorKey: 'eDocumentSourceKey',
    header: 'eDocument Source Key',
    size: 1,
  },
  {
    accessorKey: 'sourceDescription',
    header: 'Source Description',
    size: 1,
  },
  {
    accessorKey: 'coCode',
    header: 'CoCode',
    size: 1,
  },
  {
    accessorKey: 'creationDate',
    header: 'Creation Date',
    size: 1 ,
  },
  {
    accessorKey: 'createdOn',
    header: 'Created on',
    size: 1,
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
    size: 1,
  },
  {
    accessorKey: 'postingDate',
    header: 'Posting Date',
    size: 1,
  },
  {
    accessorKey: 'inffFile',
    header: 'Inff_File',
    cell: ({ row }) => (
      row.original.inffFile ? (
        <svg className="w-4 h-4 text-gray-700" viewBox="0 0 16 16" fill="none">
          <path d="M9 1H3.5A1.5 1.5 0 002 2.5v11A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5V5L9 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 1v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : null
    ),
    size: 1,
  },
  {
    accessorKey: 'source',
    header: 'Source',
    size: 1,
  },
  {
    accessorKey: 'ctrlByEc',
    header: 'Ctrl By eC',
    size: 1,
  },
];


export default columns;