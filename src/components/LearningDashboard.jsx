import { Link } from "react-router-dom";

function LearningDashboard({
  courses,
  enrolledCourseIds,
  progressMap,
  quizScores,
  assignmentStatus,
}) {
  const enrolledCourses = courses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  if (enrolledCourses.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-5xl mb-4">📚</p>

        <h2 className="text-2xl font-bold text-gray-900">
          No Enrolled Courses
        </h2>

        <p className="text-gray-500 mt-2">
          Enroll in a course to start learning.
        </p>

        <Link
          to="/courses"
          className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
        >
          Browse Courses
        </Link>
      </div>
    );
  }

  const completedCourses = enrolledCourses.filter(
    (course) => (progressMap[course.id] || 0) === 100
  ).length;

  const quizzesCompleted = enrolledCourses.filter(
    (course) => quizScores[course.id] !== undefined
  ).length;

  const assignmentsSubmitted = enrolledCourses.filter((course) => {
    const assignment = assignmentStatus[course.id];

    if (typeof assignment === "string") {
      return assignment === "submitted";
    }

    return assignment?.status === "submitted";
  }).length;

  
  const studentHistory = [
    {
      name: "Arun",
      course: "React for Beginners",
      progress: 100,
      quiz: 85,
      assignment: "Submitted",
      certificate: "Available",
    },
    {
      name: "Priya",
      course: "UI/UX Design Principles",
      progress: 100,
      quiz: 92,
      assignment: "Submitted",
      certificate: "Available",
    },
    {
      name: "Kavin",
      course: "Machine Learning Foundations",
      progress: 60,
      quiz: 68,
      assignment: "Not Submitted",
      certificate: "Not Available",
    },
    {
      name: "Rahul",
      course: "Advanced JavaScript Concepts",
      progress: 75,
      quiz: 80,
      assignment: "Submitted",
      certificate: "Not Available",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Page Heading */}

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Learning Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Monitor your learning progress and assessments.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Enrolled Courses
          </p>

          <p className="text-3xl font-bold mt-2">
            {enrolledCourses.length}
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Completed Courses
          </p>

          <p className="text-3xl font-bold mt-2">
            {completedCourses}
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Quizzes Completed
          </p>

          <p className="text-3xl font-bold mt-2">
            {quizzesCompleted}
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Assignments Submitted
          </p>

          <p className="text-3xl font-bold mt-2">
            {assignmentsSubmitted}
          </p>
        </div>

      </div>

      {/* Course Progress Summary */}

      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Course Progress Summary
      </h2>

      <div className="space-y-5">

        {enrolledCourses.map((course) => {
          const progress = progressMap[course.id] || 0;

          const quizScore = quizScores[course.id];

          const assignmentData =
            assignmentStatus[course.id] || {};

          const assignment =
            typeof assignmentData === "string"
              ? assignmentData
              : assignmentData.status || "Not Submitted";

          const certificateAvailable =
            progress === 100 &&
            quizScore !== undefined &&
            quizScore >= 70 &&
            assignment === "submitted";

          return (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="block bg-white border rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer"
            >

              {/* Course Name */}

              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

                <div>

                  <h3 className="text-lg font-semibold text-primary-700">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {course.instructor}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Click to continue course →
                  </p>

                </div>

                <p className="font-semibold text-primary-700">
                  {progress}%
                </p>

              </div>

              {/* Course Information */}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Rating
                  </p>

                  <p className="font-semibold mt-1">
                    ⭐ {course.rating}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Reviews
                  </p>

                  <p className="font-semibold mt-1">
                    💬 {course.reviewCount}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Students
                  </p>

                  <p className="font-semibold mt-1">
                    👥 {course.enrolledCount}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Duration
                  </p>

                  <p className="font-semibold mt-1">
                    ⏱ {course.duration}
                  </p>
                </div>

              </div>

              {/* Progress Bar */}

              <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

                <div
                  className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              {/* Progress Details */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">

                {/* Quiz */}

                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Quiz Result
                  </p>

                  <p className="font-semibold mt-1">
                    {quizScore !== undefined
                      ? `${quizScore}%`
                      : "Not Attempted"}
                  </p>

                  {quizScore !== undefined && (
                    <p
                      className={`text-xs mt-1 ${
                        quizScore >= 70
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {quizScore >= 70
                        ? "Passed"
                        : "Failed"}
                    </p>
                  )}

                </div>

                {/* Assignment */}

                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Assignment Status
                  </p>

                  <p className="font-semibold mt-1">
                    {assignment === "submitted"
                      ? "Submitted ✓"
                      : "Not Submitted"}
                  </p>

                </div>

                {/* Certificate */}

                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Certificate
                  </p>

                  <p className="font-semibold mt-1">
                    {certificateAvailable
                      ? "Available 🎓"
                      : "Not Available"}
                  </p>

                </div>

              </div>

            </Link>
          );
        })}

      </div>

      {/* ========================= */}
      {/* STUDENT COURSE HISTORY */}
      {/* ========================= */}

      <div className="mt-10">

        <div className="mb-5">

          <h2 className="text-xl font-bold text-gray-900">
            Student Course History
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            View course activity and assessment history.
          </p>

        </div>

        <div className="bg-white border rounded-2xl overflow-hidden">

          {/* Desktop Table */}

          <div className="hidden md:block overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Student
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Course
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Progress
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Quiz
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Assignment
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-600">
                    Certificate
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y">

                {studentHistory.map(
                  (student, index) => (

                    <tr
                      key={index}
                      className="hover:bg-gray-50"
                    >

                      <td className="px-5 py-4">

                        <div className="flex items-center gap-3">

                          <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                            {student.name.charAt(0)}
                          </div>

                          <span className="font-semibold text-gray-900">
                            {student.name}
                          </span>

                        </div>

                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {student.course}
                      </td>

                      <td className="px-5 py-4">

                        <div className="flex items-center gap-2">

                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">

                            <div
                              className="h-full bg-primary-600 rounded-full"
                              style={{
                                width: `${student.progress}%`,
                              }}
                            />

                          </div>

                          <span className="text-sm font-semibold">
                            {student.progress}%
                          </span>

                        </div>

                      </td>

                      <td className="px-5 py-4 text-sm font-semibold">
                        {student.quiz}%
                      </td>

                      <td className="px-5 py-4 text-sm">

                        <span
                          className={
                            student.assignment === "Submitted"
                              ? "text-green-600 font-semibold"
                              : "text-gray-500"
                          }
                        >
                          {student.assignment}
                        </span>

                      </td>

                      <td className="px-5 py-4 text-sm">

                        <span
                          className={
                            student.certificate === "Available"
                              ? "text-green-600 font-semibold"
                              : "text-gray-500"
                          }
                        >
                          {student.certificate}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="md:hidden divide-y">

            {studentHistory.map(
              (student, index) => (

                <div
                  key={index}
                  className="p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                      {student.name.charAt(0)}
                    </div>

                    <div>

                      <p className="font-semibold text-gray-900">
                        {student.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {student.course}
                      </p>

                    </div>

                  </div>

                  <div className="mt-4">

                    <div className="flex justify-between text-sm">

                      <span className="text-gray-500">
                        Progress
                      </span>

                      <span className="font-semibold">
                        {student.progress}%
                      </span>

                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full mt-2">

                      <div
                        className="h-full bg-primary-600 rounded-full"
                        style={{
                          width: `${student.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4">

                    <div className="bg-gray-50 rounded-lg p-2">

                      <p className="text-xs text-gray-500">
                        Quiz
                      </p>

                      <p className="text-sm font-semibold mt-1">
                        {student.quiz}%
                      </p>

                    </div>

                    <div className="bg-gray-50 rounded-lg p-2">

                      <p className="text-xs text-gray-500">
                        Assignment
                      </p>

                      <p className="text-xs font-semibold mt-1">
                        {student.assignment}
                      </p>

                    </div>

                    <div className="bg-gray-50 rounded-lg p-2">

                      <p className="text-xs text-gray-500">
                        Certificate
                      </p>

                      <p className="text-xs font-semibold mt-1">
                        {student.certificate}
                      </p>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default LearningDashboard;