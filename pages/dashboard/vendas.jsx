import { Flex } from '@chakra-ui/react'
import DashboardLayout from '../../src/components/Layouts/DashboardLayout'

function Vendas() {
  return (
    <DashboardLayout>
      <Flex w='full' alignItems='center' justifyContent='center'>
        Controle de Vendas
      </Flex>
    </DashboardLayout>
  )
}

export default Vendas
