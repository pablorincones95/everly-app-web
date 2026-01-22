import { useState } from "react";
import { NavBar } from "../features/journal/components/NavBar";
import { SideBar } from "../features/journal/components/SideBar";

export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="journal-layout">
      {/* Header */}
      <NavBar onMenuClick={toggleSidebar} />
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} />

      {/* Main content */}
      <main className="journal-main-content overflow-auto">{children}</main>
    </div>
  );
};
