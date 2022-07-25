import React from "react"
import { Link } from "gatsby"
import { RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>ページが見つかりません</h1>
        <p>間違ったURLにアクセスしていませんか？</p>
      </header>
      <Link to="/" className="button -outline">
        HOMEに戻る
      </Link>
    </div>
  </Layout>
)

export default NotFound
