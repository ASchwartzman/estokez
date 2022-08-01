import {
  Icon,
  Avatar,
  Divider,
  VStack,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react'
import { MdOutlineInventory2, MdLogout } from 'react-icons/md'
import { SiGooglesheets } from 'react-icons/si'
import { FiShoppingCart } from 'react-icons/fi'
import SideBarItem from './SideBarItem'
import { useRouter } from 'next/router'
import Link from '../Link'
import { useAuth } from '../../firebase/AuthProvider'

function DashboardSideBar() {
  const router = useRouter()
  const { user, loading, firebaseSignOut } = useAuth()
  return (
    <VStack
      minW='180px'
      h='full'
      bg='gray.50'
      pt='6'
      borderEnd='1px'
      borderColor='gray.100'
      justifyContent='space-between'>
      <VStack w='full' spacing={3}>
        <Link href='/dashboard'>
          <VStack>
            <Avatar name={loading ? '...' : user?.displayName}></Avatar>
            <Text
              w='90%'
              fontSize='sm'
              textAlign='center'
              color='gray.600'
              fontWeight='bold'>
              {loading ? '...' : user?.displayName}
            </Text>
          </VStack>
        </Link>
        <Box w='full' px='15px'>
          <Divider w='full' borderColor='gray.400' />
        </Box>
        <VStack spacing={0} w='full' h='full'>
          <SideBarItem
            title='Estoques'
            icon={MdOutlineInventory2}
            href={'/dashboard/estoques'}
          />
          <SideBarItem
            title='Compras'
            icon={FiShoppingCart}
            href={'/dashboard/compras'}
          />
          <SideBarItem
            title='Vendas'
            icon={SiGooglesheets}
            href={'/dashboard/vendas'}
          />
        </VStack>
      </VStack>
      <HStack
        p={3}
        _hover={{ backgroundColor: 'gray.200', cursor: 'pointer' }}
        w='full'
        justifyContent='center'
        onClick={firebaseSignOut}>
        <Icon as={MdLogout} w={6} h={6} color='gray.600' />
        <Text color='gray.600' fontWeight='bold'>
          Logout
        </Text>
      </HStack>
    </VStack>
  )
}

export default DashboardSideBar
