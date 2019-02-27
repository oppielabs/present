import React from 'react';
import { Slide, Text, Heading, ListItem, Image } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import styled from '@emotion/styled';
import components from './components';
import theme from './theme';

// MOBILE OVERRIDES
const mobileMaxWidth = '900px';
const mobileFontSizeValue = 0.50;

const mobileFontSize = (type, childType) => {
  const component = childType ? theme.screen.components[type][childType] : theme.screen.components[type];
  return component.fontSize ? (component.fontSize.replace('rem', '') * mobileFontSizeValue) + 'rem'  : null
}

const StyledText = styled(Text)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${mobileFontSize('text')} !important;
  }
`;

const StyledHeading = styled(Heading)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${props => mobileFontSize('heading', 'h' + props.size)} !important;
  }
`;

const StyledListItem = styled(ListItem)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${mobileFontSize('listItem')} !important;
  }
`;

const mobileComponents = {
  ...components,
  h1: ({ children }) => <StyledHeading size={1}>{children}</StyledHeading>,
  h2: ({ children }) => <StyledHeading size={2}>{children}</StyledHeading>,
  h3: ({ children }) => <StyledHeading size={3}>{children}</StyledHeading>,
  h4: ({ children }) => <StyledHeading size={4}>{children}</StyledHeading>,
  h5: ({ children }) => <StyledHeading size={5}>{children}</StyledHeading>,
  h6: ({ children }) => <StyledHeading size={6}>{children}</StyledHeading>,
  p: ({ children }) => <StyledText>{children}</StyledText>,
  li: ({ children }) => <StyledListItem>{children}</StyledListItem>,
}

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={mobileComponents}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...mobileComponents,
  h2: ({ children }) => <StyledHeading size={2} textColor={theme.screen.colors.quaternary}>{children}</StyledHeading>,
  h3: ({ children }) => <StyledHeading size={3} textColor={theme.screen.colors.quaternary}>{children}</StyledHeading>,
  h4: ({ children }) => <StyledHeading size={4} textColor={theme.screen.colors.quaternary}>{children}</StyledHeading>,
  h5: ({ children }) => <StyledHeading size={5} textColor={theme.screen.colors.quaternary}>{children}</StyledHeading>,
  h6: ({ children }) => <StyledHeading size={6} textColor={theme.screen.colors.quaternary}>{children}</StyledHeading>,
  p: ({ children }) => <StyledText textColor="white">{children}</StyledText>
}

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={mobileComponents}>{children}</MDXProvider>
  </Slide>
);

// TITLE SLIDE

export const TitleSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <StyledHeading size={1}>Misconceptions in <br />Client-Side Security</StyledHeading>
    <StyledHeading size={3}>Reverse Engineering Obfuscation <br />& Disguised Endpoints</StyledHeading>
    <br />
    <StyledHeading size={3}>Pat Migliaccio</StyledHeading>
    <StyledHeading size={5}>Owner + Principal Developer</StyledHeading>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}>
      <StyledHeading size={3} style={{
        fontFamily: '"Kanit",sans-serif',
        color: '#20c9a1',
        textShadow: '0px 1px 1px rgba(105,105,105,1)',
        textTransform: 'uppercase',
        margin: '0'
      }}>Oppie</StyledHeading>
      <StyledHeading size={5} style={{
        fontFamily: '"Raleway",sans-serif',
        color: '#444',
        margin: '0'
      }}>Labs</StyledHeading>
    </div>
      

    {children}

  </Slide>
)
