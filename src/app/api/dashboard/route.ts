export async function GET({ request }) {
  return new Response(JSON.stringify({ message: 'Dashboard API' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}