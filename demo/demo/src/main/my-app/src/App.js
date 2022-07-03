import { useState } from "react";
import "./App.css";
import SearchBody from "./components/SearchBody";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([
    {
      name: "aashu",
      id: "1",
      associateId: "CTS1766",
      email: "aashraya@gmail.com",
      mobNum: 6239041034,
      angular: null,
      aptitude: null,
      aws: null,
      communication: null,
      docker: null,
      git: null,
      hibernate: null,
      html: null,
      jenkins: null,
      react: null,
      restful: null,
      spoken: null,
      spring: null
    },
  ]);
  return (
    <div className="App">
      <div className="title">Admin Functionality</div>
      <SearchBody setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
