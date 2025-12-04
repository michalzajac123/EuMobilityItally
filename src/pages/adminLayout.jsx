import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
