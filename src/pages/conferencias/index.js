import React from 'react'

import Layout from '../../components/Layout'
import BlogRollConferencias from '../../components/BlogRollConferencias'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/conferencia.jpg')`,
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
            Conferencias
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollConferencias />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
