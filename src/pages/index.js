import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1>Hello there</h1>
    <p>Metas website is under construction</p>
    <p>Expect something cool very soon</p>
  </Layout>
)

export default IndexPage
