import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display_container from "../components/display_container"

const SecondPage = () => (
  <Layout>
    <SEO title="Redux-Page" />
    <h1>Redux Store</h1>
    <Display_container></Display_container>
    <Link to="/">No Redux</Link>
  </Layout>
)

export default SecondPage
