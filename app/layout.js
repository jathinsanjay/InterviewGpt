import './globals.css'
import SideNavBar from './components/nav';


const Layout = ({ children }) => {
    return (
        <div >
             
           
            <main >{children}</main>
        </div>
    );
};

export default Layout;

