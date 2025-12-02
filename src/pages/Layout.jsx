import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
