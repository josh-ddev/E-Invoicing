'use client';
import { useState, useMemo } from 'react';
import { FiSearch, FiFileText } from 'react-icons/fi';
import { AuditLogEntry, getStatusColor } from '../../../types';
import { sampleAuditData } from '../../../lib/data';
import AuditLogDetailsModal from './AuditLogDetailsModal';

export default function AuditLog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter logs based on search query
  const filteredLogs = useMemo(() => {
    if (!searchQuery.trim()) {
      return sampleAuditData;
    }

    const query = searchQuery.toLowerCase();
    return sampleAuditData.filter(
      (log) =>
        log.invoiceNumber.toLowerCase().includes(query) ||
        log.description.toLowerCase().includes(query) ||
        log.user.toLowerCase().includes(query) ||
        log.status.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleLogClick = (log: AuditLogEntry) => {
    setSelectedLog(log);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing to allow modal close animation
    setTimeout(() => setSelectedLog(null), 200);
  };

  return (
    <div className="mt-4 pb-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Audit Trail</h1>
        <p className="text-sm text-gray-600">
          Complete submission logs with request and response XML
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by invoice number, action, or user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Activity Log Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Activity Log</h2>
          <p className="text-sm text-gray-600 mt-1">
            All invoice lifecycle events and FIRS interactions
          </p>
        </div>

        {/* Log Entries */}
        <div className="divide-y divide-gray-200">
          {filteredLogs.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">No audit logs found matching your search.</p>
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                onClick={() => handleLogClick(log)}
                className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {/* Invoice Number and Status */}
                <div className="flex items-center gap-3 mb-2">
                  <FiFileText className="text-gray-400 w-4 h-4" />
                  <span className="font-medium text-gray-900">{log.invoiceNumber}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(
                      log.status
                    )}`}
                  >
                    {log.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-2 ml-7">{log.description}</p>

                {/* Metadata */}
                <div className="flex items-center gap-4 ml-7 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{log.user}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{log.timestamp}</span>
                  </div>

                  {log.xmlAvailable && (
                    <div className="flex items-center gap-1 text-blue-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>XML Available</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Results count */}
      {searchQuery && (
        <div className="mt-4 text-sm text-gray-600">
          Found {filteredLogs.length} {filteredLogs.length === 1 ? 'result' : 'results'}
        </div>
      )}

      {/* Audit Log Details Modal */}
      <AuditLogDetailsModal
        log={selectedLog}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

