import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  
  const [itens, setItens] = useState([])
  /* useState do React traz duas coisas:
    1. o estado contendo o valor;
    2. a função que atualiza o valor do estado.
    Quando executada, a função também re-renderiza o componente, automaticamente.
    */
  
  async function carregarDadosApi() {
  console.log('CarregarDadosApi')

  const response = await fetch("https://rickandmortyapi.com/api/character/")

  const json = await response.json()

  const results = json.results

  setItens(results)
  }
 
  /* useEffect recebe 2 informações:
    1. função contendo o código que será protegido pelo useEffect;
    2. dependências que controlam  e executam useEffect. Array vazio para executar apenas 1 vez. */
  
  useEffect(function () {
    carregarDadosApi()
  }, []) 

  return (
    <>
   <div className="card-list">
        {itens.map(function (item, index) {
          return <Card item={item} key={`card_${index}`} />
        })}
      </div>
    </>
  )
}

export default App
