import { Layout } from "../../layout/Layout";

import { servicesData } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";

const ServiceDetail = (props) => {
  return (
    <Layout>
      <Section row wrap>
        {props.data?.length ? (
          <div>
            <div>Image: {props.data[0].image}</div>
            <div>Title: {props.data[0].title}</div>
            <div>Desc: {props.data[0].description}</div>
          </div>
        ) : null}
      </Section>
    </Layout>
  );
};

export async function getStaticProps({ params: { shortName } }) {
  const data = servicesData.filter((x) => x.shortName == shortName);
  return { props: { data } };
}

export async function getStaticPaths() {
  const paths = servicesData.map((x) => {
    return { params: { shortName: x.shortName } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default ServiceDetail;
