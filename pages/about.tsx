export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold text-center mb-4 w-1/3 dark:text-white">
        Pierwszy projekt w NEXT.JS - Blog
      </h2>
      <h3 className="text-3xl text-center mb-4 w-1/3 dark:text-white">
        Autor: Jakub Majcherczyk
      </h3>
      <p className="text-2xl text-center px-8 mx-10 w-1/2 dark:text-white">
        Jest to mój debiutancki projekt realizowany w NEXT.JS. Wykorzystałem w
        nim TailwindCSS, bibliotekę do stylowania Flowbite oraz Typescript. Ten
        projekt stanowi wstęp do mojego dalszego rozwoju i nauki na praktykach w
        Devstock Academy.
      </p>
    </div>
  );
}
