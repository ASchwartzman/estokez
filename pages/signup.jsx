import {
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  VStack,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'
import Link from '../src/components/Link'
import { useAuth } from '../src/firebase/AuthProvider'

function Signup() {
  const { firebaseSignUpWithEmailAndPassword, error } = useAuth()

  function handleSignUpButton(e) {
    e.preventDefault()
    let _displayName = e.target.name.value
    let _email = e.target.email.value
    let _password = e.target.password.value
    firebaseSignUpWithEmailAndPassword(_email, _password, _displayName)
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
        <form
          style={{ width: '100%', padding: '10%' }}
          onSubmit={handleSignUpButton}>
          <Heading size='lg' color='teal' mb={4}>
            Cadastro de usuário
          </Heading>
          <FormControl mb='2' isInvalid={error} isRequired>
            {error && (
              <FormErrorMessage pb={2}>{error.message}</FormErrorMessage>
            )}
            <Input
              id='name'
              variant='flushed'
              type='text'
              placeholder='Nome'></Input>
          </FormControl>
          <FormControl mb='2' isInvalid={error} isRequired>
            <Input
              id='email'
              variant='flushed'
              type='text'
              placeholder='Email'></Input>
          </FormControl>
          <FormControl mb='2' isRequired>
            <Input
              id='password'
              variant='flushed'
              type='password'
              placeholder='Password'></Input>
          </FormControl>
          <Button colorScheme='teal' w='full' my='6' type='submit'>
            Sign Up
          </Button>
          <Text fontSize='md' color='gray.600'>
            Ja é cadastrado?&nbsp;
            <Link color='teal' fontWeight='bold' href={'login'}>
              Clique aqui
            </Link>
          </Text>
        </form>
      </VStack>
    </Flex>
  )
}

export default Signup
