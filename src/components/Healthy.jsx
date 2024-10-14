function Healthy() {
  return (
    <div className="relative my-10">
      <h2 className="text-green-700 text-2xl mb-3 px-10 lg:text-3xl font-medium">
        Living in a Healthy Environment
      </h2>
      <div className="flex flex-col px-10 pb-10 justify-center items-center relative my-4  mb-4 md:px-10 xl:px-40">
        <div className="bg-green-600 mb-6 px-6 py-4 md:mx-10 rounded-lg">
          <p className="text-white text-left text-md lg:text-lg xl:text-xl">
            Living in a healthy environment is a primordial need of living species. We must recognize that all necessities to fulfill our basic needs is provided by the nature. It is evident to determine the balance between the use of natural resources and our increasing daily needs, because any incoherence with will merely complicate thinks than simplify them.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center relative md:flex-row justify-between items-center md:px-10">
          <div className="mb-4 md:w-1/2 md:px-5">
            <img src="./healthy.jpg" alt="healthy" className="rounded-lg" />
          </div>
          <div className="md:mb-4 md:w-1/2 md:px-5">
            <img src="./healthy1.jpg" alt="healthy1" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Healthy;
