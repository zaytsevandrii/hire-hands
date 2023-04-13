import React, { useContext, useEffect, useReducer, useState } from "react"
import Image from "next/image"
import img1 from '../../public/img1.jpg'
import Meta from "../../components/Meta"

const PostScreen = () => {
    return (
        <>
            <Meta/>
            <div className="container ">
                <div>
                    <div className="row">
                        <div className="col-md-5 mt-3 card2">
                        </div>
                      
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-3 card2">
                            <Image src={img1}  width={500} height={500} className="w-100 h-auto" />
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="row">
                                <h2>The best lashes in country</h2>
                            </div>
                            <div className="row">
                                <p>Price: 11111 ₸</p>
                            </div>

                            <div className="row">
                                <p>Name: </p>
                            </div>
                            <div className="row">
                                <p>Location: </p>
                            </div>
                            <div className="row">
                                <p>Category: </p>
                            </div>
                            <div className="row">
                                <p>Contact: </p>
                            </div>
                            <div className="row">
                                <p>Description: </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostScreen


