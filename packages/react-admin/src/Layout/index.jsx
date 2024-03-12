import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Tabs from "./Tabs";
import Bottom from "./Bottom";
import Routes from "../router";
import "./index.scss";

export default function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <div className="center">
          <LeftMenu />
          <div className="right">
            <Tabs></Tabs>
            <div className="content">
              <Routes></Routes>
            </div>
          </div>
        </div>
        <Bottom></Bottom>
      </BrowserRouter>
    </div>
  );
}
