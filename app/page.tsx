import HoverCard from "@/components/HoverCard";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { kronaOne } from "./fonts";
import { SiVercel } from "react-icons/si";
export default function Home() {
  return (
    <section className=" items-center">
      <div className="sm:px-6 sm:py-6 p-2 ">
        <HoverCard backgroundColor="red" direction="flex-col" left="0">
          <Box className="flex flex-col justify-around  h-full py-4 font-krona  ">
            <Flex align="center" className=" " justify="between">
              <Box>
                <Flex gap="4">
                  <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text
                      as="div"
                      size="2"
                      weight="bold"
                      className="
                    "
                    >
                      human
                    </Text>
                    <Text
                      as="div"
                      size="2"
                      color="gray"
                      className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-200  text-transparent bg-clip-text"
                    >
                      @nzaih1999
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Text as="p" size="2" weight="bold" className="text-gray-500">
                  #001
                </Text>
              </Box>
            </Flex>
            <Box className=" bg-opacity-0 flex flex-col items-center   ">
              <Flex gap="1" justify="center" align="center">
                <Text
                  size="8"
                  className="sm:text-4xl  font-bold  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-shadow shadow-purple-400 text-transparent bg-clip-text "
                >
                  RenderCon
                </Text>

                <Text
                  as="span"
                  className=" text-5xl sm:text-5xl  bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800 font-bold"
                >
                  23
                </Text>
              </Flex>
              <Flex className="">
                <Text
                  as="p"
                  weight="light"
                  className="text-xs font-light bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text"
                >
                  29 - 30 Sept, 2023 • Nairobi, Kenya
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="between">
                <Text
                  as="p"
                  weight="light"
                  className="text-xs  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text"
                >
                  React Reimagined
                </Text>
                <Text
                  as="p"
                  weight="light"
                  className="text-xs  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text  flex items-center gap-2"
                >
                  <span>Powered by</span>{" "}
                  <SiVercel className="text-white text-xl dark:text-slate-900" />
                </Text>
              </Flex>
            </Box>
          </Box>
        </HoverCard>
      </div>
    </section>
  );
}
