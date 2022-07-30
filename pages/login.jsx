import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'
import Link from '../components/Link'

function Login() {
  return (
    <Flex w='100vw' h='100vh' bg='gray.50' alignItems='center' justify='center'>
      <VStack
        border='1px'
        borderColor='gray.200'
        borderRadius='lg'
        shadow='lg'
        minW='400px'
        bg='white'>
        <form
          style={{ width: '100%', padding: '10%' }}
          onSubmit={() => alert('Joyce Vadia')}>
          <Heading size='lg' color='teal' mb={2}>
            Bem vindo ao estoque
          </Heading>
          <FormControl mb='2'>
            {/* <FormLabel htmlFor='username' mb={0}>
              Username
            </FormLabel> */}
            <Input
              id='username'
              variant='flushed'
              type='text'
              placeholder='Username'></Input>
          </FormControl>
          <FormControl mb='2'>
            {/* <FormLabel htmlFor='password' mb={0}>
              Password
            </FormLabel> */}
            <Input
              id='password'
              variant='flushed'
              type='password'
              placeholder='Password'></Input>
          </FormControl>
          <Button colorScheme='teal' w='full' my='6'>
            Login
          </Button>
          <Text fontSize='md' color='gray.600'>
            Não é cadastrado?&nbsp;
            <Link color='teal' fontWeight='bold' href={'signup'}>
              Clique aqui
            </Link>
          </Text>
        </form>
      </VStack>
    </Flex>
  )
}

export default Login
