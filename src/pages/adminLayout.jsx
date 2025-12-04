import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div>
      <main className="pt-14 sm:pt-16 md:pt-18">
        <Outlet />
      </main>
    </div>
  );
}
