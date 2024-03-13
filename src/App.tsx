import RouterComponent from "@/router";
import "./app.scss";
import "./variables.scss"

function App() {
  document.body.className = "dark";

  return (
    <>
      <header></header>
      <RouterComponent />
    </>
  );
}

export default App;
