import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Projects from 'components/projects';
import Designs from 'components/designs';
import Footer from 'components/footer';
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
      title={data.homeJson.projects.title}
      items={data.homeJson.projects.items}
    />
    <Designs
      title={data.homeJson.designs.title}
      content={data.homeJson.designs.content.childMarkdownRemark.rawMarkdownBody}
      items={data.homeJson.designs.items}
    />
    <Footer
      title={data.homeJson.footer.content.childMarkdownRemark.rawMarkdownBody}
      mail={data.homeJson.footer.mail}
      credits={data.homeJson.footer.credits}
    />
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
      welcomeEmoji
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      projects {
        title
        items {
          newTab
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
      designs {
        title
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        items {
          newTab
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
      footer {
        mail
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        credits {
          title
          items {
            name
            link
          }
        }
      }
    }
  }
`;
