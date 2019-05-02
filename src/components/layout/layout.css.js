import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${MEDIA.TABLET`
    max-width: 700px;
  `};
`;
