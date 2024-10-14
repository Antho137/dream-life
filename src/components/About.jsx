function About() {
  return (
    <div className="relative mt-20 pt-6 lg:px-20 xl:px-40">
      <div className="relative bg-slate-300 mb-6 flex flex-col py-10 px-10 md:flex-row justify-between items-center">
        <div className="pb-4 md:w-1/2 md:px-10">
          <h1 className="text-blue-900 underline text-3xl lg:text-4xl font-medium mb-3">
            About Us
          </h1>
          <p className="text-2xl lg:text-3xl lg:px-5">
          Our mission is to bring motivation and encouragement to those still indifferents about one of the critical problems in the world which is environment crisis.
          </p>
        </div>
        <div className="md:w-1/2 md:px-10">
          <img src="./development.jpg" className="mb-1 p-1 rounded-lg" alt="Development" />
        </div>
      </div>
      <div className="my-8 mx-10 md:mx-20 rounded-lg">
        <p className="bg-green-600 p-6 pb-8 rounded-lg text-white text-xl lg:text-2xl font-normal">
        Today no one can deny the evidence of global warming. The evidence of extreme weather events is something real nowadays. Then, no one is safe from environment harm.
        </p>
      </div>
      <div className="my-8 mx-10 md:mx-20">
        <p className="bg-slate-300 p-6 pb-8 rounded-lg text-blue-900 text-xl lg:text-2xl font-normal">
        We would like each one to reflect seriously about the future of the humanity. If nothing is done now, when it will be? Please, do not put off what you can do today for tomorrow.
        </p>
      </div>
      <div className="my-8 mx-10 md:mx-20 rounded-lg">
        <p className="bg-blue-900 p-6 pb-8 rounded-lg text-white text-xl lg:text-2xl font-normal">
        Overcoming the challenge of Environment troubles is possible only if its causes are taken into account. And one of them is the overuse of environment resources to produce goods.
        </p>
      </div>
      <div className="flex flex-col my-20 px-10 sm:flex-row gap-5 justify-center items-center md:px-20 xl:px-5 xl:my-10">
        <img src="./healthy01.png" className="mb-2 w-60 sm:w-[130px] md:w-40 lg:w-[220px] xl:w-60 rounded-lg" alt="Healthy 01" />
        <img src="./healthy11.jpg" className="mb-2 w-60 sm:w-[130px] md:w-40 lg:w-[220px] xl:w-60 rounded-lg" alt="Healthy 11" />
        <img src="./forest.jpg" className="mb-2 w-60 sm:w-[130px] md:w-40 lg:w-[220px] xl:w-60 rounded-lg" alt="Forest" />
        <img src="./clean_power.jpg" className="mb-2 w-60 sm:w-[130px] md:w-40 lg:w-[220px] xl:w-60 rounded-lg" alt="Clean Power" />
      </div>
    </div>
  );
}

export default About;
