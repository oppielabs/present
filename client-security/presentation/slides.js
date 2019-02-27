import React from 'react';
import { Slide, Text, Heading, Image } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import components from './components';
import theme from './theme';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// TITLE SLIDE

export const TitleSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <components.h1>Misconceptions in <br />Client-Side Security</components.h1>
    <components.h3>Reverse Engineering Obfuscation <br />& Disguised Endpoints</components.h3>
    <br />
    <components.h3>Pat Migliaccio</components.h3>
    <components.h5>Owner + Principal Developer</components.h5>
    <components.h3>
      <span style={{
        fontFamily: '"Kanit",sans-serif',
        color: '#20c9a1',
        textShadow: '0px 1px 1px rgba(105,105,105,1)',
        textTransform: 'uppercase'
      }}>Oppie</span>
      <span style={{
        fontFamily: '"Raleway",sans-serif',
        color: '#444',
        fontSize: '2rem'
      }}>Labs</span>
    </components.h3>

    {children}

  </Slide>
)
