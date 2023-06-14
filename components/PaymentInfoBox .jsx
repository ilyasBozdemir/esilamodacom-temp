import { Flex } from '@chakra-ui/react'
import React from 'react'

function PaymentInfoBox() {
    return (
        <>
            <Flex
                justifyContent={"space-between"}
                zIndex={10}
                id="payment-info-box"
                as={"section"}
                display={"none"}
            >
                <>Güvenli Ödeme | </>
                <>7/24 Destek | </>
                <>Hızlı ve Güvenli Kargo | </>
                <>Güvenli Alışveriş</>

            </Flex>
        </>
    )
}

export default PaymentInfoBox 