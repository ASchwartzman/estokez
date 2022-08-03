import { collection, addDoc, doc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore'
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
    let q = query(estoqueCollectionRef, orderBy('caixa', 'asc'))
    let unsubscribe = onSnapshot(q, (snapshot) => {
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
  } catch (error) {
    console.log(error)
  }
}

export async function removeEstoqueItem(id) {
  try {
    // let estoqueCollectionRef = collection(db, 'estoque')
    let docRef = doc(db, 'estoque', id)
    let result = await deleteDoc(docRef)

    return result

  } catch (error) {
    console.log(error)
    return null
  }

}
