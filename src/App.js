import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import ClientReviews from './components/ClientReview/ClientReviews';
import Contact from './components/ContactMe/Contact';
import ContentCreation from './components/ContentCreation/ContentCreation';
import Footer from './components/Footer/Footer';
import IntroSection from './components/IntroSection/IntroSection';
import NewsLetter from './components/JoinNewsLetter/NewsLetter';
import Navbar from './components/Navbar/Navbar';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import RecentBlogs from './components/RecentBlogs/RecentBlogs';
import { HorizontalLine } from './themes/GlobalStyles';

function App() {
  return (
    <>
      <Navbar/>
      <IntroSection />
      <ProjectsSection />
      <ContentCreation />
      <AboutMe />
      <ClientReviews />
      <Contact />
      <RecentBlogs />
      <HorizontalLine />
      <NewsLetter />
      <HorizontalLine />
      <Footer />
    </>
  );
}

export default App;
