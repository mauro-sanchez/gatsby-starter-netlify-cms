import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CursosTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  link,
  attachment
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <strong>
              <a href={link} target="_blank" rel="noopener noreferrer">Link al curso</a>
            </strong>
            <PostContent content={content} />
            <strong>
              <a href={attachment.publicURL} target="_blank" rel="noopener noreferrer">Link al archivo</a>
            </strong>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

CursosTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  link: PropTypes.string,
  attachment: PropTypes.object
};

const Cursos = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CursosTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Curso">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        link={post.frontmatter.link}
        attachment={post.frontmatter.attachment}
      />
    </Layout>
  );
};

Cursos.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Cursos;

export const pageQuery = graphql`
  query CursosByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        link
        attachment {
          publicURL
        }
      }
    }
  }
`;
