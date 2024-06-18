import { useEffect, useState } from 'react'
import './App.css'
import { Bascet } from './components/Bascet'
import { ProductList } from './components/ProductList'

function App() {
  const [bascet, setBascet] = useState([])
  const [products, setProduct] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3004/products")
    .then(res => res.json())
    .then (res =>{
      setProduct(res)
    })
  }, [])
  
  useEffect(() =>{
    setTotal(bascet.reduce((a,b) => a + b.subtotal,0))
  }, [bascet])

  const moveToCart = id =>{
    let found = products.find(x => x.id === id)
    
    if(!(bascet.find(x => x.id == id))){
      setBascet([...bascet, {...found, count:1}])
      
    }else{
      setBascet([...bascet])
      // bascet.find(x => x.id == id).count++
      setBascet(bascet.find(x => x.id == id).count++)
    }
  }

  const addBook = (id) => {
    setBascet([...bascet])
    // bascet.find(x => x.id == id).count++
    setBascet(bascet.find(x => x.id == id).count++)
  }

  const reduceBook = (id) => {
    setBascet([...bascet])
    if(bascet.find(x => x.id == id).count > 1){
      // bascet.find(x => x.id == id).count--
      setBascet(bascet.find(x => x.id == id).count--)
    }
  }

  const removeBook = id => {
    setBascet(bascet.filter(x => x.id != id))
  }


  return (
    <>
      <div className = "row">
        <ProductList items = {products} onMove = {moveToCart} />
        <Bascet items = {bascet}  onAdd = {addBook} onReduce = {reduceBook} onremove = {removeBook} total = {total}/>
      </div>
    </>
  )
}

export default App
