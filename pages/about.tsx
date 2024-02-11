export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Pierwszy projekt w NEXT.JS - Blog
      </h2>
      <h3 className="text-3xl text-center mb-4">Autor: Jakub Majcherczyk</h3>
      <p className="text-2xl text-center px-8">
        Jest to mój debiutancki projekt realizowany w NEXT.JS. Wykorzystałem w
        nim TailwindCSS, bibliotekę do stylowania Flowbite oraz Typescript. Ten
        projekt stanowi wstęp do mojego dalszego rozwoju i nauki na praktykach w
        Devstock Academy.
      </p>
    </div>
  );
}