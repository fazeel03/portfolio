import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <RedirectFrom404 />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

function RedirectFrom404() {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");
  const q = url.searchParams.get("q");
  const h = url.searchParams.get("h");
  if (!p && !q && !h) return null;

  const base = import.meta.env.BASE_URL || "/";
  const pathname = decodeURIComponent(p ?? "");
  const search = q ? "?" + decodeURIComponent(q) : "";
  const hash = h ? "#" + decodeURIComponent(h) : "";
  const next = base.replace(/\/?$/, "/") + pathname.replace(/^\//, "") + search + hash;
  window.history.replaceState(null, "", next);
  return null;
}
