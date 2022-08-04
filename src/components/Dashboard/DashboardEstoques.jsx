import { useEffect, useState } from 'react'
import {
  Show,
  Button,
  HStack,
  Icon,
  VStack,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { MdSearch, MdAdd } from 'react-icons/md'
import { SearchBar } from './SearchBar'
import { TabelaEstoque } from './TabelaEstoque'
import ModalNovoItem from './ModalNovoItem'
import { getItemsEstoque } from '../../firebase/firestore'

export function DashboardEstoques() {
  //Modal Control
  const { isOpen, onOpen, onClose } = useDisclosure()

  //mock data
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])

  useEffect(() => {
    let unsubscribe = getItemsEstoque(setAllItems, setItems)

    return () => unsubscribe()
  }, [])

  //config searchbar
  function onChangeSearchBar(e) {
    let strLowerCase = e.target.value.toLowerCase()

    let selectedItems = allItems.filter(
      (item) =>
        item.produto.toLocaleLowerCase().includes(strLowerCase) ||
        item.caixa == strLowerCase
    )
    setItems(selectedItems)
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
      <ModalNovoItem isOpen={isOpen} onClose={onClose} />
    </VStack>
  )
}
