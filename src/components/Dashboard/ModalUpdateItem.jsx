import { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  useToast,
} from '@chakra-ui/react'
import Modal from '../Modal'
import { updateItem } from '../../firebase/firestore'

function ModalUpdateItem({ isOpen, onClose, item, setSelectedItem }) {
  //Toast
  const toast = useToast()

  const [editItem, setEditItem] = useState({
    produto: item.produto,
    caixa: item.caixa,
    estoqueMin: item.estoqueMin,
    peso: item.peso,
    quantidade: item.quantidade,
  })

  useEffect(() => {
    setEditItem({
      produto: item.produto,
      caixa: item.caixa,
      estoqueMin: item.estoqueMin,
      peso: item.peso,
      quantidade: item.quantidade,
    })
  }, [isOpen, item])

  //add new item to firestore
  async function handleItem(e) {
    e.preventDefault()
    let result = await updateItem(item.id, editItem)
    onCloseModal()

    if (result) {
      toast({
        title: ``,
        description: 'Item atualizado ;)',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  //reset new item on close modal
  function onCloseModal() {
    setEditItem({
      produto: null,
      caixa: null,
      estoqueMin: 0,
      peso: 0,
      quantidade: 0,
    })
    onClose()
    setSelectedItem({})
  }

  return (
    <Modal
      submitButtonTitle='Alterar'
      title={'ALTERAR ITEM'}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={(e) => handleItem(e)}>
      <FormControl mb={2}>
        <FormLabel htmlFor='produto'>Produto</FormLabel>
        <Input
          id='produto'
          placeholder='Nome'
          value={editItem.produto}
          onChange={(e) =>
            setEditItem({ ...editItem, produto: e.target.value })
          }
        />
      </FormControl>
      <HStack mb={2}>
        <FormControl>
          <FormLabel htmlFor='caixa'>Posição</FormLabel>
          <Input
            type='number'
            placeholder='Número Caixa'
            id='caixa'
            value={editItem.caixa}
            onChange={(e) =>
              setEditItem({ ...editItem, caixa: parseInt(e.target.value) || 0 })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='estoqueMin'>Estoque Mínimo</FormLabel>
          <Input
            type='number'
            placeholder='Unidades'
            id='estoqueMin'
            value={editItem.estoqueMin}
            onChange={(e) =>
              setEditItem({
                ...editItem,
                estoqueMin: parseInt(e.target.value) || 0,
              })
            }
          />
        </FormControl>
      </HStack>
      <HStack>
        <FormControl>
          <FormLabel htmlFor='quantidade'>Estoque</FormLabel>
          <Input
            type='number'
            placeholder='Unidades'
            id='quantidade'
            value={editItem.quantidade}
            onChange={(e) =>
              setEditItem({
                ...editItem,
                quantidade: parseInt(e.target.value) || 0,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='peso'>{'Peso (kg)'}</FormLabel>
          <Input
            type='number'
            placeholder='kg'
            id='peso'
            value={editItem.peso}
            onChange={(e) =>
              setEditItem({
                ...editItem,
                peso: parseFloat(e.target.value) || 0,
              })
            }
          />
        </FormControl>
      </HStack>
    </Modal>
  )
}

export default ModalUpdateItem
