import {Document, AuditLogEntry } from '../types';
import {
  HiDocumentText,
  HiClock,
  HiCheckCircle,
  HiExclamationCircle,
} from 'react-icons/hi';

export const sampleData: Document[] = [
  {
    id: '1',
    status: 'Accepted by FIRS Access Point',
    statusType: 'accepted',
    eDocumentSourceKey: 'Billing Document',
    sourceDescription: 'Billing Document',
    coCode: 'NG01',
    creationDate: '28/11/2025',
    createdOn: '10:30:00',
    createdBy: 'HANTHONY',
    postingDate: '28/11/2025',
    inffFile: true,
    source: 'INV-001',
    ctrlByEc: '00',
  },
  {
    id: '2',
    status: 'Processing at FIRS',
    statusType: 'processing',
    eDocumentSourceKey: 'Accounting Document',
    sourceDescription: 'Accounting Document NG01',
    coCode: 'NG01',
    creationDate: '28/11/2025',
    createdOn: '14:00:00',
    createdBy: 'HANTHONY',
    postingDate: '28/11/2025',
    inffFile: false,
    source: 'INV-002',
    ctrlByEc: '00',
  },
  {
    id: '3',
    status: 'Rejected by FIRS Access Point',
    statusType: 'rejected',
    eDocumentSourceKey: 'Accounting Document',
    sourceDescription: 'Accounting Document NG01',
    coCode: 'NG01',
    creationDate: '28/11/2025',
    createdOn: '15:30:00',
    createdBy: 'HANTHONY',
    postingDate: '28/11/2025',
    inffFile: false,
    source: 'INV-003',
    ctrlByEc: 'NC',
  },
  {
    id: '4',
    status: 'Created',
    statusType: 'created',
    eDocumentSourceKey: 'Accounting Document',
    sourceDescription: 'Accounting Document NG01',
    coCode: 'NG01',
    creationDate: '28/11/2025',
    createdOn: '16:45:00',
    createdBy: 'HANTHONY',
    postingDate: '28/11/2025',
    inffFile: false,
    source: 'INV-004',
    ctrlByEc: '00',
  },
  {
    id: '5',
    status: 'Created',
    statusType: 'created',
    eDocumentSourceKey: 'Accounting Document',
    sourceDescription: 'Accounting Document NG01',
    coCode: 'NG01',
    creationDate: '28/11/2025',
    createdOn: '17:15:00',
    createdBy: 'HANTHONY',
    postingDate: '28/11/2025',
    inffFile: false,
    source: 'INV-005',
    ctrlByEc: '00',
  },
  {
    id: '6',
    status: 'Accepted by FIRS Access Point',
    statusType: 'accepted',
    eDocumentSourceKey: 'Billing Document',
    sourceDescription: 'Billing Document',
    coCode: 'NG01',
    creationDate: '27/11/2025',
    createdOn: '13:00:00',
    createdBy: 'HANTHONY',
    postingDate: '27/11/2025',
    inffFile: true,
    source: 'INV-006',
    ctrlByEc: '00',
  },
  {
    id: '7',
    status: 'Accepted by FIRS Access Point',
    statusType: 'accepted',
    eDocumentSourceKey: 'Billing Document',
    sourceDescription: 'Billing Document',
    coCode: 'NG01',
    creationDate: '27/11/2025',
    createdOn: '14:20:00',
    createdBy: 'HANTHONY',
    postingDate: '27/11/2025',
    inffFile: true,
    source: 'INV-007',
    ctrlByEc: '00',
  },
  {
    id: '8',
    status: 'Rejected by FIRS Access Point',
    statusType: 'rejected',
    eDocumentSourceKey: 'Accounting Document',
    sourceDescription: 'Accounting Document NG01',
    coCode: 'NG01',
    creationDate: '27/11/2025',
    createdOn: '15:50:00',
    createdBy: 'HANTHONY',
    postingDate: '27/11/2025',
    inffFile: false,
    source: 'INV-008',
    ctrlByEc: 'NC',
  },
];


 export const metrics = [
    {
      title: 'Total Invoices',
      value: '8',
      subtitle: 'All time invoices',
      icon: HiDocumentText,
      color: 'text-slate-600',
    },
    {
      title: 'Pending Review',
      value: '2',
      subtitle: 'Awaiting submission',
      icon: HiClock,
      color: 'text-amber-500',
    },
    {
      title: 'Approved',
      value: '3',
      subtitle: 'FIRS approved invoices',
      icon: HiCheckCircle,
      color: 'text-emerald-500',
    },
    {
      title: 'Errors Flagged',
      value: '2',
      subtitle: 'Require correction',
      icon: HiExclamationCircle,
      color: 'text-red-500',
    },
  ];


    // Pie chart data
  export const pieData = [
    { name: 'Approved', value: 38, fill: '#10b981' },
    { name: 'Errors', value: 25, fill: '#ef4444' },
    { name: 'Pending', value: 25, fill: '#f59e0b' },
    { name: 'Submitted', value: 13, fill: '#3b82f6' },
  ];

  // Bar chart data
  export const barData = [
    { month: 'Jul', approved: 45, total: 50 },
    { month: 'Aug', approved: 50, total: 55 },
    { month: 'Sep', approved: 60, total: 65 },
    { month: 'Oct', approved: 55, total: 62 },
    { month: 'Nov', approved: 65, total: 72 },
  ];




