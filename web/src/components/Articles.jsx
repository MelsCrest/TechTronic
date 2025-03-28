import Article from "./Article"

function Articles() {
  return (
    <section className="w-auto md:w-3/5 lg:w-2/3 bg-pink-300 h-full p-10 flex flex-col">
      <h1 className="text-2xl font-bold">Últimos artículos</h1>
      <p className="py-3">Mantente actualizado con las últimas noticias y novedades del mundo de la tecnología</p>
      <Article />
      <Article />
      <button className="border-2 rounded-md py-2 px-3 mt-4 ml-auto mr-auto">Más artículos &gt;</button>
    </section>
  );
}



export default Articles