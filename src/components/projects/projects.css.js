import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 3rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const Container = styled.div`
  padding: 0 4rem;
  margin: 2rem 0;
`;
