const CTA = () => {
  return (
    <section className="gradient-bg py-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Didn’t find your role?
      </h2>
      <p className="text-slate-400 mb-6">
        We’re always looking for passionate people. Send us your profile and
        we’ll get in touch.
      </p>
      <a
        href="form"
        target="_blank"
        className="gradient-btn px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg"
      >
        Submit Application
      </a>
    </section>
  );
};

export default CTA;
