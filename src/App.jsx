import { useCallback, useEffect, useState } from "react";

import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import LearningDashboard from "./components/LearningDashboard";
import StudentProfile from "./components/StudentProfile";
import ProtectedRoute from "./components/ProtectedRoute";

import { COURSES } from "./data/courses";

function App() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [student, setStudent] = useState({
    name: localStorage.getItem("studentName") || "",
    email: localStorage.getItem("studentEmail") || "",
  });

  const [enrolledCourseIds, setEnrolledCourseIds] =
    useState(
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || []
    );

  const [progressMap, setProgressMap] =
    useState(
      JSON.parse(
        localStorage.getItem("progressMap")
      ) || {}
    );

  const [quizScores, setQuizScores] =
    useState(
      JSON.parse(
        localStorage.getItem("quizScores")
      ) || {}
    );

  const [assignmentStatus, setAssignmentStatus] =
    useState(
      JSON.parse(
        localStorage.getItem("assignmentStatus")
      ) || {}
    );

  useEffect(() => {
    setCourses(COURSES);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourseIds)
    );
  }, [enrolledCourseIds]);

  useEffect(() => {
    localStorage.setItem(
      "progressMap",
      JSON.stringify(progressMap)
    );
  }, [progressMap]);

  useEffect(() => {
    localStorage.setItem(
      "quizScores",
      JSON.stringify(quizScores)
    );
  }, [quizScores]);

  useEffect(() => {
    localStorage.setItem(
      "assignmentStatus",
      JSON.stringify(assignmentStatus)
    );
  }, [assignmentStatus]);

  const handleLogin = (user) => {
    setStudent(user);

    localStorage.setItem(
      "studentName",
      user.name
    );

    localStorage.setItem(
      "studentEmail",
      user.email
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentEmail");

    setStudent({
      name: "",
      email: "",
    });

    navigate("/");
  };

  const enrollCourse = useCallback((courseId) => {
    setEnrolledCourseIds((prev) => {
      if (prev.includes(courseId)) {
        return prev;
      }

      return [...prev, courseId];
    });
  }, []);

  const updateProgress = useCallback(
    (courseId, progress) => {
      setProgressMap((prev) => ({
        ...prev,
        [courseId]: Math.max(
          prev[courseId] || 0,
          progress
        ),
      }));
    },
    []
  );

  const submitQuiz = useCallback(
    (courseId, score) => {
      setQuizScores((prev) => ({
        ...prev,
        [courseId]: score,
      }));
    },
    []
  );

  const submitAssignment = useCallback(
    (courseId, fileName) => {
      setAssignmentStatus((prev) => ({
        ...prev,
        [courseId]: {
          status: "submitted",
          fileName: fileName,
        },
      }));
    },
    []
  );

  const isLoggedIn = !!student.name;

  return (
    <div className="min-h-screen flex flex-col">

      <Header
        enrolledCount={enrolledCourseIds.length}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <main className="flex-1">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SIGN UP */}
          <Route
            path="/signup"
            element={<SignUp />}
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={
              <Login
                onLogin={handleLogin}
              />
            }
          />

          {/* COURSES */}
          <Route
            path="/courses"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <CourseList
                  courses={courses}
                  enrolledCourseIds={
                    enrolledCourseIds
                  }
                  searchTerm={searchTerm}
                  setSearchTerm={
                    setSearchTerm
                  }
                />
              </ProtectedRoute>
            }
          />

          {/* COURSE DETAILS */}
          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <CourseDetail
                  courses={courses}
                  enrolledCourseIds={
                    enrolledCourseIds
                  }
                  progressMap={progressMap}
                  quizScores={quizScores}
                  assignmentStatus={
                    assignmentStatus
                  }
                  studentInfo={student}
                  onEnroll={enrollCourse}
                  onUpdateProgress={
                    updateProgress
                  }
                  onSubmitQuiz={submitQuiz}
                  onSubmitAssignment={
                    submitAssignment
                  }
                />
              </ProtectedRoute>
            }
          />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <LearningDashboard
                  courses={courses}
                  enrolledCourseIds={
                    enrolledCourseIds
                  }
                  progressMap={progressMap}
                  quizScores={quizScores}
                  assignmentStatus={
                    assignmentStatus
                  }
                />
              </ProtectedRoute>
            }
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <StudentProfile
                  enrolledCourseIds={
                    enrolledCourseIds
                  }
                />
              </ProtectedRoute>
            }
          />

        </Routes>

      </main>

      <Footer
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

    </div>
  );
}

export default App;