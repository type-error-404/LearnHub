
import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
      alert("Please sign up first.");
      navigate("/signup");
      return;
    }

    if (
      email.trim() !== registeredUser.email ||
      password !== registeredUser.password
    ) {
      alert("Invalid email or password.");
      return;
    }

    const user = {
      name: registeredUser.name,
      email: registeredUser.email,
    };

    localStorage.setItem(
      "studentName",
      user.name
    );

    localStorage.setItem(
      "studentEmail",
      user.email
    );

    onLogin(user);

    navigate("/dashboard");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (forgotEmail.trim() !== registeredUser.email) {
      alert("Email address not found.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      alert("Please enter the new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const updatedUser = {
      ...registeredUser,
      password: newPassword,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedUser)
    );

    alert("Password changed successfully. Please login.");

    setShowForgot(false);
    setForgotEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 bg-gray-50">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">

        {!showForgot ? (
          <>
            <div className="text-center mb-8">

              <div className="w-20 h-20 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-4xl">
                🎓
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5">
                Student Login
              </h1>

              <p className="text-gray-500 mt-2">
                Login to continue your learning journey
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowForgot(true)}
                  className="text-sm text-primary-600 font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
              >
                Login
              </button>

            </form>

            <p className="text-center text-sm text-gray-500 mt-6">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-primary-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>

            </p>

            <div className="text-center mt-4">

              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-primary-600"
              >
                ← Back to Home
              </Link>

            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">

              <div className="w-20 h-20 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-4xl">
                🔐
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5">
                Forgot Password
              </h1>

              <p className="text-gray-500 mt-2">
                Create a new password for your account
              </p>

            </div>

            <form
              onSubmit={handleForgotPassword}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Registered Email
                </label>

                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) =>
                    setForgotEmail(e.target.value)
                  }
                  placeholder="Enter your registered email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
              >
                Reset Password
              </button>

            </form>

            <div className="text-center mt-6">

              <button
                type="button"
                onClick={() => setShowForgot(false)}
                className="text-sm text-primary-600 font-semibold hover:underline"
              >
                ← Back to Login
              </button>

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default Login;
