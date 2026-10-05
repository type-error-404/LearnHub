
import { useNavigate } from "react-router-dom";

const difficultyColor = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-red-100 text-red-700",
};


function CourseCard({ course, isEnrolled }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${course.id}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
    >
      <div className="h-32 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-5xl">
        {course.thumbnail}
      </div>

      <div className="p-4 flex flex-col flex-1">

        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              difficultyColor[course.difficulty]
            }`}
          >
            {course.difficulty}
          </span>

          {isEnrolled && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary-100 text-primary-700">
              Enrolled
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {course.instructor}
        </p>

        <p className="text-sm text-gray-500 line-clamp-2 mt-2">
          {course.description}
        </p>

        {/* Rating and course information */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">

          <div className="bg-gray-50 rounded-lg px-3 py-2">
            <p className="text-gray-400 text-xs">
              Rating
            </p>

            <p className="font-semibold text-gray-700">
              ⭐ {course.rating}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg px-3 py-2">
            <p className="text-gray-400 text-xs">
              Reviews
            </p>

            <p className="font-semibold text-gray-700">
              💬 {course.reviewCount}
            </p>
          </div>

        </div>

        {/* Members enrolled */}
        <div className="mt-3 bg-primary-50 rounded-xl px-3 py-2.5">
          <p className="text-sm font-semibold text-primary-700">
            👥 {course.enrolledCount} students enrolled
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            ⏱ {course.duration}
          </span>

          <span className="font-semibold text-primary-700">
            {course.price === 0
              ? "Free"
              : `₹${course.price}`}
          </span>
        </div>

      </div>
    </div>
  );
}

export default CourseCard;

