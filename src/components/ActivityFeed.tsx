import React from 'react';
import { ServiceAlert } from '@/lib/types';

interface Props {
  alerts: ServiceAlert[];
}

export const ActivityFeed: React.FC<Props> = ({ alerts }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <h3 className="text-lg font-bold text-white mb-4">Active Telemetry Stream</h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-750"
          >
            <div>
              <div className="text-sm font-medium text-slate-200">{alert.title}</div>
              <div className="text-xs font-mono text-sky-400 mt-0.5">{alert.service}</div>
            </div>
            <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{alert.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
