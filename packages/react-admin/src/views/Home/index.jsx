import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Home = observer(({ theme, userInfo }) => {
  return (
    <div
      onClick={() => {
        theme.setValue("light");
      }}
    >
      <Outlet></Outlet>
      {theme.value}
      <div
        onClick={() => {
          userInfo.setValue({ name: "ls", age: 19, gender: "woman" });
        }}
      >
        {userInfo.value.name}
        {userInfo.value.age}
        {userInfo.value.gender}
      </div>
    </div>
  );
});

// const Home = () => {
//   return <div>22</div>;
// };

export default Home;
