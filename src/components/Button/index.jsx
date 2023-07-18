import React from  'react'
import {MyButton} from './styles'

function Button({children, ...props}) {

    return <MyButton {...props}>{children}</MyButton>
}

export default Button 