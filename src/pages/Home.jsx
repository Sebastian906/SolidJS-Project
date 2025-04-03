import { createResource } from "solid-js";
import Card from "../components/Card";

const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}

export default function Home() {
    const [products] = createResource(fetchProducts)

    return (
        <div class="grid grid-cols-4 gap-10 my-4">
            <Card rounded={true} flat={false}>
                <h2>Solid Tee, Black</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    ipsam maxime delectus ut sint repellendus.
                </p>
                <button class="btn">View</button>
            </Card>
            <Card rounded={false} flat={true}>
                <h2>Solid Tee, White</h2>
                <button class="btn">View</button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    ipsam maxime delectus ut sint repellendus.
                </p>
                <p>Only $10</p>
            </Card>
            <p>{console.log(products(), products.loading)}</p>
        </div>
    )
}
