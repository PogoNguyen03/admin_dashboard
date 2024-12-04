// src/layouts/Layout.tsx

import Header from "./header"; // Import Header component
import Footer from "./footer"; // Import Footer component
import Navbar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main> {/* Render nội dung trang */}
      <Footer />
    </div>
  );
};

export default Layout;
