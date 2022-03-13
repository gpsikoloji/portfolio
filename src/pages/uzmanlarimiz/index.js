import Acomplishments from "../../components/Acomplishments/Acomplishments";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";

import PeopleCard from "../../components/PeopleCard/PeopleCard";
import { peoplesData } from "../../../public/constants/constants";

const Home = () => {
  return (
    <Layout>
      <Section row wrap>
        {peoplesData.map((item, index) => (
          <PeopleCard
            key={`PeopleCard-${index}`}
            url={item.shortName}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default Home;
