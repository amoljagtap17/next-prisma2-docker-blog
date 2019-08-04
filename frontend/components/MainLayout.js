import { Layout } from 'antd'
import Head from 'next/head'
import Link from 'next/link'

const { Footer, Header, Content } = Layout

const MainLayout = ({ title, children }) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </Header>
    <Content>{children}</Content>
    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Layout>
)

export default MainLayout
