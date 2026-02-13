'use client';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function NotificationPreferences() {
  const [approvedByFIRS, setApprovedByFIRS] = useState(true);
  const [rejectedByFIRS, setRejectedByFIRS] = useState(true);
  const [submissionErrors, setSubmissionErrors] = useState(true);
  const [bulkOperationComplete, setBulkOperationComplete] = useState(true);
  const [notificationDuration, setNotificationDuration] = useState('5');
    
  return (
  
     
        <div className="p-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Notification Preferences
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Choose when to receive notifications
            </p>
          </div>

          <div className="space-y-2 mb-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="approved-firs" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Document Approved by FIRS
                </Label>
                <p className="text-sm text-slate-500">
                  Show notification when FIRS accepts a document
                </p>
              </div>
              <Switch
                id="approved-firs"
                checked={approvedByFIRS}
                onCheckedChange={setApprovedByFIRS}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="rejected-firs" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Document Rejected by FIRS
                </Label>
                <p className="text-sm text-slate-500">
                  Show notification when FIRS rejects a document
                </p>
              </div>
              <Switch
                id="rejected-firs"
                checked={rejectedByFIRS}
                onCheckedChange={setRejectedByFIRS}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="submission-errors" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Submission Errors
                </Label>
                <p className="text-sm text-slate-500">
                  Show notification for submission failures
                </p>
              </div>
              <Switch
                id="submission-errors"
                checked={submissionErrors}
                onCheckedChange={setSubmissionErrors}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="bulk-operation" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Bulk Operation Completion
                </Label>
                <p className="text-sm text-slate-500">
                  Notify when bulk operations complete
                </p>
              </div>
              <Switch
                id="bulk-operation"
                checked={bulkOperationComplete}
                onCheckedChange={setBulkOperationComplete}
              />
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="notification-duration" className="text-sm font-medium text-slate-900">
                Notification Duration (seconds)
              </Label>
              <Input
                id="notification-duration"
                type="number"
                value={notificationDuration}
                onChange={(e) => setNotificationDuration(e.target.value)}
                className="w-full max-w-50"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
     

  );
}