import React, { useEffect, useState } from "react"
import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import Hamburger from "./Hamburger"
import LoginModal from "./LoginModal"
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [open, setOpen] = useState(false)
    const { status, data: session } = useSession()

    const closeModal = () => {
        setTimeout(() => setOpen(false), 70)
    }
    const openModal = () => {
        setOpen((prev) => !prev)
    }

    const allClose = () => {
        setShowLoginModal(false)
        setTimeout(() => setOpen(false), 70)
    }
    const handleLoginClick = () => {
        setShowLoginModal(true)
    }

    const handleLoginClose = () => {
        setShowLoginModal(false)
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add("stop-scrolling")
        } else {
            document.body.classList.remove("stop-scrolling")
        }
    }, [open])
    return (
        <>
            <div className={`${open && "overlay-show"}`}></div>
            <div id="mobile-menu" className={`mobile-main-menu ${open && "show-menu"}`}>
                <ul>
                    <Link href="/goods/collections">
                        <li onClick={closeModal}>Серебро</li>
                    </Link>

                    <Link href="/goods/bijouterie">
                        <li onClick={closeModal}>Бижутерия </li>
                    </Link>

                    <Link href="/goods/watch">
                        <li onClick={closeModal}>Часы </li>
                    </Link>

                    <Link href="/goods/bags">
                        <li onClick={closeModal}>Сумки</li>
                    </Link>
                    <Link href="/goods/children-jewelry">
                        <li onClick={closeModal}>Детские украшения</li>
                    </Link>
                    <Link href="/goods/scarves">
                        <li onClick={closeModal}>Шарфы</li>
                    </Link>
                    <Link href="/goods/perfumery">
                        <li onClick={closeModal}>Парфюмерия</li>
                    </Link>
                    <Link href="/goods/natural-stones">
                        <li onClick={closeModal}>Натуральные камни</li>
                    </Link>
                    <Link href="/goods/new-product">
                        <li onClick={closeModal}>Новинки</li>
                    </Link>
                </ul>
                {/* <div className="mobile-menu-info">
                    © 2023
                    <span style={{ fontSize: "18px" }}> 925Kazakhstan</span>
                </div> */}
            </div>
            <div className={styles.navbar} /* ref={modalRef} */>
                <div className="container py-1">
                    <div className="col-sm-12  ">
                        <div className="row">
                            <div className="col-4  d-flex align-items-center">
                                <div className={styles.left}></div>
                                <div className={styles.leftH}>
                                    <Hamburger open={open} openModal={openModal} />
                                </div>
                            </div>
                            <div className="col-4  d-flex align-items-center  justify-content-center">
                                <div className={styles.center}>
                                    <Link href="/">
                                        <Image src={logo} priority width={300} alt="logo" onClick={closeModal} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4  d-flex align-items-center justify-content-end">
                                <div className={styles.right}>
                                    <div className={styles.user}>
                                        {status === "loading" ? (
                                            <Image
                                                src="/user.svg"
                                                alt="user"
                                                width={28}
                                                height={28}
                                                className={styles.img2}
                                                onClick={handleLoginClick}
                                            />
                                        ) : session?.user ? (
                                            session.user.name
                                        ) : (
                                            <Image
                                                src="/user.svg"
                                                alt="user"
                                                width={28}
                                                height={28}
                                                className={styles.img2}
                                                onClick={handleLoginClick}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal show={showLoginModal} handleClose={handleLoginClose} allClose={allClose} />
            </div>
        </>
    )
}

export default Navbar
