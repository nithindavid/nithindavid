import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Wrapper } from './item.css';

const getAttribute = newTab => (newTab ? { target: '_blank' } : {});

const Item = ({ title, copy, image, path, newTab }) => (
  <Wrapper href={path} {...getAttribute(newTab)}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </Wrapper>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  path: PropTypes.string,
  newTab: PropTypes.bool,
};

export default Item;
