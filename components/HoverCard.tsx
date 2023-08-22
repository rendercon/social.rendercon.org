"use client";
import { Avatar, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import {
  SiAstro,
  SiGatsby,
  SiNextdotjs,
  SiRemix,
  SiVercel,
  SiVite,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import GradientButtons from "./GradientButtons";

type Props = {
  name?: string;
  username: string;
  number: number;
  imageurl: string;
  email: string;
  gradient?: string;
  currentUserEmail?: string;
  selectedIcon?: string;
};

const iconComponents: { [key: string]: React.ReactNode } = {
  nextjs: <SiNextdotjs className="text-2xl text-gray-600 " />,
  gatsby: <SiGatsby className="text-2xl text-purple-400" />,
  remix: <SiRemix className="text-2xl text-white" />,
  astro: <SiAstro className="text-2xl text-white" />,
  vercel: <SiVercel className="text-2xl text-white" />,
  vite: <SiVite className="text-2xl  text-blue-200" />,
};

export default function HoverCard({
  email,
  imageurl,
  name,
  number,
  username,
  gradient,
  currentUserEmail,
  selectedIcon = "nextjs",
}: Props) {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    gradient || ""
  );
  const [icon, setIcon] = useState<string>(selectedIcon || "");
  const [headingGradient, setHeadingGradient] = useState<string>(
    "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
  );

  const [pendingChange, setPendingChange] = useState<string | null>(null);
  const [iconChange, setIconChange] = useState<string | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

  useEffect(() => {
    // This effect is triggered whenever pendingChange changes
    if (pendingChange !== null) {
      updateBg(pendingChange, icon);
    }
  }, [pendingChange, icon]);
  const changeGradient = (background: string, icon: string) => {
    // Update the state locally
    setBackgroundGradient(background);
    setIcon(icon);

    // Store the pending change
    setPendingChange(background);
    setIconChange(icon);

    // Clear any existing debounce timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new debounce timeout
    const newDebounceTimeout = setTimeout(() => {
      setPendingChange(null); // Move this line below the request

      // Send request to backend with the last pending change
      if (pendingChange && iconChange) {
        updateBg(pendingChange, iconChange);
      }
    }, 100); // Adjust the debounce time as needed
    // @ts-ignore
    setDebounceTimeout(newDebounceTimeout);
  };

  const updateBg = async (background: string, icon: string) => {
    const data = {
      backgroundGradient: background,
      icon: icon,
    };
    try {
      const response = await fetch("/api/update-bg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Successfully updated background");
        const json = await response.json();
        console.log(json);
      } else {
        console.error("Failed to update background");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center py-5 sm:gap-44 ">
        <section className=" items-center w-full">
          {/* @ts-ignore */}

          <div className="sm:px-6 sm:py-6 p-2 w-full  ">
            <Tilt
              className={`max-w-[600px] w-full lg:w-[600px] p-4  h-80 border border-gray-500 rounded-xl   ${backgroundGradient} `}
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
                          style={{
                            backgroundClip: "text",
                            color: "transparent",
                          }}
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
                    <Text
                      as="p"
                      size="2"
                      weight="bold"
                      className="text-gray-500"
                    >
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
                      style={{
                        backgroundImage:
                          " linear-gradient(to right, var(--tw-gradient-stops))",
                        backgroundClip: "text",
                        color: "transparent",
                        backgroundColor: "#A5B4FC",
                      }}
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
                      className="text-xs bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text flex items-center gap-2"
                    >
                      <span>Powered by</span>{" "}
                      {icon ? (
                        iconComponents[icon]
                      ) : (
                        <SiVercel className="text-white text-xl dark:text-slate-900" />
                      )}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Tilt>
          </div>
        </section>
        {currentUserEmail === email && (
          <GradientButtons changeGradient={changeGradient} />
        )}
      </div>
    </>
  );
}
