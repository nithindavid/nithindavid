import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.h3`
  display: block;
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 2.2;
  letter-spacing: 1px;
  font-family: 'Quicksand';
  color: #000;
  font-size: 3.0rem;
  text-align: center;

  ${MEDIA.TABLET`
    font-size: 2.0rem;
  `};
`;

export const Mail = styled.a`
  font-weight: 500;
  line-height: 2.4;
  letter-spacing: 1px;
  color: #fe623a;
  display: block;
  padding: 0 1.4rem;
`;

export const Layout = styled.div`
  margin-top: 16rem;
`;

export const Power = styled.h5`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 10rem 0;
  color: #676767;
  text-align: center;
  font-family: 'Quicksand';

  a {
    padding: 0 .6rem;
    color: #fe623a;
  }
`;
