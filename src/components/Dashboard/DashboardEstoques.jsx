import { useState } from 'react'
import { Button, HStack, Icon, VStack, useDisclosure } from '@chakra-ui/react'
import { MdSearch, MdAdd } from 'react-icons/md'
import { SearchBar } from './SearchBar'
import { TabelaEstoque } from './TabelaEstoque'
import { items as allItems } from '../../dados/items'
import ModalNovoItem from './ModalNovoItem'

export function DashboardEstoques() {
  //modal novo item hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newItem, setNewItem] = useState({
    produto: null,
    caixa: null,
    estoqueMin: 0,
    peso: 0,
    quantidade: 0,
  })

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

  return (
    <VStack px='2.5%' pt={4} w='full' alignItems='start'>
      <HStack w='full'>
        <SearchBar
          w='50vw'
          minW='300px'
          maxW='600px'
          handleChange={onChangeSearchBar}
          leftIcon={MdSearch}
        />
        <Button
          onClick={onOpen}
          leftIcon={<Icon as={MdAdd} />}
          variant='solid'
          colorScheme='teal'>
          Novo Item
        </Button>
      </HStack>
      <TabelaEstoque items={items} />
      <ModalNovoItem
        onSubmit={() => alert(JSON.stringify(newItem))}
        isOpen={isOpen}
        onClose={onClose}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </VStack>
  )
}
