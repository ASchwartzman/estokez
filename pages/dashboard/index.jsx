import DashboardLayout from '../../src/components/Layouts/DashboardLayout'
import { Flex } from '@chakra-ui/react'
import { useAuth } from '../../src/firebase/AuthProvider'
import { withProtected } from '../../src/firebase/routesWrappers'

function DashboardUser() {
  const { user, loading } = useAuth()

  return (
    <DashboardLayout>
      <Flex
        textAlign='center'
        w='full'
        h='full'
        alignItems='center'
        justifyContent='center'>
        {loading ? 'Loading...' : user?.email}
        <br />
        <br />
        Construir página de usuário
      </Flex>
    </DashboardLayout>
  )
}

export default withProtected(DashboardUser)
