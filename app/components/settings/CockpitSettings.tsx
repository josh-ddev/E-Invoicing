'use client';
import { useState } from 'react';
import GeneralCockPitSettings from './GeneralCockPitSettings';
import DisplayCockpitSettings from './DisplayCockpitSettings';
import FIRSCockpitSettings from './FIRSCockpitSettings';
import NotificationsCockpitSettings from './NotificationsCockpitSettings';
type cockPitSettingsTabs = 'General' | 'Display' | 'FIRS' | 'Notifications';
export default function CockpitSettings() {
  const [activeTab, setActiveTab] = useState<cockPitSettingsTabs>('General');
  return (
    <div className="">
      <p className="text-gray-500 text-sm">
        Configure your eDocument preferences and FIRS integration settings
      </p>

      <div className="flex justify-between bg-gray-200 rounded-full px-2 cursor-pointer py-1">
        <p
          className={
            activeTab === 'General' ? 'bg-white rounded-full px-2 ' : ''
          }
          onClick={() => setActiveTab('General')}
        >
          General
        </p>
        <p
          className={
            activeTab === 'Display' ? 'bg-white rounded-full px-2' : ''
          }
          onClick={() => setActiveTab('Display')}
        >
          Display
        </p>
        <p
          className={activeTab === 'FIRS' ? 'bg-white rounded-full px-2' : ''}
          onClick={() => setActiveTab('FIRS')}
        >
          FIRS
        </p>
        <p
          className={
            activeTab === 'Notifications' ? 'bg-white rounded-full px-2' : ''
          }
          onClick={() => setActiveTab('Notifications')}
        >
          Notifications
        </p>
      </div>
      <div className="">
        {activeTab === 'General' && <GeneralCockPitSettings />}
        {activeTab === 'Display' && <DisplayCockpitSettings />}
        {activeTab === 'FIRS' && <FIRSCockpitSettings />}
        {activeTab === 'Notifications' && <NotificationsCockpitSettings />}
      </div>
    </div>
  );
}
