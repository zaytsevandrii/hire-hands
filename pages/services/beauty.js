import React from "react"
import styles from "../../styles/Services.module.scss"
import ProductItem from "../../components/Services/ProductItem"
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"

const BeautyPage = () => {
    return (
        <>
            <div className={styles.services}>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 formAction mt-3 ">
                            <select className="form-control ">
                                <option value="">Сортировать</option>
                                <option value="priceAsc">Цена: по возрастанию</option>
                                <option value="priceDesc">Цена: по убыванию</option>
                                <option value="new">Новинки</option>
                            </select>
                        </div>
                        <div className="col-lg-12 col-12  mt-2">
                            <div className="row">
                                <ProductItem img1={img1} />
                                <ProductItem img1={img1} />

                                <ProductItem img1={img1} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeautyPage
