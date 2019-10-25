import React from 'react'

import Layout from '../../components/Layout'
import BlogRollCursos from '../../components/BlogRollCursos'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #FFF, -0.5rem 0 0 #FFF',
              backgroundColor: '#FFF',
              color: '#1E59A8',
              padding: '1rem',
            }}
          >
            Cursos
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollCursos />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
