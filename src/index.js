
import Container from "./providers/Container";






import React from 'react'
import ReactDOM from 'react-dom';


import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
     <Container />
    
  </QueryClientProvider>,
    document.getElementById('root')
);