import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertTeam from './components/ExpertTeam';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <ExpertTeam />
      </main>
    </div>
  );
}

export default App;
