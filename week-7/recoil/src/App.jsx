import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { countAtom } from "./store/atoms/count";



function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

const Count = () => {
  console.log("Count Component Rendered");
  return (
    <div>
      <Countrender />
      <Buttons />
    </div>
  );
};

const Countrender = () => {
  const count = useRecoilValue(countAtom)
  return(
    <div>
        <b>
          {count}
        </b>
    </div>
  )
};

const Buttons = () => {
 
  return (
    <div>
      <button
        onClick={() => {
         
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
