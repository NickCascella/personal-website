import "./App.css";
import HomePage from "./pages/Home Page/HomePage";
import RenderBubbles from "./components/BubbleBackground/BubblesBackground";

function App() {
  return (
    <div className="app">
      <HomePage></HomePage>
      <RenderBubbles />
    </div>
  );
}

export default App;
