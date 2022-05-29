import { Container, Box, Heading } from "@chakra-ui/react"



const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg='lightblue' p={3} mb={6} align='center'>
                Hello I'm a front end web developer student!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                </Box>
            </Box>
            <Heading as="h2" variant='page-title'>
                Emilio
            </Heading>
        </Container >
    )
}
export default Page