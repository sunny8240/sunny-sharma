import { useLayoutEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

function App() {
  useLayoutEffect(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => loader.remove(),
      prefersReducedMotion ? 0 : 750,
    );

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="App grain">
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
