function Enrollment({ course, isEnrolled, onEnroll }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-20">
      <div className="text-4xl font-bold text-primary-700 mb-1">
        {course.price === 0 ? "Free" : `₹${course.price}`}
      </div>
      <p className="text-sm text-gray-500 mb-4">One-time payment · lifetime access</p>

      {isEnrolled ? (
        <button
          disabled
          className="w-full py-3 rounded-xl bg-green-100 text-green-700 font-semibold cursor-default"
        >
          ✅ Already Enrolled
        </button>
      ) : (
        <button
          onClick={() => onEnroll(course.id)}
          className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
        >
          Enroll Now
        </button>
      )}

      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        <li>📘 {course.lessons.length} lessons</li>
        <li>⏱ {course.duration} total</li>
        <li>🏆 Certificate on completion</li>
        <li>👨‍🏫 Instructor: {course.instructor}</li>
      </ul>
    </div>
  );
}

export default Enrollment;
