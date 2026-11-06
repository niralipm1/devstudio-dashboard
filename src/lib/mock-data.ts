import { TelemetrySummary, LatencyDataPoint, ServiceAlert } from './types';

export const mockSummary: TelemetrySummary = {
  activeInstances: 24,
  requestsPerSecond: 18450,
  p99LatencyMs: 3.2,
  errorRatePercent: 0.02,
  totalEventsProcessed: "1.42B",
};

export const mockLatencySeries: LatencyDataPoint[] = [
  { time: "00:00", p50: 0.8, p95: 1.9, p99: 3.1 },
  { time: "04:00", p50: 0.7, p95: 1.8, p99: 2.9 },
  { time: "08:00", p50: 1.2, p95: 2.4, p99: 3.8 },
  { time: "12:00", p50: 1.4, p95: 2.9, p99: 4.2 },
  { time: "16:00", p50: 1.1, p95: 2.2, p99: 3.5 },
  { time: "20:00", p50: 0.9, p95: 1.9, p99: 3.0 },
];

export const mockAlerts: ServiceAlert[] = [
  {
    id: "alt-01",
    title: "Redis Streams consumer group rebalance completed",
    service: "cloudpulse-engine",
    severity: "low",
    timestamp: "2 mins ago",
  },
  {
    id: "alt-02",
    title: "FastAPI inference latency normalized below 4ms",
    service: "fastapi-ml-gateway",
    severity: "low",
    timestamp: "14 mins ago",
  },
  {
    id: "alt-03",
    title: "Android Biometrics TurboModule zero handshake drops",
    service: "pulsefit-tracker",
    severity: "low",
    timestamp: "1 hour ago",
  },
];
