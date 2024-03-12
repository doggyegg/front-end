import { observer } from "mobx-react-lite";

export default observer(({ myName }) => {
  return (
    <>
      <div
        onClick={() => {
          theme.setValue("light");
        }}
      >
        {theme.value}
      </div>
      <div
        onClick={() => {
          userInfo.setValue({ name: "ls" });
        }}
      >
        {userInfo.age}
        {userInfo.gender}
        {userInfo.name}
      </div>
    </>
  );
});
