function Main() {
    return (
      <div
        className="bg-slate-300 flex flex-col p-10 md:flex-row justify-between items-center lg:px-20"
      >
        <div className="pb-4 md:w-1/2 md:px-5 lg:px-10">
          <h1 className="text-blue-900 text-3xl lg:text-4xl font-medium px-2">
            Choices and Actions
          </h1>
          <h6 className="text-green-900 font-medium underline mt-1 mb-3 text-sm">
            <em>By António Sala on 10/05/2024</em>
          </h6>
          <p className="text-xl lg:text-2xl">
          During decades, many countries set <a className="text-blue-600" href="https://ec.europa.eu">economic growth as priority</a> over environmental protection. From that, <a className="text-blue-600" href="https://www.conserve-energy-future.com/">living conditions</a> in the world is becoming
          unpleasant and difficult. Please, it is time to see and do things differently. The future is determined by<a className="text-blue-600" href="https://www.verywellhealth.com/"> today choices and actions</a>!
          </p>
        </div>
        <div className="md:w-1/2 md:px-5 lg:px-10">
          <img
            src="./increasing-capital.jpg"
            className="mb-1 p-1 rounded-lg"
            alt="Increasing capital"
          />
        </div>
      </div>
    );
  }
  
  export default Main;
  