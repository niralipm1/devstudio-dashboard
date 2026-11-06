export interface TelemetrySummary {
  activeInstances: number;
  requestsPerSecond: number;
  p99LatencyMs: number;
  errorRatePercent: number;
  totalEventsProcessed: string;
}

export interface LatencyDataPoint {
  time: string;
  p50: number;
  p95: number;
  p99: number;
}

export interface ServiceAlert {
  id: string;
  title: string;
  service: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
}
