import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="site-wrapper">
      <Header hamburgerState={props.hamburgerState} onclick={props.onclick}/>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
