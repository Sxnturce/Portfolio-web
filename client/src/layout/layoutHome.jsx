import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function layoutHome() {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto max-w-[1400px] flex flex-col gap-16 lg:max-w-[1200px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default layoutHome;
