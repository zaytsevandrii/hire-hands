import styles from "../styles/Home.module.scss"
import Meta from "../components/Meta"
import SecondComponent from "../components/Home/SecondComponent"
import img1 from '../public/home/img1.jpg'
import img2 from '../public/home/img2.jpg'
import img3 from '../public/home/img3.jpg'
import img4 from '../public/home/img4.jpg'
import img5 from '../public/home/img5.jpg'
import img6 from '../public/home/img6.jpg'
import img7 from '../public/home/img7.jpg'
import img8 from '../public/home/img8.jpg'
import img9 from '../public/home/img9.jpg'
import img10 from '../public/home/img10.jpg'

export default function Home() {
    const link1='/services/beauty'
    const link2='/'
    return (
        <>
            <Meta />
            <SecondComponent img1={img1} img2={img2} link1={link1} link2={link2}/>
            <SecondComponent img1={img5} img2={img4} link1={link1} link2={link2}/>
            <SecondComponent img1={img3} img2={img6} link1={link1} link2={link2}/>
            <SecondComponent img1={img7} img2={img8} link1={link1} link2={link2}/>
            <SecondComponent img1={img9} img2={img10} link1={link1} link2={link2}/>
        </>
    )
}
