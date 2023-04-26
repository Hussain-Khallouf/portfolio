import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center nopadding>
          Hussain Riad Khallouf
        </SectionTitle>
        <SectionText>
        An AI Engineer and Backend Developer with a passion for learning and achievement, Outstanding time management and organizational abilities, eager to be challenged to grow and improve my skills.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
    <Img src="/images/picofme.png"/>

  </>
);

export default Hero;