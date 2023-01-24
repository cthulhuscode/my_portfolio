import { Skills, Footer, Header, Technologies, Testimonials, Works } from "./container";
import { Navbar } from "./components";
import "./App.scss"

const App = () => {
  return <div className="app">
    <Navbar />
   <Header />
   <Skills />
   <Works />
   <Technologies />
   {/* <Testimonials /> */}
   <Footer />
  </div>;
};

export default App;
