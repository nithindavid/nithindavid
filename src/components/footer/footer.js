import React from 'react';
import PropTypes from 'prop-types';
import { Title, Mail, Layout, Power } from './footer.css';

const Footer = ({ title, mail, credits }) => {
  return (
    <Layout>
      <Title>
        {title}
        <Mail href={`mailto:${mail}`}>{mail}</Mail>
      </Title>
      <Power>
        {credits.title}
        {credits.items.map(item => (
          <a
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </Power>
    </Layout>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  mail: PropTypes.string,
  credits: PropTypes.object,
};

export default Footer;
