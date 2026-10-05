import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      existingUser &&
      existingUser.email === email.trim()
    ) {
      alert("This email is already registered. Please login.");
      navigate("/login");
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
      password: password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Sign up successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 bg-gray-50">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">

        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-4xl">
            🎓
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5">
            Student Sign Up
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account to start learning
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Student Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-primary-600 font-semibold hover:underline"
          >
            Login
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

      </div>

    </div>
  );
}

export default SignUp;