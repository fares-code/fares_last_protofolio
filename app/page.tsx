import Contact from "./components/contacts/contacts";
import Hero from "./components/hero/Hero";
import HomePage from "./components/home/HomePage";
import Nav from "./components/nav/Nav";
import Projects from "./components/Projects/Projects";

import ToolsShowcase from "./components/Tools/Tools";
import WorkExperience from "./components/WorkExperince/WorkExperince";

export default function Home() {
  return (
   <div>
   <Nav/>
   <Hero/>
   <ToolsShowcase/>
   <WorkExperience/>
   <Projects/>
   <Contact/>
  </div>
  );
}
