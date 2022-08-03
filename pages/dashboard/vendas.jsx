import { Button, Flex, useToast } from '@chakra-ui/react'
import DashboardLayout from '../../src/components/Layouts/DashboardLayout'
import { getItemsEstoque } from '../../src/firebase/firestore'

function Vendas() {
  const toast = useToast()
  return (
    <DashboardLayout>
      <Flex w='full' alignItems='center' justifyContent='center'>
        {/* Construir Controle de Vendas */}
        <Button onClick={() => {}}>Click me</Button>
      </Flex>
    </DashboardLayout>
  )
}

export default Vendas
