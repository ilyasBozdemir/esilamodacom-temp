import { Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleClick = () => {
    const simpleSliderElement = document.getElementById("SimpleSlider");
    if (simpleSliderElement) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        speed: 1000, // kaydırma hızı (ms)
        duration: 1000, // animasyon süresi (ms)
      };
      simpleSliderElement.scrollIntoView(scrollOptions);
    }
  };

  useEffect(() => {
   
    const countdownDate = new Date("2023-03-30T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Flex
        alignItems={"space-between"}
        justifyContent={"space-between"}
        textAlign="center"
        width={"100%"}
        borderRadius={"10px"}
        direction={{ base: "column", md: "row" }}
        w={"100%"}
        p={3}
        color={"white"}
        bg={"black"}
        gap={2}
      >
        <Flex justifyContent={"center"}>
          <Text textAlign="center" fontSize={"semibold"}>
            Açılışa Özel %25 indirimli ürünler
          </Text>
        </Flex>

        <Flex
         direction={"row"} 
         justifyContent={"center"} 
         gap={2}
         
         >
          <VStack spacing={-1}>
            <Text fontSize={"semibold"}>{timeLeft.days}</Text>
            <Text color={"gray.400"}> DAY </Text>
          </VStack>
          <VStack spacing={-1}>
            <Text fontSize={"semibold"}>{timeLeft.hours}</Text>
            <Text color={"gray.400"}> HRS </Text>
          </VStack>
          <VStack spacing={-1}>
            <Text fontSize={"semibold"}>{timeLeft.minutes}</Text>
            <Text color={"gray.400"}> MIN </Text>
          </VStack>
          <VStack spacing={-1}>
            <Text fontSize={"semibold"}>{timeLeft.seconds}</Text>
            <Text color={"gray.400"}> SEC </Text>
          </VStack>
        </Flex>

        <Stack>
          <Button
            colorScheme={"blue"}
            onClick={handleClick}
            //display={{ base: "none", md: "initial" }}
          >
            Şimdi Alışveriş Yap!
          </Button>
        </Stack>
      </Flex>
    </>
  );
}

export default CountdownTimer;
