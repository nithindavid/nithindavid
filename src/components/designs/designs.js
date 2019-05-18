import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/projects/item';
import Title from 'components/title';
import { Container, Gallery, Paragraph } from './designs.css';

const Designs = ({ items, title, content }) => (
  <Container>
    <Title as="h2" size="small">
      {title}
    </Title>
    <Paragraph>{content}</Paragraph>
    <Gallery>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Gallery>
  </Container>
);

Designs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default Designs;
