'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import DocumentCockpit from './DocumentCockpit';
import DashboardOverview from './Dashboard';
import Integration from './Integration';
import  AuditLog  from './AuditLog';



export default function Main() {
  return (
    <div className=" mx-20 mt-5">
           <Tabs defaultValue="Document Cockpit" className="">
      <TabsList className='mx-auto w-full'>
        <TabsTrigger value="Document Cockpit">Document Cockpit</TabsTrigger>
        <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="Integration">Integration</TabsTrigger>
        <TabsTrigger value="Audit Log">Audit Log</TabsTrigger>
      </TabsList>
      <TabsContent value="Document Cockpit">
        <DocumentCockpit />
      </TabsContent>
      <TabsContent value="Dashboard">
       <DashboardOverview/>
      </TabsContent>
      <TabsContent value="Integration">
       <Integration/>
      </TabsContent>
       <TabsContent value="Audit Log">
       <AuditLog/>
      </TabsContent>
    </Tabs>
      </div>
  
  );
}





