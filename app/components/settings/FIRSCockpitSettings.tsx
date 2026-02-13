'use client'
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function FIRSIntegrationSettings() {
  const [apiEndpoint, setApiEndpoint] = useState('https://api.firs.gov.ng/einvoice/v1');
  const [companyTIN, setCompanyTIN] = useState('12345678-0001');
  const [requestTimeout, setRequestTimeout] = useState('30');
  const [enableSSL, setEnableSSL] = useState(true);
  const [retryFailed, setRetryFailed] = useState(true);

  return (

      
        <div className=" space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              FIRS Integration Settings
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Configure connection to FIRS Access Point
            </p>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="api-endpoint" className="text-sm font-medium text-slate-900">
                FIRS API Endpoint
              </Label>
              <Input
                id="api-endpoint"
                type="text"
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-tin" className="text-sm font-medium text-slate-900">
                Company TIN
              </Label>
              <Input
                id="company-tin"
                type="text"
                value={companyTIN}
                onChange={(e) => setCompanyTIN(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="request-timeout" className="text-sm font-medium text-slate-900">
                Request Timeout (seconds)
              </Label>
              <Input
                id="request-timeout"
                type="number"
                value={requestTimeout}
                onChange={(e) => setRequestTimeout(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-start justify-between gap-4 pt-2">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="enable-ssl" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Enable SSL Verification
                </Label>
                <p className="text-sm text-slate-500">
                  Verify SSL certificates for FIRS connections
                </p>
              </div>
              <Switch
                id="enable-ssl"
                checked={enableSSL}
                onCheckedChange={setEnableSSL}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="retry-failed" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Retry Failed Submissions
                </Label>
                <p className="text-sm text-slate-500">
                  Automatically retry failed FIRS submissions
                </p>
              </div>
              <Switch
                id="retry-failed"
                checked={retryFailed}
                onCheckedChange={setRetryFailed}
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