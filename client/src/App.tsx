import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Degrees from "./pages/Degrees";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/degrees"} component={Degrees} />
        <Route path={"/certificates"} component={Certificates} />
        <Route path={"/about"} component={About} />
        <Route path={"/apply"} component={Apply} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
