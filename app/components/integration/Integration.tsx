
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HiDatabase,
  HiDocumentText,
  HiRefresh,
  HiCloud,
  HiOfficeBuilding,
} from 'react-icons/hi';
import { BsArrowRight, BsCheckCircleFill, BsDownload } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

export default function IntegrationArchitecture() {
  const flowSteps = [
    {
      icon: HiDatabase,
      title: 'ERP',
      subtitle: 'SD / FI Module',
      color: 'border-emerald-500 bg-emerald-50',
    },
    {
      icon: HiDocumentText,
      title: 'DRC Cockpit',
      subtitle: 'eDoc Generator',
      color: 'border-emerald-500 bg-emerald-50',
    },
    {
      icon: HiRefresh,
      title: 'iFLOW',
      subtitle: 'Transformation Layer',
      color: 'border-emerald-500 bg-emerald-50',
    },
    {
      icon: HiCloud,
      title: 'Access Point',
      subtitle: 'SAP BTP Integration',
      color: 'border-emerald-500 bg-emerald-50',
    },
    {
      icon: HiOfficeBuilding,
      title: 'FIRS',
      subtitle: 'Tax Authority',
      color: 'border-emerald-500 bg-emerald-50',
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'ERP',
      subtitle: 'Sales & Finance Documents',
      verified: true,
    },
    {
      number: 2,
      title: 'DRC Cockpit',
      subtitle: 'XML Generation',
      verified: true,
    },
    {
      number: 3,
      title: 'iFLOW',
      subtitle: 'XML → JSON Encoding',
      verified: true,
    },
    {
      number: 4,
      title: 'Access Point',
      subtitle: 'API Gateway',
      verified: true,
    },
    {
      number: 5,
      title: 'FIRS',
      subtitle: 'Nigeria Revenue Service',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 rounded-lg">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Integration Architecture
            </h1>
            <p className="text-slate-600 mt-1">
              End-to-end document flow from ERP to FIRS
            </p>
          </div>
          <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <BsCheckCircleFill className="mr-1.5 h-3 w-3" />
            Connected
          </Badge>
        </div>

        {/* Flow Diagram */}
        <Card>
          <CardContent className="pt-8">
            <div className="flex items-center justify-between px-4">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index}>
                    <div className="flex flex-col items-center space-y-2">
                      <div
                        className={`w-16 h-16 rounded-xl border-2 ${step.color} flex items-center justify-center`}
                      >
                        <Icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-slate-900">
                          {step.title}
                        </div>
                        <div className="text-xs text-slate-500">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <BsArrowRight className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Data Format Flow & Connection Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Data Format Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Data Format Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="font-mono">
                    XML
                  </Badge>
                  <BsArrowRight className="h-4 w-4 text-slate-400" />
                  <Badge variant="outline" className="font-mono">
                    JSON
                  </Badge>
                  <BsArrowRight className="h-4 w-4 text-slate-400" />
                  <Badge variant="outline" className="font-mono">
                    API
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Response Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Response Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <Badge variant="outline">QR Code</Badge>
                  <span className="text-slate-400">+</span>
                  <Badge variant="outline">Date/Time</Badge>
                  <span className="text-slate-400">or</span>
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-200"
                  >
                    Error
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Process Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Process Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900">
                            {step.title}
                          </span>
                          {step.verified && (
                            <BsCheckCircleFill className="h-3.5 w-3.5 text-emerald-500" />
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Connection Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Connection Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <GoDotFill className="h-4 w-4 text-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 font-medium">Live</span>
                  <span className="text-slate-500">
                    - Last sync: 2 minutes ago
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Standard */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Compliance Standard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-100"
                  >
                    FIRS Schema v1.0
                  </Badge>
                  <Badge variant="outline">Peppol Compatible</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Configuration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ERP Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>ERP Configuration</CardTitle>
              <CardDescription>SAP S/4HANA connection settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">System ID</div>
                  <div className="text-sm font-medium text-slate-900">NG1</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Client</div>
                  <div className="text-sm font-medium text-slate-900">100</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">
                    Company Code
                  </div>
                  <div className="text-sm font-medium text-slate-900">NG01</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Module</div>
                  <div className="text-sm font-medium text-slate-900">
                    SD/FI
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Configure Connection
              </Button>
            </CardContent>
          </Card>

          {/* FIRS Access Point */}
          <Card>
            <CardHeader>
              <CardTitle>FIRS Access Point</CardTitle>
              <CardDescription>
                Tax authority integration settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Taxpayer ID</div>
                  <div className="text-sm font-medium text-slate-900">
                    12345678-0001
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">
                    Access Point
                  </div>
                  <div className="text-sm font-medium text-slate-900">
                    Registered
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">API Status</div>
                  <div className="flex items-center gap-1.5">
                    <GoDotFill className="h-3 w-3 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-600">
                      Active
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">
                    Schema Version
                  </div>
                  <div className="text-sm font-medium text-slate-900">
                    FIRS v1.0
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <BsDownload className="mr-2 h-4 w-4" />
                Download Certificates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
