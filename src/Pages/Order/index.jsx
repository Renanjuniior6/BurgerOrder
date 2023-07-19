import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import MyTitle from '../../components/Title'
import { Container, ContainerItems, Li, BoxOrder, MyOrder, Client, ButtonDelete, ContainerDad } from './styles'
import ImgOrder from '../../assets/burger (1) 1.png'
import Button from '../../components/Button'
import Trash from '../../assets/18297 4.svg'

function Order(){
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders(){
      const {data: newOrders} = await axios.get('https://api-code-burguer.vercel.app/order')

      setOrders(newOrders)
    }

    fetchOrders()

  }, [])

  async function deleteOrder(orderId){
     
    await axios.delete(`https://api-code-burguer.vercel.app/order/${orderId}`)

    const deletedOrders = orders.filter((order) => order.id !== orderId )

    setOrders(deletedOrders)
  }


  async function navegar(){
  navigate('/')
}


    return (
      <ContainerDad> 
        <Container>
      
        <img alt='burguer' src={ImgOrder}/> 

        <ContainerItems>
        <MyTitle>Pedidos</MyTitle>

        <ul>
          {orders.map(order => (
            <Li key={order.id}>
            <BoxOrder> <MyOrder>{order.order}</MyOrder> <Client>{order.client}</Client> </BoxOrder>
             <ButtonDelete onClick={() => deleteOrder(order.id)}> <img src={Trash} /> </ButtonDelete>
            </Li>
          ))}
        </ul>

        <Button onClick={navegar} isBack={true}>Voltar</Button>

      </ContainerItems>
    </Container>

    </ContainerDad>
    )
}

export default Order