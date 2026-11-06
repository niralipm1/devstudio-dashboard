import React from 'react';
import { mockSummary, mockLatencySeries, mockAlerts } from '@/lib/mock-data';
import { MetricCard } from '@/components/MetricCard';
import { ThroughputChart } from '@/components/ThroughputChart';
import { ActivityFeed } from '@/components/ActivityFeed';

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">Live Telemetry Gateway</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">DevStudio Analytics Portal</h1>
          <p className="text-sm text-slate-400 mt-1">
            High-throughput event stream telemetry &amp; mobile crash metrics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
            Node: us-east-prod-04
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            Sync: Nominal
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <MetricCard
          title="Throughput (RPS)"
          value={mockSummary.requestsPerSecond.toLocaleString()}
          subtitle="Real-time ingestion rate"
          trend="+18.4%"
        />
        <MetricCard
          title="p99 Latency"
          value={`${mockSummary.p99LatencyMs} ms`}
          subtitle="Sub-5ms SLA guarantee"
          trend="-0.4ms"
        />
        <MetricCard
          title="Error Rate"
          value={`${mockSummary.errorRatePercent}%`}
          subtitle="4xx / 5xx error budget"
          trend="Healthy"
        />
        <MetricCard
          title="Total Events"
          value={mockSummary.totalEventsProcessed}
          subtitle="Trailing 30 days processed"
          trend="+4.2%"
        />
      </div>

      {/* Grid: Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ThroughputChart data={mockLatencySeries} />
        </div>
        <div>
          <ActivityFeed alerts={mockAlerts} />
        </div>
      </div>
    </main>
  );
}
