import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section nopadding>
    <LeftSection>
      <SectionTitle main center>
        Güçlenerek <br />
        Gelişmenizde
        <br /> Güvenli Liman
        <br /> G Psikoloji
      </SectionTitle>
      {/* <SectionText>
          Uzman kadromuzla tanışın!!
        </SectionText> */}
    </LeftSection>
  </Section>
);

export default Hero;
