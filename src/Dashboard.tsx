

interface DashboardProps {
    onLogout: () => void;
  }
const Dashboard = ({ onLogout }:DashboardProps) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Hi, you logged in!</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;