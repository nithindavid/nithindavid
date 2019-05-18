import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0rem;
  margin-top: 3rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const Container = styled.div`
  padding: 0 4rem;
  margin: 8rem 0 2rem;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 2.4rem;
  letter-spacing: 1px;
  font-family: 'Quicksand';
  margin: 3rem 0;
  font-weight: 500;
`;
