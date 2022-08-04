import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react'

function Modal({
  children,
  isOpen,
  onClose,
  onSubmit,
  title,
  submitButtonTitle,
  ...otherProps
}) {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} {...otherProps}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='teal'>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter alignItems='center'>
            <Button colorScheme='teal' w='100%' onClick={onSubmit}>
              {submitButtonTitle}
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

export default Modal
