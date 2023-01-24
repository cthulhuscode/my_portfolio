import { Skills, Footer, Header, Technologies, Testimonial, Works } from "./container";
import { Navbar } from "./components";
import "./App.scss"

const App = () => {
  return <div className="app">
    <Navbar />
   <Header />
   <Skills />
   <Works />
   <Technologies />
   {/*<Testimonial />
   <Footer /> */}
  </div>;
};

export default App;
