import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Outlet />
    </div>
  );
}
export { AdminLayout as Component };
export default AdminLayout;
