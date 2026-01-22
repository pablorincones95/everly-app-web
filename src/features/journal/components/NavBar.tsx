export const NavBar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <nav className="journal-navbar">
      <div className="flex items-center justify-between h-full  w-full">
        <button
          className="xl:hidden text-gray-600 hover:text-gray-800"
          onClick={onMenuClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center justify-between w-full pl-2">
          <p className="text-color-primary font-bold">Journal App</p>
          <button className="text-red-600 hover:text-red-800">Logout</button>
        </div>
      </div>
    </nav>
  );
};
