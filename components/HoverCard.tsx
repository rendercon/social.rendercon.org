"use client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { SiVercel } from "react-icons/si";
import Tilt from "react-parallax-tilt";

type Props = {
  name?: string;
  username: string;
  number: number;
  imageurl: string;
  email: string;
  gradient?: string;
};

export default function HoverCard({
  email,
  imageurl,
  name,
  number,
  username,
  gradient,
}: Props) {
  const [backgroundGradient, setBackgroundGradient] = useState<string>();
  const [headingGradient, setHeadingGradient] = useState<string>(
    "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
  );
  const [previousGradient, setPreviousGradient] = useState<string | undefined>(
    gradient
  );

  const [pendingChange, setPendingChange] = useState<string | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

  const changeGradient = (background: string, heading: string) => {
    // Update the state locally
    setBackgroundGradient(background);
    setHeadingGradient(heading);

    // Store the pending change
    setPendingChange(background);

    // Clear any existing debounce timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new debounce timeout
    const newDebounceTimeout = setTimeout(() => {
      setPendingChange(null);

      // Send request to backend with the last pending change
      if (pendingChange !== null) {
        sendRequestToServer(pendingChange);
      }
    }, 100); // Adjust the debounce time as needed
    // @ts-ignore
    setDebounceTimeout(newDebounceTimeout);
  };

  const sendRequestToServer = async (background: string) => {
    try {
      await fetch("/api/update-bg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ backgroundGradient: background }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Rest of the component code...

  return (
    <>
      <section className=" items-center">
        <div className="sm:px-6 sm:py-6 p-2  ">
          <Tilt
            className={`max-w-[600px] w-full lg:w-[600px] p-4 h-80 border border-gray-500 rounded-xl ${gradient}  ${backgroundGradient} `}
            glareMaxOpacity={0.6}
            glareBorderRadius="10px"
            glareEnable={true}
            glareColor="#385185"
            glarePosition="all"
            glareReverse={true}
          >
            <Box className="flex flex-col justify-around  h-full py-4 font-krona  ">
              <Flex align="center" className=" " justify="between">
                <Box>
                  <Flex gap="4">
                    <Avatar
                      size="3"
                      src={imageurl}
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
                        {name}
                      </Text>
                      <Text
                        as="div"
                        size="2"
                        color="gray"
                        className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-200  text-transparent bg-clip-text"
                      >
                        @ {username}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Text as="p" size="2" weight="bold" className="text-gray-500">
                    # {number.toString().padStart(3, "0")}
                  </Text>
                </Box>
              </Flex>
              <Box className=" bg-opacity-0 flex flex-col items-center   ">
                <Flex gap="1" justify="center" align="center">
                  <Text
                    size="8"
                    className={`sm:text-4xl  font-bold  text-shadow shadow-purple-400 text-transparent bg-clip-text ${headingGradient} `}
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
          </Tilt>
        </div>
      </section>
      <div className="flex gap-2 mt-4 py-4 bg-opacity-30">
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
              "bg-gradient-to-r from-blue-200 via-blue-300 to-green-200"
            )
          }
        >
          NextJs
        </button>
        <button
          onClick={() =>
            changeGradient(
              "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
              "bg-gradient-to-r from-purple-700 via-blue-200 to-purple-400"
            )
          }
        >
          Gatsby
        </button>
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-800 to-black",
              "bg-gradient-to-r from-purple-700 via-blue-200 to-purple-400"
            )
          }
        >
          Vite
        </button>
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-indigo-900 to-black",
              "bg-gradient-to-r from-purple-700 via-blue-200 to-purple-400"
            )
          }
        >
          Remix
        </button>
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-red-900 to-black",
              "bg-gradient-to-r from-purple-700 via-blue-200 to-purple-400"
            )
          }
        >
          Astro
        </button>
        {/* Add more buttons with different gradients */}
      </div>
    </>
  );
}
