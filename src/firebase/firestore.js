import { Toast } from '@chakra-ui/react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase-config'

export async function addEstoqueItem(newItem) {
  try {
    let estoqueCollectionRef = collection(db, 'estoque')
    let result = await addDoc(estoqueCollectionRef, newItem)
    return result
  } catch (error) {
    // console.log(error)
    return error
  }
}
