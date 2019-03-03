import { Heading, Cite } from 'spectacle';
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

export const StyledText = styled(components.p)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${mobileFontSize('text')} !important;
  }
`;

export const StyledHeading = styled(Heading)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${props => mobileFontSize('heading', 'h' + props.size)} !important;
  }
`;

export const StyledListItem = styled(components.li)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${mobileFontSize('listItem')} !important;
  }
`;

export const StyledCodePane = styled(components.code)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${mobileFontSize('code')} !important;
  }
`;

export const StyledCite = styled(Cite)`
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 1rem !important;
  }
`