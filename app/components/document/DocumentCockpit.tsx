'use client';
import { useState } from 'react';

import {
  Alert,
  AlertDescription,
  // AlertTitle,
} from "@/components/ui/alert"
import {
  FiChevronDown,
  FiChevronUp,
  FiRefreshCw,
  FiSearch,
} from 'react-icons/fi';
import { DocumentTable } from './DocumentTable';
import { sampleData } from '../../../lib/data';
import { Document } from '@/types';
import { FaChevronDown, FaFile, FaGear,FaInfo } from 'react-icons/fa6';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from "sonner"

import { moreOptions } from '@/types';
import CockpitSettings from '../settings/CockpitSettings';

type docVariants = 'Customer Invoice' | 'Credit Note' | 'Debit Note';

export default function DocumentCockpit() {
  const [variantsActive, setVariantsActive] = useState<boolean>(false);
  const [docVariant, setDocVariant] = useState<docVariants>('Customer Invoice');
  const [moreOptionsOpen, setMoreOptionsOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<moreOptions | null>(null);
  const [selectedRowsData, setSelectedRowsData] = useState<Document[]>([]);
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);

  const hasSelection = selectedRowsData.length > 0;

  const handleSubmit = () => {
    if(!hasSelection) return;
    if (selectedRowsData.length === 1) {
      setSubmitDialogOpen(true);
    }
    if(selectedRowsData.length > 1) {
      toast.success( `${selectedRowsData.length} invoices has been submited`, { position: "bottom-right" })
     
    }
  };

  const getStatusBadgeColor = (statusType: string) => {
    switch (statusType) {
      case 'accepted':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'created':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="grid grid-cols-[250px_1fr] h-[calc(100vh-100px)] gap-0">
      {/* Sidebar */}
      <div className="bg-gray-50 border-r border-gray-200 p-3 overflow-y-auto">
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-600 mb-1">Variant:</p>
          <p className="border-b border-gray-300 text-xs text-gray-500 pb-2 mb-3">
            Select document type
          </p>
        </div>

        <div className="text-sm">
          <div
            className="flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-100 p-1.5 rounded"
            onClick={() => setVariantsActive(!variantsActive)}
          >
            {variantsActive ? (
              <FiChevronDown className="text-gray-600 w-4 h-4" />
            ) : (
              <FiChevronUp className="text-gray-600 w-4 h-4" />
            )}
            <span className="font-medium text-gray-700">Nigeria</span>
          </div>

          {variantsActive && (
            <div className="ml-6 space-y-1">
              <p
                className={`px-2 py-1.5 rounded cursor-pointer text-sm transition-colors ${
                  docVariant === 'Customer Invoice'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setDocVariant('Customer Invoice')}
              >
                Customer Invoice -FIRS
              </p>
              <p
                className={`px-2 py-1.5 rounded cursor-pointer text-sm transition-colors ${
                  docVariant === 'Credit Note'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setDocVariant('Credit Note')}
              >
                Credit Note -FIRS
              </p>
              <p
                className={`px-2 py-1.5 rounded cursor-pointer text-sm transition-colors ${
                  docVariant === 'Debit Note'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setDocVariant('Debit Note')}
              >
                Debit Note -FIRS
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-3 space-y-3 shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Source Document:</span>
              <input
                type="text"
                placeholder="Document #"
                className="bg-gray-50 border border-gray-300 px-2 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
              />
              <FiSearch className="text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>

            <div className="flex gap-2 items-center">
              <Button
                disabled={!hasSelection}
                size="sm"
                onClick={handleSubmit}
                className={hasSelection ? '' : 'opacity-50 cursor-not-allowed'}
              >
                Submit
              </Button>

              <Button
                disabled={!hasSelection}
                variant="outline"
                size="sm"
                className={`gap-1.5 ${!hasSelection ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaFile className="w-3 h-3" />
                Export File
              </Button>

              <Button
                disabled={!hasSelection}
                variant="outline"
                size="sm"
                className={!hasSelection ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Display
              </Button>

              <Button
                disabled={!hasSelection}
                variant="outline"
                size="sm"
                className={!hasSelection ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Goto
              </Button>

              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
                >
                  <FaGear className="w-3 h-3" />
                  More
                  <FaChevronDown className="h-2 w-2" />
                </Button>

                {moreOptionsOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[180px]">
                    <ul className="py-1">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                        onClick={() => setMoreOptionsOpen(false)}
                      >
                        Resend to FIRS
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm border-t border-gray-100 transition-colors"
                        onClick={() => setMoreOptionsOpen(false)}
                      >
                        Validate Schema
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                        onClick={() => setMoreOptionsOpen(false)}
                      >
                        Download XML
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm border-t border-gray-100 transition-colors"
                        onClick={() => setMoreOptionsOpen(false)}
                      >
                        Export Audit Log
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                        onClick={() => {
                          setMoreOptionsOpen(false);
                          setDialogType('Cockpit Settings');
                          setDialogOpen(true);
                        }}
                      >
                        Cockpit Settings
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Button
                disabled={!hasSelection}
                variant="outline"
                size="sm"
                className={`${!hasSelection ? 'opacity-50 cursor-not-allowed' : 'text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200'}`}
              >
                Delete
              </Button>

              <Button variant="ghost" size="sm" className="p-2">
                <FiRefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Variant:{' '}
            <span className="text-blue-700 font-medium">Nigeria eInvoice</span>
          </div>
        </div>

        {/* Table Container */}
        {docVariant === 'Customer Invoice' && (
          <div
            className="flex-1 overflow-hidden p-3"
            onClick={() => setMoreOptionsOpen(false)}
          >
            <DocumentTable
              data={sampleData}
              onSelectionChange={setSelectedRowsData}
            />
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{dialogType}</DialogTitle>
          </DialogHeader>

          {dialogType === 'Cockpit Settings' && (
            <div>
              <CockpitSettings />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Submit Dialog - Show Selected Row Details */}
             <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{dialogType}</DialogTitle>
          </DialogHeader>

          {dialogType === 'Cockpit Settings' && (
            <div>
              <CockpitSettings />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Submit Dialog - Show Single Document Details */}
      <Dialog open={submitDialogOpen} onOpenChange={setSubmitDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Submit Documents to FIRS
               <p className="text-sm text-gray-600 mt-2">
              Review and confirm submission of invoice {selectedRowsData[0]?.source}
            </p>
            </DialogTitle>
           
          </DialogHeader>
           <Alert>
        <FaInfo />
        <AlertDescription>
         Once submitted,this invoice becomes an immutable record. Corrections can only be made by via credit/debit notes
        </AlertDescription>
      </Alert>

          {selectedRowsData[0] && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-sm">
                  <span>Document Details</span>
                  <Badge className={getStatusBadgeColor(selectedRowsData[0].statusType)}>
                    {selectedRowsData[0].status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">Source Key:</span>
                    <p className="text-gray-900">{selectedRowsData[0].eDocumentSourceKey}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Source:</span>
                    <p className="text-gray-900">{selectedRowsData[0].source}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Description:</span>
                    <p className="text-gray-900">{selectedRowsData[0].sourceDescription}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Company Code:</span>
                    <p className="text-gray-900">{selectedRowsData[0].coCode}</p>
                  </div>
               
                  <div>
                    <span className="text-gray-500 font-medium">Created By:</span>
                    <p className="text-gray-900">{selectedRowsData[0].createdBy}</p>
                  </div>
                
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              onClick={() => setSubmitDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                // Submit single document
                console.log('Submitting document:', selectedRowsData[0]);
                setSubmitDialogOpen(false);
                
                toast.success('Document submitted to FIRS', {
                  description: `Invoice ${selectedRowsData[0]?.source} has been submitted successfully`,
                });
              }}
            >
              Confirm Submit to FIRS
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
