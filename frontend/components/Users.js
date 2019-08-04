import { Table } from 'antd'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const usersQuery = gql`
  {
    users {
      id
      name
      email
    }
  }
`

const UsersList = () => (
  <Query query={usersQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>Error...</p>

      if (data && data.users && data.users.length > 0) {
        const feedData = data.users.map(({ name, email }, i) => ({
          key: i,
          name,
          email
        }))

        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
          }
        ]

        return <Table columns={columns} dataSource={feedData} />
      }

      return <p>No Users yet!</p>
    }}
  </Query>
)

export default UsersList
