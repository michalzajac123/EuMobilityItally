import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export { AdminLayout as Component };
export default AdminLayout;
