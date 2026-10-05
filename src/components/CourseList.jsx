import { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import CourseCard from "./CourseCard";

function CourseList({
  courses,
  enrolledCourseIds,
  searchTerm,
  setSearchTerm
}) {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [duration, setDuration] = useState("All");
  const [instructor, setInstructor] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(search) ||
        course.category.toLowerCase().includes(search) ||
        course.difficulty.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" || course.category === category;

      const matchesDifficulty =
        difficulty === "All" || course.difficulty === difficulty;

      const matchesDuration =
        duration === "All" || course.duration === duration;

      const matchesInstructor =
        instructor === "All" || course.instructor === instructor;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesDuration &&
        matchesInstructor
      );
    });
  }, [
    courses,
    searchTerm,
    category,
    difficulty,
    duration,
    instructor
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
        Explore Courses
      </h1>

      <p className="text-gray-500 mb-6">
        Find the right course to level up your skills.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mb-8">

        <div className="md:w-1/2">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <div className="md:w-1/2">
          <FilterPanel
            category={category}
            difficulty={difficulty}
            duration={duration}
            instructor={instructor}
            onCategoryChange={setCategory}
            onDifficultyChange={setDifficulty}
            onDurationChange={setDuration}
            onInstructorChange={setInstructor}
          />
        </div>

      </div>

      {isLoading ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-64 rounded-2xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>

      ) : courses.length === 0 ? (

        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-3">📚</p>
          <p>No courses available</p>
        </div>

      ) : filteredCourses.length === 0 ? (

        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-3">🔎</p>
          <p>No matching courses found</p>
        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isEnrolled={enrolledCourseIds.includes(course.id)}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default CourseList;