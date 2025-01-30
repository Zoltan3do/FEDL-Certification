import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <div className="d-flex mt-5">
        <Editor></Editor>
        <Preview></Preview>
      </div>
    </>
  );
}

export default App;
