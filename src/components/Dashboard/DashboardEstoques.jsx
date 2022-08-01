import { useState } from 'react'
import { Button, HStack, Icon, VStack } from '@chakra-ui/react'
import { SearchBar } from './SearchBar'
import { TabelaEstoque } from './TabelaEstoque'
import { MdSearch, MdAdd } from 'react-icons/md'
import { items as allItems } from '../../dados/items'

export function DashboardEstoques() {
  const [items, setItems] = useState(allItems)

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
          leftIcon={<Icon as={MdAdd} />}
          variant='solid'
          colorScheme='teal'>
          Novo Item
        </Button>
      </HStack>
      <TabelaEstoque items={items} />
    </VStack>
  )
}
