import { useState } from "react";

function Assignment({
  course,
  onSubmitAssignment,
  existingStatus,
}) {
  const [file, setFile] = useState(null);

  const [submitted, setSubmitted] = useState(
    existingStatus === "submitted"
  );

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file.");
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload your project PDF.");
      return;
    }

    setSubmitted(true);

    onSubmitAssignment(
      course.id,
      file.name
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-2xl p-6"
    >

      <h3 className="text-xl font-bold mb-2">
        Project Assignment
      </h3>

      <p className="text-gray-500 mb-5">
        Upload your completed project PDF for{" "}
        <b>{course.title}</b>.
      </p>

      {!submitted ? (

        <>

          <label className="block text-sm font-semibold mb-2">
            Select Project PDF
          </label>

          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="w-full border rounded-xl p-3"
          />

          {file && (
            <div className="mt-4 bg-gray-50 rounded-xl p-4">
              <p className="text-sm">
                Selected File:
              </p>

              <p className="font-semibold">
                📄 {file.name}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="mt-5 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold"
          >
            Submit Project PDF
          </button>

        </>

      ) : (

        <div className="bg-green-50 border border-green-200 rounded-xl p-5">

          <p className="text-green-700 font-bold text-lg">
            ✓ Project Submitted Successfully
          </p>

          {file && (
            <p className="text-sm text-green-700 mt-2">
              📄 {file.name}
            </p>
          )}

        </div>

      )}

    </form>
  );
}

export default Assignment;