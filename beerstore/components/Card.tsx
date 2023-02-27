import IProduct from "@/Interfaces/ProductInterface";
import { Button } from "@ao-internal/components-react";
interface Props{
    Product: IProduct;
}
const Card : React.FC<Props> = ({Product})=>{
    return (
        <div className="card">
            <h3> {Product.name}</h3>
            <p><strong>abv:</strong> {Product.abv}</p>
            <p> <strong>Description:</strong> {Product.description.slice(0,100) + "..."}</p>
            <img src={Product.image_url} alt="" />
            <Button>Press me</Button>
        </div>

 )
}
export default Card;