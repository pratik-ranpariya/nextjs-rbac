import Leftbar from "@/components/Leftbar/Leftbar";
import Topbar from "@/components/Topbar/Topbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Leftbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
       <Topbar />

        {/* Page Content */}
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
