import React from "react";
import {
  DiFirebase,
  DiReact,
  DiDocker,
  DiPython,
  DiDjango,
  DiNodejs,
  DiJavascript,
  DiGithub,
  DiLinux,
  DiRedis,
  DiPostgresql,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      {/* <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}

      <ListItem>
        <picture>
          <DiLinux size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux OS</ListTitle>
          <ListParagraph>
            Experience with <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDjango size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Django </ListTitle>
          <ListParagraph>
            Experience with <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejs size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Node Js</ListTitle>
          <ListParagraph>
            Experience with <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPostgresql size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Postgresql DB</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDocker size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRedis size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Redis Server</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithub size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Github </ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Firebase </ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPython size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python </ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
