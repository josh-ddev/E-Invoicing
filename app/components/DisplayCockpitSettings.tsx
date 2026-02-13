'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function CockpitSettings() {
  const [showStatusIcons, setShowStatusIcons] = useState(true);
  const [showColorIndicators, setShowColorIndicators] = useState(true);
  const [compactRowHeight, setCompactRowHeight] = useState(false);
  const [highlightSelectedRows, setHighlightSelectedRows] = useState(true);

  return (
   
        <div className="">
         <div className='my-2'>
             <h3 className="text-lg font-semibold text-slate-900">
            Table Display Options
          </h3>
          <p className="text-sm text-slate-600">
            Customize the document table appearance
          </p>
         </div>

          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="status-icons" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Show Status Icons
                </Label>
                <p className="text-sm text-slate-500">
                  Display colored icons for document status
                </p>
              </div>
              <Switch
                id="status-icons"
                checked={showStatusIcons}
                onCheckedChange={setShowStatusIcons}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="color-indicators" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Show Color Indicators
                </Label>
                <p className="text-sm text-slate-500">
                  Show colored dots in status column
                </p>
              </div>
              <Switch
                id="color-indicators"
                checked={showColorIndicators}
                onCheckedChange={setShowColorIndicators}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="compact-rows" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Compact Row Height
                </Label>
                <p className="text-sm text-slate-500">
                  Use smaller row spacing for more documents
                </p>
              </div>
              <Switch
                id="compact-rows"
                checked={compactRowHeight}
                onCheckedChange={setCompactRowHeight}
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 flex-1">
                <Label 
                  htmlFor="highlight-rows" 
                  className="text-base font-medium text-slate-900 cursor-pointer"
                >
                  Highlight Selected Rows
                </Label>
                <p className="text-sm text-slate-500">
                  Show background color on selected documents
                </p>
              </div>
              <Switch
                id="highlight-rows"
                checked={highlightSelectedRows}
                onCheckedChange={setHighlightSelectedRows}
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
