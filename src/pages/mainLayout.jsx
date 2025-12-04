import { Outlet } from "react-router-dom";
import FooterView from "../components/FooterView";
import NavbarView from "../components/NavbarView";
export function Component() {
 
  return (
    <div>
      <NavbarView />
      <main className="pt-14 sm:pt-16 md:pt-18">
        <Outlet />
      </main>
      <footer>
        <FooterView></FooterView>
      </footer>
    </div>
  );
}
