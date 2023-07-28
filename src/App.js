import Inputs from './components/Inputs';
import TopButtons from './components/TopButtons';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-24 py-5 px-16 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
