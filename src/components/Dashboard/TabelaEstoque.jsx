import {
  TableContainer,
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
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { removeEstoqueItem } from '../../firebase/firestore'

const TableHead = () => {
  return (
    <Thead>
      <Tr>
        <Th>Produto</Th>
        <Th textAlign='center'>Caixa</Th>
        <Th isNumeric>{"Peso (kg)"}</Th>
        <Th isNumeric>Quantidade</Th>
        <Th isNumeric>Estoque Mín</Th>
        <Th></Th>
      </Tr>
    </Thead>
  )
}

const TableItem = ({ item }) => {


  return (
    <Tr
      fontSize='md'
      color={'gray.600'}
      _hover={{ backgroundColor: 'gray.50' }}>
      <Td>{item.produto}</Td>
      <Td borderColor='gray.200' borderRadius='lg' fontWeight='extrabold' bg='gray.100' textAlign='center' >{item.caixa}</Td>
      <Td isNumeric>{item.peso}</Td>
      <Td fontWeight='bold' isNumeric>
        {item.quantidade}
      </Td>
      <Td isNumeric>{item.estoqueMin}</Td>
      <Td>
        <HStack>
          <Tooltip label='Editar'>
            <IconButton color='teal' variant='ghost' icon={<EditIcon />} />
          </Tooltip>
          <Tooltip label='Excluir'>
            <IconButton color='red' variant='ghost' icon={<DeleteIcon />} onClick={() => removeEstoqueItem(item.id)} />
          </Tooltip>
        </HStack>
      </Td>
    </Tr>
  )
}

export function TabelaEstoque({ items, ...otherProps }) {

  return (
    <Table variant='simple' w='100%'>
      <TableCaption placement='top'>
        <HStack justifyContent='space-between'>
          <Text fontSize={16}>Estoque</Text>
          <Text>{new Date().toLocaleDateString('pt-br')}</Text>
        </HStack>
      </TableCaption>
      <TableHead />
      <Tbody>
        {items && items.map((item) => <TableItem key={item.id} item={item} />)}
      </Tbody>
    </Table>
  )
}
