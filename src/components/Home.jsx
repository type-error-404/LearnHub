import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50">

      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-800 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="min-h-[520px] flex items-center justify-center text-center">

            <div className="max-w-4xl">

              <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
                Scenario 7
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Online Learning
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
                E-Learning Web Application
              </h2>

              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                A simple and interactive learning platform where
                students can access course materials, complete
                quizzes and assignments, track their progress,
                and earn certificates.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

                <Link
                  to="/signup"
                  className="px-7 py-3.5 rounded-xl bg-white text-primary-700 font-bold hover:bg-gray-100 transition shadow-sm"
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="px-7 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white font-bold hover:bg-white/20 transition"
                >
                  Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Our Platform
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Learn, Practice and Achieve
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            LearnHub provides students with an organized learning
            environment to access courses, complete assessments,
            monitor academic progress and receive certificates.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white border rounded-2xl p-7 text-center shadow-sm">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-3xl">
              📚
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5">
              Access Courses
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Browse available courses and access lessons and
              learning materials.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-7 text-center shadow-sm">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-3xl">
              📊
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5">
              Track Progress
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Monitor course completion, quiz scores and
              assignment submission status.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-7 text-center shadow-sm">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-3xl">
              🎓
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-5">
              Earn Certificates
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Complete the required learning activities and
              receive your course certificate.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;