import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../layouts/main";

const Website = ({ Component, pageProps, router })=>{
    return (
        <ChakraProvider>
            <Layout router ={router}></Layout>
            <Component {...pageProps} key ={router.route} />
        </ChakraProvider>
    )
}

export default Website