import { Box, VStack, Flex, Button, Heading, Image, HStack, Link } from '@chakra-ui/react'
import React from 'react'

const WomenFashion = () => {

    const fashion = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/0b0fe859-b1e4-4b24-8041-8f017889368b.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7c4391e1-0473-495c-bab7-3a0e77e99263.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/ad2f96a1-9285-4f01-8333-05885e44124e.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/01c72a00-ce4a-423a-893b-9623325321fc.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/820b5736-71da-412c-9c0a-a8b9a468f5a8.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/324e3735-84f7-49e3-a7da-51eccdda2048.png?",
        "https://f.nooncdn.com/mpcms/EN0001/assets/28082b27-32d3-4108-904d-99bd2160440c.png?"

    ]
    return (
        <Box mx={3}>
            <VStack align={"flex-start"}>
                <Flex
                    my={2}
                    w={"full"}
                    justifyContent={"space-between"}>
                    <Heading
                        color={"#5a5a62"}
                        filter={"blur(0.4px)"}
                        size={'md'}
                        as={"h2"}>Women's fashion</Heading >
                    <Link href='https://www.noon.com/uae-en/lens-store/'>
                        <Button
                            filter={"blur(0.5px)"}
                            fontSize={"14px"}
                            py={2}
                            h={"fit-content"}
                            bg={"white"}
                            border={"1px solid black"}
                            borderRadius={"none"}>VIEW ALL</Button>
                    </Link>
                </Flex>

                <HStack
                    spacing={3}
                    w={"full"}
                    align={"flex-start"}>
                    {
                        fashion.map((product, idx) => {
                            return <Link key={idx} href='https://www.noon.com/uae-en/lens-store/'> <Image
                                alt="/fashion/women-31229/clothing-16021/womens-tops/fashion-women?sort[by]=popularity&amp;sort[dir]=desc"
                                width="200px"
                                height="280px"
                                src={product}

                            />
                            </Link>
                        })
                    }
                </HStack>
            </VStack>
        </Box>
    )
}

export default WomenFashion