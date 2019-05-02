import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2.2rem;
  margin: 2rem 0 1rem;
  color: #000;
  font-family: 'Quicksand';
  font-weight: 600;
`;
  
export const Wrapper = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 0 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
