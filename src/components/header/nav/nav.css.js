import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.6rem;

      a {
        letter-spacing: 1px;
        font-family: 'Quicksand';
        font-weight: 900;
        color: #fe623a;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
