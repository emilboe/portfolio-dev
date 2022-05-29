import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../layouts/main";
import { useColorModeValue } from '@chakra-ui/react'
import './styles.css'

const Website = ({ Component, pageProps, router }) => {
    const bgcolor = useColorModeValue('#292929', 'antiquewhite')
    return (
        <ChakraProvider>
            <Layout router={router}></Layout>
            <Component {...pageProps} key={router.route} />
            <style jsx global>{`
                body {
                    background: ${bgcolor};
                }
            `}</style>
        </ChakraProvider>
    )
}

export default Website