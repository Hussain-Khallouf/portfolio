import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+963 937 237 994">+963 937 237 994</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hussain.khallouf.ite@gmail.com">
            hussain.khallouf.ite@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="http://github.com/Hussain-khallouf">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/hussein-khallouf/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/profile.php?id=100010356846851">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
