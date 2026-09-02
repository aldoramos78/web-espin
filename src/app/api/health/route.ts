import { NextResponse } from "next/server";

export async function GET() {
  // Esta ruta devuelve un HTTP 200 al instante.
  // Es extremadamente ligera y no renderiza HTML, ideal para Uptime Monitors.
  return NextResponse.json(
    {
      status: "online",
      timestamp: new Date().toISOString(),
      service: "espin-core",
    },
    { status: 200 }
  );
}
