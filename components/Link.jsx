import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

function Link({ children, href, ...restProps }) {
  console.log(restProps)
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...restProps}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
