// app/api/env/route.ts
export async function GET() {
  return new Response(`Env: ${process.env.DATABASE_URL}`);
}
