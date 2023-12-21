import './globals.css'
import SideNavBar from './components/nav';
import { Suspense } from 'react'
import loading from './loading';


const Layout = ({ children }) => {
    return (
      <html >
      <body>
      <Suspense fallback={<p>Loading feed...</p>}>{children} </Suspense></body>
    </html>
    );
};

export default Layout;

