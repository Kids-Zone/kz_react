import "./HomeScreen.css";
import ImageSection from "./ImageSection/ImageSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import MainSection from "./MainSection/MainSection";

function HomeScreen(props) {
  return (
    <main>
      <ImageSection />
      <DescriptionSection />
      <h2>Explore Activities</h2>
      <p>Look at some of our available activity categories</p>
      <MainSection type="activity" />
      <h2>Explore Mentoring</h2>
      <p>Look at some of our Mentoring categories</p>
      <MainSection type="mentoring" />
    </main>
  );
}

export default HomeScreen;
