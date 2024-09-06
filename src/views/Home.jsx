import { useEffect } from "react";
import TimeHero from "../components/main/timeLine/TimeHero";
import Proyects from "../components/main/proyects/Poryects";
import Skill from "../components/main/skills/Skill";
import animations from "../helpers/Animations";

function Home() {
  useEffect(() => {
    animations();
  }, []);
  return (
    <>
      <TimeHero />
      <Proyects />
      <Skill />
    </>
  );
}

export default Home;
