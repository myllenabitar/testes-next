import ServerFetch from "../src/components/serverFetch";

export default async function HomePage() {
  return (
    <main> 
      <h1>Home</h1>
      <ServerFetch/>
    </main>
  );
}
