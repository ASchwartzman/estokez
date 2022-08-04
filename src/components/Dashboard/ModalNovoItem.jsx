import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  useToast,
} from '@chakra-ui/react'
import Modal from '../Modal'
import { addEstoqueItem } from '../../firebase/firestore'

function ModalNovoItem({ isOpen, onClose }) {
  //Toast
  const toast = useToast()

  const [newItem, setNewItem] = useState({
    produto: null,
    caixa: null,
    estoqueMin: 0,
    peso: 0,
    quantidade: 0,
  })

  //add new item to firestore
  async function handleNewItem(e) {
    e.preventDefault()
    let docRef = await addEstoqueItem(newItem)
    onCloseModal()
    console.log(docRef)
    if (docRef.id) {
      toast({
        title: ``,
        description: 'Item adicionado :)',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  //reset new item on close modal
  function onCloseModal() {
    setNewItem({
      produto: null,
      caixa: null,
      estoqueMin: 0,
      peso: 0,
      quantidade: 0,
    })
    onClose()
  }

  return (
    <Modal
      submitButtonTitle='Criar'
      title={'NOVO ITEM'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(e) => handleNewItem(e)}>
      <FormControl mb={2}>
        <FormLabel htmlFor='produto'>Produto</FormLabel>
        <Input
          id='produto'
          placeholder='Nome'
          onChange={(e) => setNewItem({ ...newItem, produto: e.target.value })}
        />
      </FormControl>
      <HStack mb={2}>
        <FormControl>
          <FormLabel htmlFor='caixa'>Posição</FormLabel>
          <Input
            type='number'
            placeholder='Número Caixa'
            id='caixa'
            onChange={(e) =>
              setNewItem({ ...newItem, caixa: parseInt(e.target.value) })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='estoqueMin'>Estoque Mínimo</FormLabel>
          <Input
            type='number'
            placeholder='Unidades'
            id='estoqueMin'
            onChange={(e) =>
              setNewItem({ ...newItem, estoqueMin: parseInt(e.target.value) })
            }
          />
        </FormControl>
      </HStack>
      <HStack>
        <FormControl>
          <FormLabel htmlFor='quantidade'>Estoque Inicial</FormLabel>
          <Input
            type='number'
            placeholder='Unidades'
            id='quantidade'
            onChange={(e) =>
              setNewItem({ ...newItem, quantidade: parseInt(e.target.value) })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='peso'>{'Peso (kg)'}</FormLabel>
          <Input
            type='number'
            placeholder='kg'
            id='peso'
            onChange={(e) =>
              setNewItem({ ...newItem, peso: parseFloat(e.target.value) })
            }
          />
        </FormControl>
      </HStack>
    </Modal>
  )
}

export default ModalNovoItem
