import { NavLink } from "react-router-dom";

function Header({
  enrolledCount,
  isLoggedIn,
  onLogout,
}) {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-white text-primary-700"
        : "text-white/90 hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-600 to-primary-700 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <NavLink
            to="/"
            className="flex items-center gap-2 text-white font-bold text-xl"
          >
            <span className="text-2xl">🎓</span>
            <span>LearnHub</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">

            <NavLink
              to="/"
              end
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={navLinkClass}
            >
              Courses
            </NavLink>

            <NavLink
              to="/dashboard"
              className={navLinkClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkClass}
            >
              Profile
            </NavLink>

            {!isLoggedIn ? (
              <NavLink
                to="/login"
                className={navLinkClass}
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={onLogout}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Logout
              </button>
            )}

          </nav>

          <span className="hidden sm:inline-flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            📚 {enrolledCount} Enrolled
          </span>

        </div>

        <nav className="flex md:hidden gap-1 pb-3 overflow-x-auto">

          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={navLinkClass}
          >
            Courses
          </NavLink>

          <NavLink
            to="/dashboard"
            className={navLinkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={navLinkClass}
          >
            Profile
          </NavLink>

          {!isLoggedIn ? (
            <NavLink
              to="/login"
              className={navLinkClass}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10 whitespace-nowrap"
            >
              Logout
            </button>
          )}

        </nav>

      </div>

    </header>
  );
}

export default Header;