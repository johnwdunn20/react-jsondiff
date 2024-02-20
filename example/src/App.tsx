import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JsonDiff from "./JsonDiff";

function App() {
  return (
    <>
    <br />
    <br />
    <JsonDiff
      oldJson={{
        a: 1,
        b: 2,
        c: 4,
        d: ["hello", "world"],
        nested: { e: 5, f: 6, h: ["goodbye", "world"], i: 8 },
      }}
      currentJson={{
        a: 1,
        b: 2,
        c: 3,
        d: ["hello", "everyone"],
        nested: { e: 5, f: 6, g: 7, h: ["goodbye", "everyone"] },
      }}
      isHidden={true} // set to true to hide unchanged fields, false to show all fields
    />
    </>
  );
}

export default App;
