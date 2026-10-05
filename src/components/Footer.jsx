import { Link } from "react-router-dom";

function Footer({
  isLoggedIn,
  onLogout,
}) {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div>

            <h2 className="text-xl font-bold">
              🎓 LearnHub
            </h2>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Online Learning (E-Learning) Web Application
              designed to help students learn, practice,
              track progress and achieve their goals.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/courses"
                className="text-gray-400 hover:text-white transition"
              >
                Courses
              </Link>

              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-white transition"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="text-gray-400 hover:text-white transition"
              >
                Profile
              </Link>

            </div>

          </div>

          {/* Account */}
          <div>

            <h3 className="font-semibold mb-4">
              Account
            </h3>

            {!isLoggedIn ? (
              <Link
                to="/login"
                className="inline-block px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={onLogout}
                className="px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}

            <p className="text-gray-500 text-sm mt-4">
              Learn • Practice • Track • Achieve
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 LearnHub. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Scenario 7 – Online Learning (E-Learning) Web Application
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;