export const sampleAuditData: AuditLogEntry[] = [
  {
    id: '1',
    invoiceNumber: 'INV-001',
    status: 'Created',
    description: 'Invoice created from SAP sales order SO-12345',
    user: 'john.doe@example.com',
    timestamp: '28 Nov 2025, 10:30:00',
    xmlAvailable: false,
  },
  {
    id: '2',
    invoiceNumber: 'INV-001',
    status: 'Generated',
    description: 'FIRS-compliant XML generated successfully',
    user: 'system',
    timestamp: '28 Nov 2025, 10:31:00',
    xmlAvailable: true,
    requestXML: `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:firs:ng:einvoice:schema:v1">
  <IRN>NG-ABC123-INV001-20251128143000</IRN>
  <InvoiceNumber>INV-001</InvoiceNumber>
</Invoice>`,
  },
  {
    id: '3',
    invoiceNumber: 'INV-001',
    status: 'Submitted',
    description: 'Invoice submitted via access point API',
    user: 'john.doe@example.com',
    timestamp: '28 Nov 2025, 11:00:00',
    xmlAvailable: true,
    requestXML: `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:firs:ng:einvoice:schema:v1">
  <IRN>NG-ABC123-INV001-20251128143000</IRN>
</Invoice>`,
    responseXML: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Status>Approved</Status>
  <ApprovalCode>FIRS-APP-2025-001234</ApprovalCode>
</Response>`,
  },
  {
    id: '4',
    invoiceNumber: 'INV-003',
    status: 'Failed',
    description: 'Schema validation failed: VAT calculation mismatch',
    user: 'jane.smith@example.com',
    timestamp: '28 Nov 2025, 16:00:00',
    xmlAvailable: true,
    requestXML: `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:firs:ng:einvoice:schema:v1">
  <IRN>NG-ABC123-INV003-20251128160000</IRN>
</Invoice>`,
    responseXML: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Status>Error</Status>
  <ErrorCode>VAT_MISMATCH</ErrorCode>
  <Message>VAT calculation mismatch</Message>
</Response>`,
  },
  {
    id: '5',
    invoiceNumber: 'INV-002',
    status: 'Submitted',
    description: 'Invoice submitted via background job',
    user: 'john.doe@example.com',
    timestamp: '28 Nov 2025, 14:30:00',
    xmlAvailable: false,
  },
  {
    id: '6',
    invoiceNumber: 'INV-004',
    status: 'Created',
    description: 'Invoice created from SAP sales order SO-12346',
    user: 'john.doe@example.com',
    timestamp: '27 Nov 2025, 09:15:00',
    xmlAvailable: false,
  },
  {
    id: '7',
    invoiceNumber: 'INV-004',
    status: 'Generated',
    description: 'FIRS-compliant XML generated successfully',
    user: 'system',
    timestamp: '27 Nov 2025, 09:16:00',
    xmlAvailable: true,
    requestXML: `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:firs:ng:einvoice:schema:v1">
  <IRN>NG-ABC123-INV004-20251127091600</IRN>
</Invoice>`,
  },
  {
    id: '8',
    invoiceNumber: 'INV-005',
    status: 'Failed',
    description: 'Connection timeout to FIRS access point',
    user: 'system',
    timestamp: '27 Nov 2025, 15:45:00',
    xmlAvailable: false,
  },
  {
    id: '9',
    invoiceNumber: 'INV-006',
    status: 'Submitted',
    description: 'Invoice submitted via access point API',
    user: 'jane.smith@example.com',
    timestamp: '26 Nov 2025, 11:20:00',
    xmlAvailable: true,
    requestXML: `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:firs:ng:einvoice:schema:v1">
  <IRN>NG-ABC123-INV006-20251126112000</IRN>
</Invoice>`,
    responseXML: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Status>Approved</Status>
  <ApprovalCode>FIRS-APP-2025-001235</ApprovalCode>
</Response>`,
  },
  {
    id: '10',
    invoiceNumber: 'INV-007',
    status: 'Created',
    description: 'Invoice created from SAP sales order SO-12347',
    user: 'john.doe@example.com',
    timestamp: '26 Nov 2025, 08:30:00',
    xmlAvailable: false,
  },
];
