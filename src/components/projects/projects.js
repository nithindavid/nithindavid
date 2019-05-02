import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/projects/item';
import Title from 'components/title';
import { Container, Gallery } from './projects.css';

const Projects = ({ items, title }) => (
  <Container>
    <Title as="h2" size="small">
      {title}
    </Title>
    <Gallery>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Gallery>
  </Container>
);

Projects.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default Projects;
