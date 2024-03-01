import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

const Home = observer(({ myName }) => {
  return (
    <div
      onClick={() => {
        myName.setName("ls");
      }}
    >
      {myName.name}
    </div>
  );
});

// const Home = () => {
//   return <div>22</div>;
// };

export default Home;
