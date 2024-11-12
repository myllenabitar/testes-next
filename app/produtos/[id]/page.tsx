type PageParams = {
    params: {
        id:string,
    }
}
type Produto = {
    id:'string',
    nome:'string',
    preco:'number',
    descricao:'string',
    estoque:'number',
    importado:'number'
}
export default async function ProdutoPage({params}: PageParams){
    const response = await fetch('https://api.origamid.online/produtos/${params.id}');
    const data = await response.json() as Produto;
    return (
    <main>
    <h1>Produto: {params.id}</h1>
    <h2>R$: {data.preco}</h2>
    <p>{data.descricao}</p>
    <p>{data.preco}</p>
    <p>{data.estoque}</p>
    <p>{data.importado}</p>
    </main>

)
}