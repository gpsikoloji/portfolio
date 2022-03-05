import { useRouter } from "next/router";

import { Layout } from "../../layout/Layout";

import { peoplesData } from "../../../public/constants/constants";
import { Section } from "../../styles/GlobalComponents";
import PeopleDetailComp from "../../components/PeopleDetailComp/PeopleDetailComp";

const PeopleDetail = (props) => {
  const router = useRouter();
  const { shortName } = router.query;

  const data = peoplesData.filter((x) => x.shortName == shortName);

  return (
    <Layout>
      <Section row wrap>
          {data?.length ? (
                      <PeopleDetailComp
                      title={data[0].title}
                      image={data[0].image}
                      desc= {data[0].description}
                    />
          ) : null}
      </Section>
    </Layout>
  );
};

export default PeopleDetail;
