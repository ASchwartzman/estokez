import { Button, Flex, useToast } from '@chakra-ui/react'
import DashboardLayout from '../../src/components/Layouts/DashboardLayout'

function Vendas() {
  const toast = useToast()
  return (
    <DashboardLayout>
      <Flex w='full' alignItems='center' justifyContent='center'>
        {/* Construir Controle de Vendas */}
        <Button
          onClick={() => {
            toast({
              title: 'Account created.',
              description: "We've created your account for you.",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }}>
          Click me
        </Button>
      </Flex>
    </DashboardLayout>
  )
}

export default Vendas
