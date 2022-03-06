import { Layout } from "../../layout/Layout";

import { peoplesData } from "../../../public/constants/constants";
import { Section } from "../../styles/GlobalComponents";
import PeopleDetailComp from "../../components/PeopleDetailComp/PeopleDetailComp";

const PeopleDetail = (props) => {
  return (
    <Layout>
      <Section row wrap>
        {props.data?.length ? (
          <PeopleDetailComp
          title={props.data[0].title}
          image={props.data[0].image}
          desc= {props.data[0].description}
        />
        ) : null}
      </Section>
    </Layout>
  );
};

export async function getStaticProps({ params: { shortName } }) {
  const data = peoplesData.filter((x) => x.shortName == shortName);
  return { props: { data } };
}

export async function getStaticPaths() {
  const paths = peoplesData.map((x) => {
    return { params: { shortName: x.shortName } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default PeopleDetail;
