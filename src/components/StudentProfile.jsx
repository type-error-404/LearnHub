import { useState } from "react";

function StudentProfile({ enrolledCourseIds }) {
  const [studentName, setStudentName] = useState(
    localStorage.getItem("studentName") || ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("studentEmail") || ""
  );

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    localStorage.setItem(
      "studentName",
      studentName.trim()
    );

    localStorage.setItem(
      "studentEmail",
      email.trim()
    );

    setSaved(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="bg-white border rounded-2xl shadow-sm p-6 sm:p-8">

        {/* Profile Header */}
        <div className="text-center mb-8">

          <div className="w-24 h-24 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-5xl">
            👩‍🎓
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5">
            {studentName || "Student Profile"}
          </h1>

          <p className="text-gray-500 mt-1">
            Student
          </p>

        </div>

        {/* Profile Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block text-sm font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              value={studentName}
              onChange={(e) =>
                setStudentName(e.target.value)
              }
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary-100"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary-100"
            />

          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700"
          >
            Save Profile
          </button>

        </form>

        {saved && (
          <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold">
              ✓ Profile saved successfully
            </p>
          </div>
        )}

        {/* Profile Summary */}
        <div className="border-t mt-8 pt-7">

          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Profile Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Name
              </p>

              <p className="font-semibold mt-1">
                {studentName || "Not provided"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-semibold mt-1">
                {email || "Not provided"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Role
              </p>

              <p className="font-semibold mt-1">
                Student
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Enrolled Courses
              </p>

              <p className="font-semibold mt-1">
                {enrolledCourseIds.length}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentProfile;