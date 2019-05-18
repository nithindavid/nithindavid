import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  white-space: pre-wrap;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 1px;
  font-family: 'Quicksand';
  color: #000;
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '4.0rem';
      case 'medium':
        return '2.8rem';
      default:
        return '2.4rem';
    }
  }};

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
