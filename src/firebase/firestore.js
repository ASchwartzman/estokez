import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase-config'

export async function addEstoqueItem(newItem) {
  try {
    let estoqueCollectionRef = collection(db, 'estoque')
    let result = await addDoc(estoqueCollectionRef, newItem)
    return result
  } catch (error) {
    return error
  }
}

export function getItemsEstoque(setAllItems, setItems) {
  try {
    let estoqueCollectionRef = collection(db, 'estoque')

    let unsubscribe = onSnapshot(estoqueCollectionRef, (snapshot) => {
      let data = []
      snapshot.docs.map((doc) => {
        let item = doc.data()
        let id = doc.id
        data.push({ id: id, ...item })
      })
      setAllItems(data)
      setItems(data)
    })

    return unsubscribe
  } catch (error) {}
}
