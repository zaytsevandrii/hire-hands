import Layout from "../components/Layout"
import "../styles/globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { SessionProvider } from "next-auth/react"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

export default MyApp
