import { useEffect, useState } from 'react'
import {
  useDisclosure,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  HStack,
  Text,
  Tooltip,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { removeEstoqueItem } from '../../firebase/firestore'
import ModalUpdateItem from './ModalUpdateItem'

const TableHead = () => {
  return (
    <Thead>
      <Tr>
        <Th>Produto</Th>
        <Th textAlign='center'>Caixa</Th>
        <Th isNumeric>{'Peso (kg)'}</Th>
        <Th isNumeric>Quantidade</Th>
        <Th isNumeric>Estoque Mín</Th>
        <Th></Th>
      </Tr>
    </Thead>
  )
}

const TableItem = ({ item, onOpen, setSelectedItem }) => {
  const toast = useToast()
  return (
    <>
      <Tr
        fontSize='md'
        color={'gray.600'}
        _hover={{ backgroundColor: 'gray.50' }}>
        <Td>{item.produto}</Td>
        <Td
          borderColor='gray.200'
          borderRadius='lg'
          fontWeight='extrabold'
          bg='gray.100'
          textAlign='center'>
          {item.caixa}
        </Td>
        <Td isNumeric>{item.peso}</Td>
        <Td fontWeight='bold' isNumeric>
          {item.quantidade}
        </Td>
        <Td isNumeric>{item.estoqueMin}</Td>
        <Td>
          <VStack spacing={0}>
            <HStack bgColor='gray.100'>
              <Tooltip label='Adicionar'>
                <IconButton
                  size='sm'
                  color='teal'
                  variant='ghost'
                  icon={<AddIcon />}
                  onClick={() => {
                    // setSelectedItem(item)
                    // onOpen()
                  }}
                />
              </Tooltip>
              <Tooltip label='Remover'>
                <IconButton
                  size='sm'
                  color='red'
                  variant='ghost'
                  icon={<MinusIcon />}
                  onClick={() => {
                    // let result = removeEstoqueItem(item.id)
                    // if (result) {
                    //   toast({
                    //     title: ``,
                    //     description: 'Item removido :/',
                    //     status: 'error',
                    //     duration: 3000,
                    //     isClosable: true,
                    //   })
                    // }
                  }}
                />
              </Tooltip>
            </HStack>
            <HStack>
              <Tooltip label='Editar'>
                <IconButton
                  size='sm'
                  color='teal'
                  variant='ghost'
                  icon={<EditIcon />}
                  onClick={() => {
                    setSelectedItem(item)
                    onOpen()
                  }}
                />
              </Tooltip>
              <Tooltip label='Excluir'>
                <IconButton
                  size='sm'
                  color='red'
                  variant='ghost'
                  icon={<DeleteIcon />}
                  onClick={() => {
                    let result = removeEstoqueItem(item.id)
                    if (result) {
                      toast({
                        title: ``,
                        description: 'Item removido :/',
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                      })
                    }
                  }}
                />
              </Tooltip>
            </HStack>
          </VStack>
        </Td>
      </Tr>
    </>
  )
}

export function TabelaEstoque({ items, ...otherProps }) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [selectedItem, setSelectedItem] = useState({
    produto: '',
    caixa: '',
    estoqueMin: 0,
    peso: 0,
    quantidade: 0,
  })

  return (
    <>
      <Table variant='simple' w='100%'>
        <TableCaption placement='top'>
          <HStack justifyContent='space-between'>
            <Text fontSize={16}>Estoque</Text>
            <Text>{new Date().toLocaleDateString('pt-br')}</Text>
          </HStack>
        </TableCaption>
        <TableHead />
        <Tbody>
          {items &&
            items.map((item) => (
              <TableItem
                key={item.id}
                item={item}
                onOpen={onOpen}
                setSelectedItem={setSelectedItem}
              />
            ))}
        </Tbody>
      </Table>
      <ModalUpdateItem
        isOpen={isOpen}
        onClose={onClose}
        item={selectedItem}
        setSelectedItem={(item) => setSelectedItem(item)}
      />
    </>
  )
}
