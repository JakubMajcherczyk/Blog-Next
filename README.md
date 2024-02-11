# Pierwszy Projekt w NEXT.JS - Blog

## Wstęp i Cel Projektu

Ten projekt to blog stworzony za pomocą Next.js. Celem projektu jest nauka i praktyka tworzenia aplikacji internetowych z wykorzystaniem Next.js, TailwindCSS, Flowbite oraz TypeScript.

## Instalacja i Uruchamianie

Aby zainstalować i uruchomić ten projekt lokalnie, wykonaj następujące kroki:

1. Sklonuj to repozytorium na swoje lokalne środowisko deweloperskie:

`bash
`git clone https://github.com/JakubMajcherczyk/Blog-Next.git`

2. Przejdź do katalogu projektu:
   `cd Blog-Next`

3. Zainstaluj zależności:
   `npm install`

4. Uruchom serwer deweloperski:
   `npm run dev`

5. Teraz projekt powinien być dostępny pod adresem `http://localhost:3000`.

   `UWAGA!` W przypadku wystąpienia błędów użyj komendy:
   `npm install --save-exact --save-dev @types/react @types/node`
   lub `npm i --legacy-peer-deps`

## Struktura Projektu

Projekt składa się z następujących kluczowych katalogów i plików:

- `pages`: Katalog zawierający wszystkie strony aplikacji. Każdy plik w tym katalogu staje się dostępną stroną.
- `components`: Katalog zawierający komponenty React używane na stronach.
- `styles`: Katalog zawierający globalne style CSS.
- `public`: Katalog zawierający pliki statyczne, takie jak obrazy i pliki JSON.
- `package.json`: Plik zawierający metadane projektu i listę zależności.

## Komponenty i Logika

Projekt korzysta z kilku kluczowych komponentów:

- `PostCard`: Komponent wyświetlający informacje o poście na stronie głównej.
- `Navbar`: Komponent wyświetlający pasek nawigacyjny na górze każdej strony.
- `pages/posts/[id].tsx`: Strona wyświetlająca szczegóły pojedynczego posta.

## Routing i Nawigacja

Routing w aplikacji jest obsługiwany przez Next.js. Każdy plik w katalogu `pages` staje się dostępną stroną. Na przykład, plik `pages/about.tsx` odpowiada za stronę `http://localhost:3000/about`.

## Stylowanie

Projekt korzysta z TailwindCSS do stylowania komponentów. Dodatkowo, używane są biblioteki Flowbite i Flowbite-react do tworzenia predefiniowanych komponentów stylizowanych.
