import { NextResponse } from 'next/server';
import { mockSummary, mockLatencySeries, mockAlerts } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    summary: mockSummary,
    latency: mockLatencySeries,
    alerts: mockAlerts,
    generatedAt: new Date().toISOString(),
  });
}
