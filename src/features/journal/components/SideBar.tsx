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
                className=" text-menu-item block px-4 py-2 text-sm rounded-lg"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-menu-item block px-4 py-2 text-sm rounded-lg"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-menu-item block px-4 py-2 text-sm rounded-lg"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-menu-item block px-4 py-2 text-sm rounded-lg"
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
