'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AuditLogEntry, getStatusColor } from '../../types';

interface AuditLogDetailsModalProps {
  log: AuditLogEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditLogDetailsModal({
  log,
  isOpen,
  onClose,
}: AuditLogDetailsModalProps) {
  if (!log) return null;

  const getSubtitle = () => {
    if (log.status === 'Submitted') return `${log.invoiceNumber} - Submitted to FIRS`;
    if (log.status === 'Failed') return `${log.invoiceNumber} - Submission Failed`;
    if (log.status === 'Generated') return `${log.invoiceNumber} - XML Generated`;
    return `${log.invoiceNumber} - Invoice ${log.status}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-150 p-0 max-h-[85vh] flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Audit Log Details
              </DialogTitle>
              <p className="text-sm text-gray-600 mt-1">{getSubtitle()}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Content - Scrollable */}
        <div className="px-6 py-4 space-y-4 overflow-y-auto flex-1">
          {/* Invoice Number and Action */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Invoice Number
              </label>
              <p className="font-medium text-gray-900">{log.invoiceNumber}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Action</label>
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                  log.status
                )}`}
              >
                {log.status}
              </span>
            </div>
          </div>

          {/* User and Timestamp */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">User</label>
              <p className="text-gray-900">{log.user}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Timestamp
              </label>
              <p className="text-gray-900">{log.timestamp}</p>
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">Details</label>
            <div className="bg-gray-50 rounded-md p-3">
              <p className="text-sm text-gray-900">{log.description}</p>
            </div>
          </div>

          {/* Request XML */}
          {log.requestXML && (
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Request XML
              </label>
              <div className="bg-gray-50 rounded-md p-3 overflow-x-auto">
                <pre className="text-xs text-gray-900 font-mono whitespace-pre">
                  {log.requestXML}
                </pre>
              </div>
            </div>
          )}


          {/* Response XML */}
          {log.responseXML && (
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Response XML
              </label>
              <div className="bg-gray-50 rounded-md p-3 overflow-x-auto">
                <pre className="text-xs text-gray-900 font-mono whitespace-pre">
                  {log.responseXML}
                </pre>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
