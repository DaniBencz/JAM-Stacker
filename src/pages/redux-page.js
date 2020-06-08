import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Redux-Page" />
    <h1>Using Redux</h1>
    <Link to="/">No Redux</Link>
  </Layout>
)

export default SecondPage
