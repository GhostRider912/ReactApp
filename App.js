import { useState } from "react";
import Headers from "./Header";
import Mobiles from "./Mobiles";
import Total from "./Total";

function App() {
let [tc,setTc]=useState(0)
let [total,setTotal]=useState(0)
  return (
    <>
      <Headers tc={tc}></Headers>
      <Mobiles setTc={setTc} tc={tc} total={total} setTotal={setTotal}></Mobiles>
      <Total total={total} setTotal={setTotal}></Total>
    </>
  )
}


export default App;
