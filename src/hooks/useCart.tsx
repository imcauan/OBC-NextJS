import { IProduct } from "@/services/products";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ICart {
    cart: IProduct[]
    addProduct: (product: IProduct) => void
    removeProduct: (productId: number) => void
}

const CartContext = createContext<ICart>({} as ICart)

export const CartContextProvider = (props: {
    children?: ReactNode
}) => {
    const [cart, setCart] = useState<IProduct[]>([])

    useEffect(() => {
        const storedCart = localStorage.getItem('shopping-cart')

        if(storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    const addProduct = (product: IProduct) => {
        const updatedCart = [...cart, product]
        localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
        setCart(updatedCart)
    }

    const removeProduct = (productId: number) => {
        const productIndex = cart.findIndex(product => product.id === productId)
        
        if(productIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart.splice(productIndex, 1)
            localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
            setCart(updatedCart)
        }
    }

    return (
        <CartContext.Provider 
            value={{cart, addProduct, removeProduct}}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)