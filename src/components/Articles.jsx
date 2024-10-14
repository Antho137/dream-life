function Articles() {
  return (
    <div className="relative my-20 pt-6 xl:px-40">
      <h1 className="text-left text-blue-900 text-3xl lg:text-4xl pl-10 font-medium">
        Articles
      </h1>
      <h6 className="text-green-900 text-left pl-10 font-medium underline mt-1 mb-6 text-sm">
        <em>By António Sala on 10/10/2024</em>
      </h6>
      <div className="mb-10 flex flex-col px-10 md:flex-row justify-between items-center">
        <div className="text-left md:w-2/3">
          <h2 className="text-green-700 text-2xl lg:text-3xl font-medium mb-3">
            A need for change
          </h2>
          <p className="bg-slate-300 text-blue-900 px-6 pt-3 pb-5 text-md lg:text-lg rounded-lg">
            Climate change is one of the serious problems to solve today in the world. Since some times, we assiste indifferently to its many effects, such as increased temperatures and heavier precipitations at differents area of the globe. As long as, decisions and actions will not be taken seriously to find the solution, the danger will be permanent.
          </p>
        </div>
        <div className="mt-10 md:w-1/3 md:px-10">
          <img src="./climate-change.jpg" className="mb-1 p-1 rounded-lg" alt="Climate change" />
        </div>
      </div>
      <div className="mb-10 flex flex-col px-10 md:flex-row justify-between items-center">
        <div className="text-left md:w-2/3">
          <h2 className="text-green-700 text-2xl lg:text-3xl font-medium mb-3">
            The new energy systems
          </h2>
          <p className="bg-green-600 text-white px-6 pt-3 pb-5 text-md lg:text-lg rounded-lg">
            Solar energy is one of the way to deal with the environment crisis. Instead of continuing to damage our habitat, let this innovation. Renewable energy contribue to reduce the excess of greenhouse gas (GHG) emissions in the Earth atmosphere and is as one of the solutions. The shifting to the new energy systems is imperative.
          </p>
        </div>
        <div className="mt-10 md:w-1/3 md:px-10">
          <img src="./solar-energy.jpg" className="mb-1 p-1 rounded-lg" alt="Solar energy" />
        </div>
      </div>
      <div className="mb-6 flex flex-col px-10 md:flex-row justify-between items-center">
        <div className="text-left md:w-2/3">
          <h2 className="text-green-700 text-2xl lg:text-3xl font-medium mb-3">
          Beyond the limits of Air Pollution
          </h2>
          <p className="bg-slate-300 text-blue-900 px-6 pt-3 pb-5 text-md lg:text-lg rounded-lg">
            The new reality people must now confront is the serious impacts that accompany the excess of air pollution. It is one of the factor that harms the earth and cause million of deaths every year. To limit its continuous spread, concrete actions against must be projected because air pollution is destroying our ecosystem!
          </p>
        </div>
        <div className="mt-10 md:w-1/3 md:px-10">
          <img src="./airpollution.jpg" className="mb-1 p-1 rounded-lg" alt="Air pollution" />
        </div>
      </div>
      <div className="mb-6 flex flex-col px-10 md:flex-row justify-between items-center">
        <div className="text-left md:w-2/3">
          <h2 className="text-green-700 text-2xl lg:text-3xl font-medium mb-3">
            Water Pollution: It is serious!
          </h2>
          <p className="bg-blue-900 text-white px-6 pt-3 pb-5 text-md lg:text-lg rounded-lg">
          The quality of water in the world is degraded, so many people are consuming contaminated water. Today, many lakes and rivers in the world are polluited. The main cause is the evacuation of contaminants used in industrial processes. We are called to considere the threat and take action. Not use water wrongly.
          </p>
        </div>
        <div className="mt-10 md:w-1/3 md:px-10">
          <img src="./waterpollution.jpg" className="mb-1 p-1 rounded-lg" alt="Water Pollution" />
        </div>
      </div>
    </div>
  );
}

export default Articles;
