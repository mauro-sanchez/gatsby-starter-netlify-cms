import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-pic.jpeg')`,
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
            Noticias
          </h1>
        </div>
        <section className="section has-text-centered">
          <h2>Si quieres estar enterado de las últimas noticias y actividades más reciente, visítanos en Twitter o Facebook</h2>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
