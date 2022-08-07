import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'

export function SearchBar({ leftIcon, handleChange, ...otherProps }) {
  return (
    <InputGroup {...otherProps}>
      <InputLeftElement pointerEvents='none' color='gray.600'>
        <Icon as={leftIcon} />
      </InputLeftElement>
      <Input
        placeholder='Busca por PRODUTO ou CAIXA'
        variant='filled'
        focusBorderColor='gray.400'
        onChange={(e) => handleChange(e)}
      />
    </InputGroup>
  )
}
