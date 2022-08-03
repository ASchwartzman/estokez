import { Text, HStack, Icon, Divider } from '@chakra-ui/react'
import Link from '../Link'
import { useRouter } from 'next/router'

function SideBarItem(props) {
  const router = useRouter()
  const isActive = router.pathname == props.href
  return (
    <Link href={props.href} w='full' h='full'>
      <HStack
        bg={isActive ? 'gray.500' : 'null'}
        borderEnd={isActive ? '2px' : 'null'}
        borderEndColor={isActive ? 'teal.800' : 'null'}
        fontWeight={isActive ? 'bold' : 'null'}
        color={isActive ? 'gray.50' : 'gray.600'}
        sx={
          isActive
            ? 'null'
            : {
                _hover: {
                  bg: 'gray.200',
                  borderEnd: '2px',
                  borderEndColor: 'teal.800',
                },
              }
        }
        p={3}
        justifyContent='start'
        ps={10}>
        <Icon as={props.icon} w={4} h={4} />
        <Text>{props.title}</Text>
      </HStack>
    </Link>
  )
}

export default SideBarItem
