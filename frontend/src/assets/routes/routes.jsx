import Dashboard from "../../components/admin/Dashboard.jsx";
import Profile from "../../components/admin/Profile.jsx";

const routes = [
  { path: '', exact: true, name: 'Admin' }, // Changed from '/admin' to ''
  { path: 'dashboard', exact: true, name: 'Dashboard', component: Dashboard }, // Changed from '/admin/dashboard' to 'dashboard'
  { path: 'profile', exact: true, name: 'Profile', component: Profile }, // Changed from '/admin/profile' to 'profile'
];

export default routes;