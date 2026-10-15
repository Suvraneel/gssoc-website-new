import { Accordion } from "@chakra-ui/react";
import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FaQuestionCircle } from "react-icons/fa";

const subscribe = () => () => {};

const DiabloAccordion = ({ question, answer }) => {
  const { theme } = useTheme();
  // theme is undefined during prerender, so keep the light colours while
  // hydrating (consistent markup), then switch to the stored theme.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDarkMode = mounted && theme === "dark";

  return (
    <Accordion.Root collapsible className="drop-shadow-xl">
      <Accordion.Item
        value="item"
        m={3}
        color={isDarkMode ? "#FFA500" : "#FFF"}
        backgroundColor={isDarkMode ? "#131313" : "#F97316"}
        borderColor="inherit"
        className="flex flex-col w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 border mx-auto! my-[5px] p-2.5 rounded-tl-[20px] rounded-br-[20px] border-solid border-[#ccc]"
      >
        <Accordion.ItemTrigger
          px={4}
          gap={0}
          fontWeight="inherit"
          textAlign="center"
          borderRadius="0"
          _hover={{ bg: "blackAlpha.50" }}
          className="w-full flex flex-row items-center justify-between"
        >
          <div className="flex flex-row justify-between items-center">
            <FaQuestionCircle className="relative mr-[20px]" />
            {question}
          </div>
          <Accordion.ItemIndicator color="inherit" className="ml-[30px]" />
        </Accordion.ItemTrigger>

        <Accordion.ItemContent borderRadius="0">
          <Accordion.ItemBody
            px={4}
            pb={4}
            className="w-full text-left"
            color={isDarkMode ? "#CCCCCC" : "#FFF"}
            backgroundColor={isDarkMode ? "#131313" : "transparent"}
          >
            {answer}
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default DiabloAccordion;
