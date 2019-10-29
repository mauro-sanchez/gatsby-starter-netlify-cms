import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import directorio from "../../static/img/directorio.pdf";
import estatutos from "../../static/img/estatutos.pdf";
import objetivos from "../../static/img/objetivos.pdf";
import historia from "../../static/img/historia.pdf";
import imgDirectorio from "../../static/img/840.jpg";
import imgEstatutos from "../../static/img/838.jpg";
import imgObjetivos from "../../static/img/839.jpg";
import imgHistoria from "../../static/img/841.jpg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            Clic sobre cada ícono para acceder al archivo PDF correspondiente
          </div>
          <div className="column">
            <a href={historia} download>
              <img src={imgHistoria} />
            </a>
          </div>
          <div className="column">
            <a href={objetivos} download>
              <img src={imgObjetivos} />
            </a>
          </div>
          <div className="column">
            <a href={estatutos} download>
              <img src={imgEstatutos} />
            </a>
          </div>
          <div className="column">
            <a href={directorio} download>
              <img src={imgDirectorio} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
