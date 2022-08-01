import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'

export function SearchBar({ leftIcon, handleChange, ...otherProps }) {
  return (
    <InputGroup {...otherProps}>
      <InputLeftElement
        pointerEvents='none'
        color='gray.600'
        children={<Icon as={leftIcon} />}
      />
      <Input
        placeholder='Buscar items...'
        variant='filled'
        focusBorderColor='gray.400'
        onChange={(e) => handleChange(e)}
      />
    </InputGroup>
  )
}
