import { Flex } from '@chakra-ui/react'
import { withProtected } from '../../src/firebase/routesWrappers'
import DashboardLayout from '../../src/components/Layouts/DashboardLayout'

function Compras() {
  return (
    <DashboardLayout>
      <Flex w='full' alignItems='center' justifyContent='center'>
        Construir Controle de Compras
      </Flex>
    </DashboardLayout>
  )
}

export default withProtected(Compras)
