import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <>
    <header>
    <Link to="/"></Link>  
    <nav>
        <Link to="/">Home</Link> 

        <Link to="/login">Login Page</Link> 

        <Link to="/contact">Contact</Link> 
    </nav>
    </header>
      <Outlet />
    </>
  ) };
export default Layout;
