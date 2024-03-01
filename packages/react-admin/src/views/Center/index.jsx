import { observer } from "mobx-react-lite";

export default observer(({ myName }) => {
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
