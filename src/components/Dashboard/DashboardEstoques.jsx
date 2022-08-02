import { useState } from 'react'
import {
  Show,
  Button,
  HStack,
  Icon,
  VStack,
  useDisclosure,
  Box,
  useToast,
} from '@chakra-ui/react'
import { MdSearch, MdAdd } from 'react-icons/md'
import { SearchBar } from './SearchBar'
import { TabelaEstoque } from './TabelaEstoque'
import { items as allItems } from '../../dados/items'
import ModalNovoItem from './ModalNovoItem'
import { addEstoqueItem } from '../../firebase/firestore'

export function DashboardEstoques() {
  //Toast
  const toast = useToast()

  //modal novo item hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newItem, setNewItem] = useState({
    produto: null,
    caixa: null,
    estoqueMin: 0,
    peso: 0,
    quantidade: 0,
  })

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

  //mock data
  const [items, setItems] = useState(allItems)

  //configura searchbar
  function onChangeSearchBar(e) {
    let strLowerCase = e.target.value.toLowerCase()

    let selectedItems = allItems.filter((item) =>
      item.name.toLocaleLowerCase().includes(strLowerCase)
    )

    console.log(strLowerCase, selectedItems)
    setItems(selectedItems)
  }

  //add new item to firestore
  async function handleNewItem(e) {
    e.preventDefault()
    let docRef = await addEstoqueItem(newItem)
    onCloseModal()
    console.log(docRef)
    if (docRef.id) {
      toast({
        title: `Great!`,
        description: 'Item adicionado com sucesso',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <VStack px='2.5%' pt={4} w='full' alignItems='start'>
      <HStack w='full' justifyContent='space-between'>
        <SearchBar
          w='full'
          minW='300px'
          // maxW='600px'
          handleChange={onChangeSearchBar}
          leftIcon={MdSearch}
        />
        <Button
          onClick={onOpen}
          leftIcon={<Icon as={MdAdd} />}
          iconSpacing={{ md: '0.5', sm: '0' }}
          variant='solid'
          colorScheme='teal'>
          <Show above='md'>
            <Box>Novo Item</Box>
          </Show>
        </Button>
      </HStack>
      <TabelaEstoque items={items} />
      <ModalNovoItem
        onSubmit={(e) => handleNewItem(e)}
        isOpen={isOpen}
        onClose={onCloseModal}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </VStack>
  )
}
