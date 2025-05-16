export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          About <span className="text-purple-400">UWI-GPT</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          UWI-GPT is your intelligent academic assistant, supporting students and faculty with AI-powered guidance and mental wellness tools at The University of the West Indies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#111] p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">🎓 Our Mission</h2>
          <p className="text-gray-400">
            Empower every student through personalized AI tools that enhance academic success and well-being bridging gaps in access and support.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">💡 What We Do</h2>
          <p className="text-gray-400">
            UWI-GPT provides instant academic support, mental health suggestions, and tailored advice, using real-time context-aware AI built for student success.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">🤝 Our Values</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Accessibility for all learners</li>
            <li>Empowerment through knowledge</li>
            <li>Data trust & privacy</li>
            <li>Innovation in Caribbean education</li>
          </ul>
        </div>

        <div className="bg-[#111] p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">🌍 Built for UWI</h2>
          <p className="text-gray-400">
            Created with UWI students in mind, localized for regional relevance, structured for Caribbean curricula, and tuned to reflect our vibrant academic culture.
          </p>
        </div>
      </div>
    </section>
  );
}
