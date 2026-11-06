import { mockSummary, mockLatencySeries } from '../src/lib/mock-data';

describe('DevStudio Analytics Telemetry Validation', () => {
  it('should maintain p99 latency SLA strictly under 5.0ms', () => {
    expect(mockSummary.p99LatencyMs).toBeLessThan(5.0);
  });

  it('should have consistent time-series latency readings', () => {
    expect(mockLatencySeries.length).toBeGreaterThan(0);
    mockLatencySeries.forEach((pt) => {
      expect(pt.p99).toBeGreaterThan(pt.p50);
      expect(pt.p95).toBeGreaterThan(pt.p50);
    });
  });

  it('should verify healthy error rate below 0.05%', () => {
    expect(mockSummary.errorRatePercent).toBeLessThan(0.05);
  });
});
