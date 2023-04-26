import React from 'react';
import Link from 'next/link';

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
        <Link  href="#about"><Button >Learn More</Button></Link>
      </LeftSection>
    </Section>
    <Img src="/images/picofme.png"/>

  </>
);

export default Hero;