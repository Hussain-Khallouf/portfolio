import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="http://github.com/Hussain-khallouf">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/hussein-khallouf/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/profile.php?id=100010356846851">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
