import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import ModalNovoItem from '../src/components/Dashboard/ModalNovoItem'
import Modal from '../src/components/Modal'

function ModalExemplo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newItem, setNewItem] = useState({
    produto: null,
    caixa: null,
    estoqueMin: 0,
    peso: 0,
    quantidade: 0,
  })

  return (
    <>
      <Flex h='100vh'>
        <Center w='full'>
          <Button onClick={onOpen}>Open Modal</Button>
          <ModalNovoItem
            onSubmit={() => alert(JSON.stringify(newItem))}
            isOpen={isOpen}
            onClose={onClose}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </Center>
      </Flex>
    </>
  )
}

export default ModalExemplo
