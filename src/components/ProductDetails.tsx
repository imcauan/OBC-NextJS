import { IProduct } from "@/services/products"
import Image from "next/image"
import { useState } from "react"
import { Button, Col, Row } from "reactstrap"
import SuccessToast from "./SuccessToast"

interface IProductDetailsProps {
  product: IProduct
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false) 

  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>
        
        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">In Stock: {product.inStock}</span>
        </p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 3)
          }}
        >
          Buy now
        </Button>

        <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
      </Col>
    </Row>
  )
}

export default ProductDetails