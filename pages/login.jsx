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
import Link from '../src/components/Link'
import { useRouter } from 'next/router'
import { useAuth } from '../src/firebase/AuthProvider'

function Login() {
  const router = useRouter()
  const { firebaseSignInWithEmailAndPassword, error } = useAuth()

  function handleLogin(e) {
    e.preventDefault()
    let _email = e.target.email.value
    let _password = e.target.password.value

    firebaseSignInWithEmailAndPassword(_email, _password)
  }

  return (
    <Flex w='100vw' h='100vh' bg='gray.50' alignItems='center' justify='center'>
      <VStack
        border='1px'
        borderColor='gray.200'
        borderRadius='lg'
        shadow='lg'
        minW='400px'
        bg='white'>
        <form style={{ width: '100%', padding: '10%' }} onSubmit={handleLogin}>
          <Heading size='lg' color='teal' mb={4}>
            Controle de estoque
          </Heading>
          {error && error.message}
          <FormControl mb='2'>
            {/* <FormLabel htmlFor='email' mb={0}>
              Username
            </FormLabel> */}
            <Input
              id='email'
              variant='flushed'
              type='text'
              placeholder='email'></Input>
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
          <Button colorScheme='teal' w='full' my='6' type='submit'>
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
