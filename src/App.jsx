import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function App() {
  const [htmlEdit, setHtmlEdit] = useState("");
  const [cssEdit, setCssEdit] = useState("");
  const [jsEdit, setJsEdit] = useState("");

  const htmlChange = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  const cssChange = useCallback((value) => {
    setCssEdit(value);
  }, []);

  const jsChange = useCallback((value) => {
    setJsEdit(value);
  }, []);

  const srcCode = `<html>
    <body>${htmlEdit}</body>
    <style>${cssEdit}</style>
    <script>${jsEdit}</script>
  </html>`;

  return (
    <>
      <Navbar />
      {/* main content  */}
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="bg-[#282c34] shadow p-4 rounded-lg">
            <h2 className="text-lg text-white font-semibold mb-2">HTML</h2>
            <ReactCodeMirror
              className="text-xl border border-gray-700"
              height="300px"
              theme="dark"
              value={htmlEdit}
              extensions={[html(true)]}
              onChange={htmlChange}
            />
          </div>
          <div className="bg-[#282c34] shadow p-4 rounded-lg">
            <h2 className="text-lg text-white font-semibold mb-2">CSS</h2>
            <ReactCodeMirror
              className="text-xl border border-gray-700"
              height="300px"
              theme="dark"
              value={cssEdit}
              extensions={[css(true)]}
              onChange={cssChange}
            />
          </div>
          <div className="bg-[#282c34] shadow p-4 rounded-lg">
            <h2 className="text-lg text-white font-semibold mb-2">
              JAVASCRIPT
            </h2>
            <ReactCodeMirror
              className="text-xl border border-gray-700"
              height="300px"
              theme="dark"
              value={jsEdit}
              extensions={[javascript(true)]}
              onChange={jsChange}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </>
  );
}

export default App;
