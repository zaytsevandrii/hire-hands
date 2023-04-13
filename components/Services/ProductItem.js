import Image from "next/image"
import styles from "../../styles/Services.module.scss"
import Link from "next/link"

const ProductItem = ({ img1 }) => {
    return (
        <li className="col-md-6 col-lg-4 col-12">
            <div className="card border-0 p-1 ">
                <Link href='/product/1'>
                    <Image src={img1} alt="ring" className="d-block w-100 h-auto " width={710} height={400} />
                </Link>

                <div className="card-body p-2">
                    <h5>Your the best sevice lashes with best price</h5>

                    <div className="d-flex justify-content-between">
                        <p>Price:</p>
                        <p className="card-text">1111 £</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductItem
