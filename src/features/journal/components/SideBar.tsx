export const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <aside
      className={`journal-sidebar border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } xl:translate-x-0 xl:block`}
    >
      <div className="flex flex-col h-full ">
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-70 hover:bg-gray-100 rounded-md"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
