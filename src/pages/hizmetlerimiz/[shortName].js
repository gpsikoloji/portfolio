import { useRouter } from "next/router";

import { Layout } from "../../layout/Layout";

import { servicesData } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";
import ServiceDetailComp from "../../components/ServiceDetailComp/ServiceDetailComp";

const ServiceDetail = (props) => {
  const router = useRouter();
  const { shortName } = router.query;

  const data = servicesData.filter((x) => x.shortName == shortName);

  return (
    <Layout>
      <Section row wrap>
        {data?.length ? (
                      <ServiceDetailComp
                      title={data[0].title}
                      image={data[0].image}
                      desc= {data[0].description}
                    />
          ) : null}
      </Section>
    </Layout>
  );
};

export default ServiceDetail;
