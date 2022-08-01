import { HStack, Flex } from '@chakra-ui/react'
import DashboardSideBar from '../Dashboard/DashboardSideBar'

function DashboardLayout({ children }) {
  return (
    <HStack w='100vw' h='100vh' alignItems='start'>
      <DashboardSideBar />
      <Flex overflow='auto' w='full' h='full' id='content'>
        {children}
      </Flex>
    </HStack>
  )
}

export default DashboardLayout
