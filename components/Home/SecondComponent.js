import Image from "next/image"
import React from "react"
import styles from "../../styles/Home.module.scss"
import Link from "next/link"

const SecondComponent = ({img1,img2,link1,link2}) => {
    return (
        <div className="container ">
            <div className={styles.second}>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Link href={link1}>
                            <Image src={img1} alt="Special" className="d-block w-100 h-auto" />
                        </Link>
                    </div>
                    <div className="col-md-6 mt-3">
                        <Link href={link2}>
                            <Image src={img2} alt="logo" className="d-block w-100 h-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent
