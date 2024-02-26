import { useCart } from "@/hooks/useCart"
import { IProduct } from "@/services/products"
import Image from "next/image"
import { Button, Col, Row } from "reactstrap"

interface ICartEntry {
    product: IProduct
    quantity: number
}

const CartTableRow = (props: {
    entry: ICartEntry
}) => {
    const {addProduct, removeProduct} = useCart()
  return (
    <tr>
        <td>
            <Row className="align-items-center">
                <Col xs={4} md={2} lg={1}>
                    <Image
                        src={props.entry.product.imageUrl}
                        alt={props.entry.product.name}
                        height={500}
                        width={600}
                    />
                </Col>
                <Col xs={8} md={10} lg={11}>
                    {props.entry.product.name}
                </Col>
            </Row>
        </td>
        <td>R$ {props.entry.product.price}</td>
        <td>{props.entry.quantity}</td>
        <td>R$ {(props.entry.product.price * props.entry.quantity)}</td>
        <td>
            <Button 
                color="primary"
                size="sm"
                onClick={() => addProduct(props.entry.product)}
            >
                +
            </Button>
            <Button 
                color="danger"
                size="sm"
                onClick={() => removeProduct(props.entry.product.id)}
            >
                -
            </Button>
        </td>
    </tr>
  )
}

export default CartTableRow