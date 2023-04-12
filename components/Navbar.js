import React from 'react'
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.navbar} ref={modalRef}>
                <div className="container py-1">
                    <div className="col-sm-12  ">
                        <div className="row">
                            <div className="col-4  d-flex align-items-center">
                                <div className={styles.left}>
                                    <Link href="/address" style={{ color: "#fff" }}>
                                        <div className={styles.map}>
                                            <Image src="/loc.svg" alt="search" width={23} height={23} />
                                            <div>
                                                Наши <br />
                                                пунткты выдачи
                                            </div>
                                        </div>
                                    </Link>
                                    <div className={styles.phone}>
                                        <Image src="/phone.svg" alt="search" width={23} height={23} />
                                        <div>
                                            8 775 623 49 63 <br />
                                            горячая линия
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.leftH}>
                                    <Hamburger open={open} openModal={openModal} />
                                </div>
                            </div>
                            <div className="col-4  d-flex align-items-center  justify-content-center">
                                <div className={styles.center}>
                                    <Link href="/">
                                        <Image src={logo} priority width={130} alt="logo" onClick={closeModal} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4  d-flex align-items-center justify-content-end">
                                <div className={styles.right}>
                                    <Image
                                        src="/search.svg"
                                        alt="search"
                                        width={23}
                                        height={23}
                                        className={styles.img1}
                                        onClick={handleSearchClick}
                                    />
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
                                            <div className={styles.userName}>
                                                <DropDownLink
                                                    className={styles.dropdown}
                                                    userName={session.user.name}
                                                    logoutClickHandler={logoutClickHandler}
                                                    session={session}
                                                />
                                                {/* {session.user.name.charAt(0).toUpperCase()} */}
                                            </div>
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
                                    <div className={styles.cart}>
                                        <Link href="/basket" alt="корзина" onClick={closeModal}>
                                            {
                                                /* cart.cartItems.length */ cartItemsCount > 0 && (
                                                    <p>
                                                        {cartItemsCount}
                                                        {/* {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} */}
                                                    </p>
                                                )
                                            }

                                            <Image src="/cart.svg" alt="cart" width={23} height={23} className={styles.img3} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navbar2}>
                    <div className="container  d-flex justify-content-around">
                        <Link href="/goods/collections">
                            <li>Серебро</li>
                        </Link>
                        <Link href="/goods/bijouterie">
                            <li>Бижутерия</li>
                        </Link>
                        <Link href="/goods/watch">
                            <li>Часы</li>
                        </Link>
                        <Link href="/goods/bags">
                            <li>Сумки</li>
                        </Link>
                        <Link href="/goods/children-jewelry">
                            <li>Детские украшения</li>
                        </Link>
                        <Link href="/goods/scarves">
                            <li>Шарфы</li>
                        </Link>
                        <Link href="/goods/perfumery">
                            <li>Парфюмерия</li>
                        </Link>
                        <Link href="/goods/natural-stones">
                            <li>Натуральные камни</li>
                        </Link>
                        <Link href="/goods/new-product">
                            <li>Новинки</li>
                        </Link>
                        <Link href="/goods/checkpage">
                            <li>Check</li>
                        </Link>
                    </div>
                </div>
                <LoginModal show={showLoginModal} handleClose={handleLoginClose} allClose={allClose} />
                <SearchModal show={showSearch} handleClose={handleSearchClose} allClose={allClose} />
            </div>
  )
}

export default Navbar