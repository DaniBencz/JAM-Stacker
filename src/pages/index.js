import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Chill out, it's ok!</h1>
    <Link to="/redux-page/">Page with Redux</Link> <br />
  </Layout>
)

export default IndexPage
