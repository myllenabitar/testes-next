export async function GET() {
    const response = await fetch(`https://api.origamid.online/vendas`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            
        }, 
            body: JSON.stringify({
            username: 'dog',
            password:'dog'
        }),
    });
    if(!response.ok){
        return Response.json({erro: 'Erro na api'});
    }
    const data = await response.json();

    cookies().set('token', data.token, {
        httpOnly: true,
        secure: true,
        });

        return Response.json(data);
}
