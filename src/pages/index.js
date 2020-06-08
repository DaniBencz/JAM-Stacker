import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Chill out, it's ok!</h1>
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Page with Redux</Link> <br />
  </Layout>
)

export default IndexPage
