import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhyPartner from "./pages/WhyPartner";
import Portfolio from "./pages/Portfolio";
import Industries from "./pages/Industries";
import Spotlight from "./pages/Spotlight";
import Speaking from "./pages/Speaking";
import About from "./pages/About";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/why-partner" component={WhyPartner} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/industries" component={Industries} />
      <Route path="/spotlight" component={Spotlight} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/about" component={About} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
