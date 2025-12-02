import { Outlet } from "react-router-dom";
import FooterView from "../components/FooterView"
export function Component() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterView></FooterView>
      </footer>
    </div>
  );
}
