import { NavLink, Outlet, useNavigate } from "react-router-dom";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboardContainer">
      <aside className="sidebar">
        <h2>Lost & Found</h2>
        <p className="welcomeText">Welcome {user?.username}</p>

        <nav className="sidebarMenu">
          <NavLink to="report" className="menuLink">
            Report Lost Item
          </NavLink>
          <NavLink to="view" className="menuLink">
            View Lost Items
          </NavLink>
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      <main className="dashboardMain">
        <Outlet />
      </main>
    </div>
  );
}

export default UserDashboard;