import styled from 'styled-components'
import Background from '../../assets/background-burger.jpg'

export const ContainerDad = styled.div`
background: url(${Background});
background-size: cover;
display: flex;
justify-content: center;
`

export const Container = styled.div`
background: #0A0A10;
width: 365px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
min-height: 100vh;

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
padding: 0 36px;
`

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
padding-left: 15px;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
outline: none;
border: none;
color: #FFFFFF;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-top: 30px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #EEEEEE
`

export const Li = styled.li`
margin-top: 18px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
color: #ffffff;
padding: 17px 27px;
`

export const BoxOrder = styled.div`
display: flex;
flex-direction: column;
gap: 29px;
`

export const MyOrder = styled.p`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
`

export const Client = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
`

export const ButtonDelete = styled.button`
background: none;
border: none;
cursor: pointer;
`