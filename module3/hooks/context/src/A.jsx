import React from "react";
import B from "./B";
import { createContext, useState } from "react";

let context = createContext();

let A = () => {
 let [count, setCount] = useState(0);
  return (
    <context.Provider value={{count,setCount}}>
      <div>
        <B />
      </div>
    </context.Provider>
  );
};

export default A;
export {context};
