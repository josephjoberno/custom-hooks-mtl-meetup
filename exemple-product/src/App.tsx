import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import ProductPage from "./pages/ProductPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
  },
]);
function App() {
  // const { data: products } = useProducts();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
