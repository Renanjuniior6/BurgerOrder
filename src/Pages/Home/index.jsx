import React, {Fragment, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import CodeBurguer from '../../assets/burger1.png'
import { Container, ContainerItems, Input, Label, ContainerDad } from './styles'
import MyTitle from '../../components/Title'
import Button from '../../components/Button'


function Home() {
 const [orders, setOrders] = useState([])

 const inputOrder = useRef()
 const inputClient = useRef()
 const navigate = useNavigate()

  async function newOrder() {

    if(inputOrder.current.value !== '' &&  inputClient.current.value !== '') { 

    const {data: newOrder} = await axios.post('http://localhost:3001/order', {
     order: inputOrder.current.value,
     client: inputClient.current.value

    })

     setOrders([...orders, newOrder])

     navigate('/pedido')

  } else (alert("Insira corretamente os dados!"))

} 


  return (
    <ContainerDad> 
    <Container>
      
        <img alt='burguer' src={CodeBurguer}/> 

        <ContainerItems>
       <MyTitle>Faça seu pedido!</MyTitle>
       
       <Label>
        Pedido
        <Input ref={inputOrder} placeholder='1 Coca-Cola, X-Salada'/>
       </Label>

        
       <Label>
        Nome do cliente
        <Input ref={inputClient} placeholder='Camylla'/>
       </Label>

        <Button onClick={newOrder}>Novo pedido</Button>

      </ContainerItems>
    </Container>
    </ContainerDad>
  )
}

export default Home
