import Layout from '../components/MainLayout'
import UsersList from '../components/Users'

const Index = () => (
  <Layout title="Blog Layout">
    <h1>Simple Prisma 2 Blog Example!</h1>
    <h3>Users List</h3>
    <UsersList />
  </Layout>
)

export default Index
