const PartnersSection = () => {
  return (
    <section className="py-15 lg:py-20">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-16">
          合作推廣單位
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <a
            href="http://www.mbha.org.tw/index_tw.php"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/assets/image/logo.png"
              alt="MBHA Logo"
              className="h-20 object-contain"
            />
          </a>
          <a
            href="https://www.promise-clinic.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/assets/image/logo-horizontal-1.png"
              alt="Promise Clinic Logo"
              className="h-20 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
