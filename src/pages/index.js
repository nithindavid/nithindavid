import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Projects from 'components/projects';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';
import pageStyles from './index.module.css';

const Index = ({ data }) => (
  <Layout>
    <header className={pageStyles.header}>
      <Box>
        <Title as="h1" size="medium">
          {data.homeJson.welcomeTitle}
          <span aria-label="hi" role="img" className={pageStyles.waving}>
            {data.homeJson.welcomeEmoji}
          </span>
        </Title>
        <Title as="h3" size="medium">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
      </Box>
    </header>
    <Projects
      title={data.homeJson.projectTitle}
      items={data.homeJson.projects}
    />
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      welcomeTitle
      projectTitle
      welcomeEmoji
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      projects {
        title
        copy
        path
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
