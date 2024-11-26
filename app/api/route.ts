export async function GET() {
    const response = await fetch(`https://api.origamid.online/vendas`, {
        headers: {
            apikey: 'ORIGAMID123456'
        }
    })
        const vendas = await response.json();
    return new Response(JSON.stringify(vendas));
}
