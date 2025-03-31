import Article from "./Article"

function Articles() {
  return (
    <section className="w-auto md:w-3/5 lg:w-2/3 h-full p-10 flex flex-col">
      <h1 className="text-2xl font-bold">Últimos artículos</h1>
      <p className="py-3">Mantente actualizado con las últimas noticias y novedades del mundo de la tecnología</p>
      <Article category="Destacado" date="Feb 4, 2025" title="El futuro de la tecnología wereable en 2025" text="La tecnología vestible evoluciona a un ritmo sin precedentes, con la aparición de nuevas innovaciones que prometen revoucionar la forma en que interactuamos con nuestros dispositivos y controlamos nuestra salud."/>
      <Article category="Smartphones" date="June 2, 2024" title="Los 5 mejores smartphones de 2024: Un análisis exhaustivo" text="Hemos probado los últimos smartphones insignia para ayudarte a hacer una decisión informada sobre tu próxima compra."/>
      <button className="border-2 rounded-md py-2 px-3 mt-4 ml-auto mr-auto">Más artículos &gt;</button>
    </section>
  );
}



export default Articles