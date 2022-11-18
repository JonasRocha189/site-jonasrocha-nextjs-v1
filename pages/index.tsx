import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonas Rocha</title>
        <meta
          name="description"
          content="Especialista em Desenvolvimento Web de Alta Performance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="h-screen p-5  bg-gray-700 text-gray-200 dark:bg-gray-100 dark:text-gray-800">
        <h1 className="text-3xl font-bold underline">Hero</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quod rerum culpa dolorum cumque nesciunt officiis, vero dicta totam ex
          eligendi omnis doloribus aut nostrum minima repudiandae molestias
          natus corporis!
        </p>
      </section>

      <section className="flex justify-between p-5 bg-gray-500 h-96">
        {/* Sidebar */}
        <aside>Sidebar</aside>

        {/* Posts */}
        <section>Posts</section>
      </section>

      {/* Materiais Gratuitos  */}
      <section className="bg-gray-700 h-96 p-5">Materiais Gratuitos</section>
    </>
  );
}
