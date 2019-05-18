import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './article.css';

const Article = ({ children }) => <Container>{children}</Container>;

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
