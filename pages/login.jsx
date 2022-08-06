import {
  Flex,
  FormControl,
  Heading,
  Input,
  VStack,
  Button,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react'
import Link from '../src/components/Link'
import { withPublic } from '../src/firebase/routesWrappers'
import { useAuth } from '../src/firebase/AuthProvider'

function Login() {
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
          <FormControl mb='2' isInvalid={error}>
            {/* <FormLabel htmlFor='email' mb={0}>
              Username
            </FormLabel> */}
            {error && (
              <FormErrorMessage pb={2}>{error.message}</FormErrorMessage>
            )}
            <Input
              id='email'
              variant='flushed'
              type='text'
              placeholder='Email'></Input>
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

export default withPublic(Login)
