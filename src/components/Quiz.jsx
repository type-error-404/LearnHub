import { useState } from "react";

function Quiz({ course, onSubmitQuiz, existingScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(existingScore || null);

  const question = course.quiz[currentQuestion];

  const handleAnswer = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let correct = 0;

    course.quiz.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correct++;
      }
    });

    return Math.round(
      (correct / course.quiz.length) * 100
    );
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== course.quiz.length) {
      alert("Please answer all questions.");
      return;
    }

    const result = calculateScore();

    setScore(result);
    setSubmitted(true);

    onSubmitQuiz(course.id, result);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion < course.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  return (
    <div className="bg-white border rounded-2xl p-6">

      <h3 className="text-xl font-bold mb-2">
        Course Quiz
      </h3>

      <p className="text-sm text-gray-500 mb-6">
        Question {currentQuestion + 1} of {course.quiz.length}
      </p>

      {!submitted ? (
        <>
          <div className="mb-6">

            <p className="text-lg font-semibold mb-4">
              {currentQuestion + 1}.{" "}
              {question.question}
            </p>

            <div className="grid grid-cols-1 gap-3">

              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`border rounded-xl p-4 cursor-pointer ${
                    answers[currentQuestion] === index
                      ? "border-primary-600 bg-primary-50"
                      : "border-gray-200"
                  }`}
                >

                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    checked={
                      answers[currentQuestion] === index
                    }
                    onChange={() =>
                      handleAnswer(index)
                    }
                    className="mr-3"
                  />

                  {option}

                </label>
              ))}

            </div>

          </div>

          <div className="flex justify-between">

            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-5 py-2.5 rounded-xl border font-semibold disabled:opacity-40"
            >
              ← Previous
            </button>

            {currentQuestion === course.quiz.length - 1 ? (

              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
              >
                Submit Quiz
              </button>

            ) : (

              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
              >
                Next →
              </button>

            )}

          </div>
        </>
      ) : (

        <div>

          <div className="bg-primary-50 rounded-xl p-5">

            <h4 className="text-xl font-bold">
              Quiz Completed
            </h4>

            <p className="text-lg mt-2">
              Your Score: <b>{score}%</b>
            </p>

            {score >= 70 ? (
              <p className="text-green-600 font-semibold mt-2">
                ✓ Quiz Passed
              </p>
            ) : (
              <p className="text-red-600 font-semibold mt-2">
                ✗ Quiz Failed
              </p>
            )}

          </div>

          <h4 className="font-bold mt-6 mb-4">
            Answer Review
          </h4>

          {course.quiz.map((question, index) => {

            const selected = answers[index];

            return (
              <div
                key={index}
                className="border rounded-xl p-4 mb-3"
              >

                <p className="font-semibold">
                  {index + 1}. {question.question}
                </p>

                {selected === question.answer ? (

                  <p className="text-green-600 mt-2">
                    ✓ Correct
                  </p>

                ) : (

                  <div className="mt-2">

                    <p className="text-red-600">
                      ✗ Wrong
                    </p>

                    <p className="text-green-600">
                      Correct Answer:{" "}
                      {question.options[question.answer]}
                    </p>

                  </div>

                )}

              </div>
            );
          })}

          <button
            type="button"
            onClick={handleRetry}
            className="mt-4 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
          >
            Re-attempt Quiz
          </button>

        </div>

      )}

    </div>
  );
}

export default Quiz;