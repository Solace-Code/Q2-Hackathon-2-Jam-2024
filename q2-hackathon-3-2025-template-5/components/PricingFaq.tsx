const PriceFaq = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto px-6 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black">Pricing FAQs</h2>
        <p className="text-gray-600 mt-2 md:mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-6 md:gap-x-10">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="text-blue-500 font-bold text-lg">&gt;</div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-black">
                  The quick fox jumps over the lazy dog
                </h3>
                <p className="text-gray-600 mt-1 md:mt-2">
                  Met minim Mollie non deserunt Alamo est sit aliqua dolor do
                  amet sint. Relit official consequat door enim relit mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 md:mt-14">
        <p className="text-gray-600 text-sm md:text-base">
          Haven’t got your answer?{" "}
          <a href="#contact" className="text-blue-500 underline">
            Contact our support
          </a>
        </p>
      </div>
    </div>
  );
};

export default PriceFaq;
