import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

function Link({ children, href, ...restProps }) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink style={{ textDecoration: 'none' }} {...restProps}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Link
