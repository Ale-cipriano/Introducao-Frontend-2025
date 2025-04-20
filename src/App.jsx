import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Rick Sanchez',                     
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  
  const item2 = {
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const itens = [item1, item2]

  return (
    <>
    <Card item={item1} />
    <Card item={item2} />
       
    </>
  )
}

export default App
