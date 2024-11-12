
import { getCurso } from '@/api/cursos';
import Link from 'next/link';

export default async function CursoPage({
  params,
}: {
  params: { curso: string };
}) {
  const curso = await getCurso(params.curso);
  console.log(curso)
  debugger;
  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total Horas: {curso.total_horas}</p>
      <p>Total Aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas?.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${curso.slug}/${aula.slug}`}>{aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
