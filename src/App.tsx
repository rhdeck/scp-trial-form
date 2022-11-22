import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import AlertProvider from "./Alert";
import AppRouter from "./AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AlertProvider>
          <AppRouter />
        </AlertProvider>
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
