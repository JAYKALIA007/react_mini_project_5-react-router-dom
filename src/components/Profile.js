import { Link, Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div style={{ border: "1px solid black", margin: "2px" }}>
      <p>Profile component</p>
      <nav>
        <li>
          <Link to="/profile/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile/info">User Info</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};
export default Profile;
