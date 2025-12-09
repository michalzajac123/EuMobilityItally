import { Outlet } from "react-router-dom";
import NavbarView from "../components/NavbarView";
import FooterView from "../components/FooterView";

export default function PartnersLayout() {
  return (
    <>
      <NavbarView />
      <main className="pt-20">
        <Outlet />
      </main>
      <FooterView />
    </>
  );
}
