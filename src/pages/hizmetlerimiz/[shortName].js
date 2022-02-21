import { useRouter } from "next/router";

import { Layout } from "../../layout/Layout";

import { servicesData } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";

const ServiceDetail = (props) => {
  const router = useRouter();
  const { shortName } = router.query;

  const data = servicesData.filter((x) => x.shortName == shortName);

  return (
    <Layout>
      <Section row wrap>
        {data?.length ? (
          <div>
            <div>Image: {data[0].image}</div>
            <div>Title: {data[0].title}</div>
            <div>Desc: {data[0].description}</div>
          </div>
        ) : null}
      </Section>
    </Layout>
  );
};

export default ServiceDetail;
