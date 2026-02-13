export type DocumentStatus =
  | 'Accepted by FIRS Access Point'
  | 'Processing at FIRS'
  | 'Rejected by FIRS Access Point'
  | 'Created';

export type StatusType = 'accepted' | 'processing' | 'rejected' | 'created';

export interface Document {
  id: string;
  status: DocumentStatus;
  statusType: StatusType;
  eDocumentSourceKey: string;
  sourceDescription: string;
  coCode: string;
  creationDate: string;
  createdOn: string;
  createdBy: string;
  postingDate: string;
  inffFile: boolean;
  source: string;
  ctrlByEc: string;
}

export type moreOptions =
  | 'Resend to FIRS'
  | 'Validate Schema'
  | 'Download XML'
  | 'Export Audit Log'
  | 'Cockpit Settings';

  

export const getStatusType = (status: DocumentStatus): StatusType => {
  if (status === 'Accepted by FIRS Access Point') return 'accepted';
  if (status === 'Processing at FIRS') return 'processing';
  if (status === 'Rejected by FIRS Access Point') return 'rejected';
  return 'created';
};

export type AuditStatus = 'Created' | 'Generated' | 'Submitted' | 'Failed';

export interface AuditLogEntry {
  id: string;
  invoiceNumber: string;
  status: AuditStatus;
  description: string;
  user: string;
  timestamp: string;
  xmlAvailable: boolean;
  requestXML?: string;
  responseXML?: string;
}

export const getStatusColor = (status: AuditStatus): string => {
  switch (status) {
    case 'Created':
      return 'bg-blue-100 text-blue-700';
    case 'Generated':
      return 'bg-gray-700 text-white';
    case 'Submitted':
      return 'bg-green-100 text-green-700';
    case 'Failed':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};
