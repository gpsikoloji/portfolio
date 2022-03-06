import Acomplishments from "../../components/Acomplishments/Acomplishments";
import BgAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { servicesData } from "../../../public/constants/constants";

const Home = () => {
  return (
    <Layout>
      <Section row wrap>
        {servicesData.map((item, index) => (
          <ServiceCard
            key={`ServiceCard-${index}`}
            url={item.shortName}
            title={item.title}
            image={item.image}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default Home;
