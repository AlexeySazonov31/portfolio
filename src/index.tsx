import { LocationProvider, Router, Route, hydrate, prerender as ssr } from "preact-iso";

import { GradientDiv } from "./components/Gradientdiv";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";

import "./style.css";

export function App() {

  return (
    <LocationProvider>
      <GradientDiv
        className="h-full w-full"
        effectColor="#050029"
        backgroundColor="#03001C"
      >
        <div className="mx-auto min-h-screen max-w-screen-xl font-poppins px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Header />
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24">
              <Router>
                <Route path="/" component={Home} />
                <Route default component={NotFound} />
              </Router>
            </main>
          </div>
        </div>
      </GradientDiv>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
