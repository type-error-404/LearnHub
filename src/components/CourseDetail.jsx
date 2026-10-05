import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Enrollment from "./Enrollment";
import Quiz from "./Quiz";
import Assignment from "./Assignment";
import Certificate from "./Certificate";

const TABS = [
  "Overview",
  "Quiz",
  "Assignment",
  "Certificate",
];

function CourseDetail({
  courses,
  enrolledCourseIds,
  progressMap,
  quizScores,
  assignmentStatus,
  studentInfo,
  onEnroll,
  onUpdateProgress,
  onSubmitQuiz,
  onSubmitAssignment,
}) {
  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  const [activeTab, setActiveTab] =
    useState("Overview");

  const [currentLesson, setCurrentLesson] =
    useState(0);

  const isEnrolled =
    enrolledCourseIds.includes(Number(id));

  const progress =
    progressMap[id] || 0;

  const quizScore =
    quizScores[id];

  const assignmentData =
    assignmentStatus[id] || {};

  const assignment =
    typeof assignmentData === "string"
      ? assignmentData
      : assignmentData.status || "Not Submitted";

  const certificateEligible = useMemo(() => {
    return (
      progress >= 100 &&
      (quizScore || 0) >= 70 &&
      assignment === "submitted"
    );
  }, [
    progress,
    quizScore,
    assignment,
  ]);

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">

        <p className="text-lg text-gray-600">
          Course not found.
        </p>

        <Link
          to="/courses"
          className="text-primary-600 font-semibold"
        >
          ← Back to courses
        </Link>

      </div>
    );
  }

  const lesson =
    course.lessons[currentLesson];

  const markLessonComplete = () => {
    const newProgress = Math.min(
      100,
      Math.round(
        ((currentLesson + 1) /
          course.lessons.length) *
          100
      )
    );

    onUpdateProgress(
      course.id,
      newProgress
    );
  };

  const nextLesson = () => {
    if (
      currentLesson <
      course.lessons.length - 1
    ) {
      setCurrentLesson(
        currentLesson + 1
      );
    }
  };

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(
        currentLesson - 1
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Back */}

      <Link
        to="/courses"
        className="text-sm text-primary-600 font-medium"
      >
        ← Back to courses
      </Link>

      {/* Course Header */}

      <div className="mt-3">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {course.title}
        </h1>

        <p className="text-gray-500 mt-1">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">

          <span>
            ⭐ {course.rating}
          </span>

          <span>
            💬 {course.reviewCount} reviews
          </span>

          <span>
            👥 {course.enrolledCount} students
          </span>

          <span>
            ⏱ {course.duration}
          </span>

          <span>
            👨‍🏫 {course.instructor}
          </span>

          <span>
            🏷 {course.category}
          </span>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

        <div className="lg:col-span-2">

          {/* Tabs */}

          <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">

            {TABS.map((tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === tab
                    ? "border-primary-600 text-primary-700"
                    : "border-transparent text-gray-500"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>

          {/* ========================= */}
          {/* OVERVIEW */}
          {/* ========================= */}

          {activeTab === "Overview" && (

            isEnrolled ? (

              /* ========================= */
              /* ENROLLED USER - LESSONS */
              /* ========================= */

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Course Content
                </h3>

                {/* Lesson */}

                <div className="border rounded-xl overflow-hidden">

                  <div className="bg-gray-50 px-4 py-4">

                    <div className="flex justify-between items-center">

                      <div>

                        <p className="text-sm text-gray-500">
                          Lesson{" "}
                          {currentLesson + 1} of{" "}
                          {course.lessons.length}
                        </p>

                        <h4 className="text-lg font-semibold mt-1">
                          {lesson.type === "video"
                            ? "🎬 "
                            : "📄 "}
                          {lesson.title}
                        </h4>

                      </div>

                      <span className="text-sm text-gray-500">
                        {lesson.duration}
                      </span>

                    </div>

                  </div>

                  {/* Lesson Content */}

                  <div className="p-4 space-y-4">

                    {lesson.type === "video" &&
                      lesson.videoUrl && (

                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">

                          <iframe
                            src={lesson.videoUrl}
                            title={lesson.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />

                        </div>

                      )}

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {lesson.content}
                    </p>

                    {lesson.notes && (

                      <div className="text-sm bg-primary-50 text-primary-800 rounded-lg px-4 py-3">

                        📝{" "}
                        <span className="font-semibold">
                          Note:
                        </span>{" "}
                        {lesson.notes}

                      </div>

                    )}

                    <button
                      onClick={
                        markLessonComplete
                      }
                      className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-semibold"
                    >
                      ✓ Mark Lesson Complete
                    </button>

                  </div>

                </div>

                {/* Previous / Next */}

                <div className="flex justify-between mt-5">

                  <button
                    onClick={previousLesson}
                    disabled={
                      currentLesson === 0
                    }
                    className="px-5 py-2.5 rounded-xl border font-semibold disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  {currentLesson <
                  course.lessons.length - 1 ? (

                    <button
                      onClick={nextLesson}
                      className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
                    >
                      Next →
                    </button>

                  ) : (

                    <button
                      onClick={() =>
                        onUpdateProgress(
                          course.id,
                          100
                        )
                      }
                      className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold"
                    >
                      Complete Course
                    </button>

                  )}

                </div>

                {/* Progress */}

                <div className="mt-7">

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-gray-600">
                      Your Progress
                    </span>

                    <span className="font-semibold text-primary-700">
                      {progress}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-primary-600 transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Student Reviews */}

                <div className="mt-8 border-t border-gray-200 pt-6">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

                    <div>

                      <h3 className="text-xl font-bold text-gray-900">
                        Student Reviews
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        See what students think about this course.
                      </p>

                    </div>

                    <div className="text-left sm:text-right">

                      <p className="text-2xl font-bold text-gray-900">
                        ⭐ {course.rating}
                      </p>

                      <p className="text-sm text-gray-500">
                        {course.reviewCount} reviews
                      </p>

                      <p className="text-sm text-gray-500">
                        {course.enrolledCount} students enrolled
                      </p>

                    </div>

                  </div>

                  <div className="space-y-4">

                    {course.reviews?.length > 0 ? (

                      course.reviews.map(
                        (review, index) => (

                          <div
                            key={index}
                            className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition"
                          >

                            <div className="flex items-center justify-between gap-3">

                              <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                                  {review.name.charAt(0)}
                                </div>

                                <div>

                                  <p className="font-semibold text-gray-900">
                                    {review.name}
                                  </p>

                                  <p className="text-xs text-gray-500">
                                    Student
                                  </p>

                                </div>

                              </div>

                              <span className="text-sm">
                                {"⭐".repeat(review.rating)}
                              </span>

                            </div>

                            <p className="text-sm text-gray-600 mt-3">
                              "{review.comment}"
                            </p>

                          </div>

                        )
                      )

                    ) : (

                      <p className="text-sm text-gray-500 text-center py-5">
                        No reviews available yet.
                      </p>

                    )}

                  </div>

                </div>

              </div>

            ) : (

              /* ========================= */
              /* NOT ENROLLED */
              /* ========================= */

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

                <div className="text-center">

                  <div className="text-5xl mb-4">
                    🔒
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Enroll to Access This Course
                  </h3>

                  <p className="text-gray-500 mt-2 max-w-lg mx-auto">
                    You need to enroll in this course
                    before you can access the lessons,
                    videos, learning materials, quizzes,
                    assignments, and certificate.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">

                    <button
                      onClick={() =>
                        onEnroll(course.id)
                      }
                      className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
                    >
                      Enroll Now
                    </button>

                    <span className="text-sm text-gray-500">
                      👥 {course.enrolledCount} students enrolled
                    </span>

                  </div>

                </div>

                {/* Preview Information */}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">

                  <div className="bg-gray-50 rounded-xl p-3 text-center">

                    <p className="text-xs text-gray-500">
                      Rating
                    </p>

                    <p className="font-semibold mt-1">
                      ⭐ {course.rating}
                    </p>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 text-center">

                    <p className="text-xs text-gray-500">
                      Reviews
                    </p>

                    <p className="font-semibold mt-1">
                      💬 {course.reviewCount}
                    </p>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 text-center">

                    <p className="text-xs text-gray-500">
                      Students
                    </p>

                    <p className="font-semibold mt-1">
                      👥 {course.enrolledCount}
                    </p>

                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 text-center">

                    <p className="text-xs text-gray-500">
                      Duration
                    </p>

                    <p className="font-semibold mt-1">
                      ⏱ {course.duration}
                    </p>

                  </div>

                </div>

                {/* Reviews Preview */}

                <div className="mt-8 border-t border-gray-200 pt-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    Student Reviews
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 mb-5">
                    See what students think about this course.
                  </p>

                  <div className="space-y-4">

                    {course.reviews?.map(
                      (review, index) => (

                        <div
                          key={index}
                          className="border border-gray-200 rounded-xl p-4"
                        >

                          <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                                {review.name.charAt(0)}
                              </div>

                              <div>

                                <p className="font-semibold text-gray-900">
                                  {review.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                  Student
                                </p>

                              </div>

                            </div>

                            <span className="text-sm">
                              {"⭐".repeat(review.rating)}
                            </span>

                          </div>

                          <p className="text-sm text-gray-600 mt-3">
                            "{review.comment}"
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            )

          )}

          {/* ========================= */}
          {/* QUIZ */}
          {/* ========================= */}

          {activeTab === "Quiz" && (

            isEnrolled ? (

              <Quiz
                course={course}
                onSubmitQuiz={
                  onSubmitQuiz
                }
                existingScore={
                  quizScores[id]
                }
              />

            ) : (

              <EnrollPrompt />

            )

          )}

          {/* ========================= */}
          {/* ASSIGNMENT */}
          {/* ========================= */}

          {activeTab === "Assignment" && (

            isEnrolled ? (

              <Assignment
                course={course}
                onSubmitAssignment={
                  onSubmitAssignment
                }
                existingStatus={
                  assignmentStatus[id]
                }
              />

            ) : (

              <EnrollPrompt />

            )

          )}

          {/* ========================= */}
          {/* CERTIFICATE */}
          {/* ========================= */}

          {activeTab === "Certificate" && (

            isEnrolled ? (

              <Certificate
                course={course}
                studentName={
                  studentInfo?.name ||
                  "Student"
                }
                eligible={
                  certificateEligible
                }
              />

            ) : (

              <EnrollPrompt />

            )

          )}

        </div>

        {/* ========================= */}
        {/* ENROLLMENT */}
        {/* ========================= */}

        <div>

          <Enrollment
            course={course}
            isEnrolled={isEnrolled}
            onEnroll={onEnroll}
          />

        </div>

      </div>

    </div>
  );
}

function EnrollPrompt() {
  return (
    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 text-center text-gray-500 text-sm">

      🔒 Enroll in this course to access
      quizzes, assignments and certificates.

    </div>
  );
}

export default CourseDetail;