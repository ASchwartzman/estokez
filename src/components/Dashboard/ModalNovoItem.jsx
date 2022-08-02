import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react'
import Modal from '../Modal'

function ModalNovoItem({ isOpen, onClose, newItem, onSubmit, setNewItem }) {
  return (
    <Modal
      submitButtonTitle='Criar Item'
      title={'NOVO ITEM'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}>
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
            onChange={(e) => setNewItem({ ...newItem, caixa: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='estoqueMin'>Estoque Mínimo</FormLabel>
          <Input
            type='number'
            placeholder='Unidades'
            id='estoqueMin'
            onChange={(e) =>
              setNewItem({ ...newItem, estoqueMin: e.target.value })
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
            value={newItem.quantidade}
            onChange={(e) =>
              setNewItem({ ...newItem, quantidade: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='peso'>{'Peso (kg)'}</FormLabel>
          <Input
            type='number'
            placeholder='kg'
            id='peso'
            value={newItem.peso}
            onChange={(e) => setNewItem({ ...newItem, peso: e.target.value })}
          />
        </FormControl>
      </HStack>
    </Modal>
  )
}

export default ModalNovoItem
