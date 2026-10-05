import {
  CATEGORIES,
  DIFFICULTIES,
  COURSES
} from "../data/courses";

function FilterPanel({
  category,
  difficulty,
  duration,
  instructor,
  onCategoryChange,
  onDifficultyChange,
  onDurationChange,
  onInstructorChange
}) {
  const durations = [
    "All",
    ...new Set(COURSES.map((course) => course.duration))
  ];

  const instructors = [
    "All",
    ...new Set(COURSES.map((course) => course.instructor))
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300"
      >
        {CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Categories" : item}
          </option>
        ))}
      </select>

      <select
        value={difficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
        className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300"
      >
        {DIFFICULTIES.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Levels" : item}
          </option>
        ))}
      </select>

      <select
        value={duration}
        onChange={(e) => onDurationChange(e.target.value)}
        className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300"
      >
        {durations.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Durations" : item}
          </option>
        ))}
      </select>

      <select
        value={instructor}
        onChange={(e) => onInstructorChange(e.target.value)}
        className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300"
      >
        {instructors.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Instructors" : item}
          </option>
        ))}
      </select>

    </div>
  );
}

export default FilterPanel;