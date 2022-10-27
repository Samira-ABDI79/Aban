// import React from "react";
// import ReactDOM from "react-dom/client";
import Container from "./providers/Container";
// import { Provider } from "react-redux";
// import { store } from "store/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Container />
//     </Provider>
//   </React.StrictMode>
// );




import React from 'react'
import ReactDOM from 'react-dom';

// import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
     <Container />
    
  </QueryClientProvider>,
    document.getElementById('root')
);