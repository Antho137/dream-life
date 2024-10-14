import Main from "./Main";
import Healthy from "./Healthy";
import Signup from "./Signup";

function Home() {
  return (
    <div className="relative mt-20 pt-6 xl:px-20">
      <Main />
      <Healthy />
      <Signup />
    </div>
  );
}

export default Home;
