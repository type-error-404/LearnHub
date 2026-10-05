import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Certificate({
  course,
  studentName,
  eligible
}) {
  const downloadCertificate = async () => {
    const certificate =
      document.getElementById("certificate");

    const canvas = await html2canvas(certificate, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff"
    });

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "landscape",
      "mm",
      "a4"
    );

    const width =
      pdf.internal.pageSize.getWidth();

    const height =
      pdf.internal.pageSize.getHeight();

    pdf.addImage(
      image,
      "PNG",
      0,
      0,
      width,
      height
    );

    pdf.save(
      `${course.title}-Certificate.pdf`
    );
  };

  if (!eligible) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">

        <div className="text-6xl mb-4">
          🎓
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Certificate Locked
        </h3>

        <p className="text-gray-500 mt-3 max-w-lg mx-auto">
          Complete the course, score at least
          70% in the quiz, and submit the
          assignment to unlock your certificate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-7">

          <div className="bg-white border rounded-xl p-5">
            <div className="text-3xl">📚</div>
            <p className="font-semibold mt-2">
              Complete Course
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <div className="text-3xl">📝</div>
            <p className="font-semibold mt-2">
              Pass Quiz 70%+
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <div className="text-3xl">📄</div>
            <p className="font-semibold mt-2">
              Submit Assignment
            </p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* ================= CERTIFICATE ================= */}

      <div
        id="certificate"
        className="relative w-full aspect-[297/210] overflow-hidden bg-white"
      >

        {/* ================= OUTER BACKGROUND ================= */}

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-800 to-purple-950" />

        {/* ================= GOLD TOP RIBBON ================= */}

        <div className="absolute -top-20 -left-20 w-[45%] h-40 bg-gradient-to-r from-purple-950 via-purple-700 to-yellow-400 rotate-[-12deg] shadow-xl" />

        <div className="absolute -top-10 -left-10 w-[40%] h-3 bg-yellow-400 rotate-[-12deg]" />

        {/* ================= GOLD BOTTOM RIBBON ================= */}

        <div className="absolute -bottom-24 -right-20 w-[50%] h-48 bg-gradient-to-l from-purple-950 via-purple-700 to-yellow-400 rotate-[-12deg] shadow-xl" />

        <div className="absolute bottom-4 right-0 w-[42%] h-3 bg-yellow-400 rotate-[-12deg]" />

        {/* ================= WHITE CERTIFICATE BODY ================= */}

        <div className="absolute inset-[3%] bg-white overflow-hidden">

          {/* Inner purple border */}
          <div className="absolute inset-3 border-2 border-purple-800 pointer-events-none" />

          {/* Inner gold border */}
          <div className="absolute inset-5 border border-yellow-500 pointer-events-none" />

          {/* ================= DECORATIVE WAVES ================= */}

          <div className="absolute -left-24 top-24 w-80 h-80 rounded-full border-[18px] border-purple-100 opacity-50" />

          <div className="absolute -left-28 top-32 w-80 h-80 rounded-full border-[4px] border-yellow-100 opacity-70" />

          <div className="absolute -right-24 bottom-16 w-80 h-80 rounded-full border-[18px] border-purple-100 opacity-50" />

          <div className="absolute -right-28 bottom-24 w-80 h-80 rounded-full border-[4px] border-yellow-100 opacity-70" />

          {/* ================= CORNER ORNAMENTS ================= */}

          <div className="absolute top-7 left-7 text-yellow-500 text-4xl">
            ❯
          </div>

          <div className="absolute top-7 right-7 text-yellow-500 text-4xl rotate-90">
            ❯
          </div>

          <div className="absolute bottom-7 left-7 text-yellow-500 text-4xl -rotate-90">
            ❯
          </div>

          <div className="absolute bottom-7 right-7 text-yellow-500 text-4xl rotate-180">
            ❯
          </div>

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 h-full flex flex-col items-center text-center px-12 py-7">

            {/* LOGO */}

            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="w-12 h-8 bg-purple-800 rounded-t-lg transform -skew-x-12" />

                <div className="absolute -bottom-3 left-2 w-9 h-4 bg-purple-600 rounded-b-lg" />

                <div className="absolute -right-2 top-1 w-2 h-7 bg-yellow-500 rounded-full" />

              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900 tracking-tight">
                Learn<span className="text-yellow-500">Hub</span>
              </h1>

            </div>

            <p className="text-[10px] tracking-[0.45em] text-purple-700 mt-1">
              LEARN • GROW • ACHIEVE
            </p>

            {/* ================= TITLE ================= */}

            <div className="mt-5">

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-purple-950 tracking-wide">
                CERTIFICATE OF COMPLETION
              </h2>

              <div className="flex items-center justify-center gap-3 mt-2">

                <div className="w-28 h-[2px] bg-yellow-500" />

                <div className="w-3 h-3 bg-yellow-500 rotate-45" />

                <div className="w-28 h-[2px] bg-yellow-500" />

              </div>

            </div>

            {/* ================= PRESENTATION ================= */}

            <p className="mt-5 text-sm text-gray-600">
              This certificate is proudly presented to
            </p>

            {/* STUDENT NAME */}

            <h3 className="mt-1 text-4xl sm:text-5xl font-serif italic font-bold text-purple-900">
              {studentName}
            </h3>

            <div className="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-2" />

            {/* COURSE */}

            <p className="mt-4 text-sm text-gray-600">
              for successfully completing
            </p>

            <h4 className="mt-1 text-2xl sm:text-3xl font-bold text-purple-900">
              {course.title}
            </h4>

            {/* ================= LAUREL ================= */}

            <div className="absolute left-[16%] bottom-[21%] text-purple-200 text-7xl opacity-70">
              ❮
            </div>

            <div className="absolute right-[16%] bottom-[21%] text-purple-200 text-7xl opacity-70 rotate-180">
              ❮
            </div>

            {/* ================= BOTTOM SECTION ================= */}

            <div className="mt-auto mb-3 w-full flex items-end justify-center gap-14">

              {/* Instructor */}

              <div className="w-40">

                <div className="h-[2px] bg-yellow-500 mb-2" />

                <p className="font-bold text-purple-900 text-sm">
                  Instructor
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  {course.instructor}
                </p>

              </div>


              {/* ================= GOLD SEAL ================= */}

              <div className="relative">

                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 p-1 shadow-xl">

                  <div className="w-full h-full rounded-full bg-purple-950 border-2 border-yellow-200 flex flex-col items-center justify-center">

                    <div className="text-3xl">
                      🎓
                    </div>

                    <p className="text-[8px] text-yellow-300 font-bold tracking-widest">
                      VERIFIED
                    </p>

                    <div className="text-yellow-400 text-[9px]">
                      ★ ★ ★
                    </div>

                  </div>

                </div>

                {/* Ribbon */}
                <div className="absolute -bottom-8 left-3 flex">

                  <div className="w-8 h-12 bg-purple-800 transform skew-x-[-12deg]" />

                  <div className="w-8 h-12 bg-purple-700 transform skew-x-[12deg]" />

                </div>

              </div>


              {/* Status */}

              <div className="w-40">

                <div className="h-[2px] bg-yellow-500 mb-2" />

                <p className="font-bold text-purple-900 text-sm">
                  Status
                </p>

                <p className="text-green-600 font-semibold text-xs mt-1">
                  Completed ✓
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= DOWNLOAD ================= */}

      <div className="flex justify-center mt-6">

        <button
          onClick={downloadCertificate}
          className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          📥 Download Certificate PDF
        </button>

      </div>

    </div>
  );
}

export default Certificate;