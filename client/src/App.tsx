import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NoDeepTalks from "./pages/NoDeepTalks";

function Router() {
  const isBuddyDomain =
    typeof window !== "undefined" &&
    (window.location.hostname === "buddyandthebooty.com" ||
      window.location.hostname === "www.buddyandthebooty.com");

  return (
    <WouterRouter>
      <Switch>
        {/* The custom Buddy and the Booty domain gets the game at its homepage. */}
        <Route path={"/"} component={isBuddyDomain ? NoDeepTalks : Home} />
        <Route path={"/no-deep-talks"} component={NoDeepTalks} />
        <Route path={"/buddy-and-the-booty"} component={NoDeepTalks} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
