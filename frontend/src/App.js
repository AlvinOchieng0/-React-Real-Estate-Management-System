import React from "react";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Home from "./components/pages/Home/Home";



const client = new ApolloClient({
  uri: "http://localhost:1339/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      
    </div>
    </ApolloProvider>
  );
};


export default App;
