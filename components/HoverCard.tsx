"use client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import {
  SiAstro,
  SiGatsby,
  SiNextdotjs,
  SiRemix,
  SiVercel,
  SiVite,
  SiReact,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import GradientButtons from "./GradientButtons";
import { toPng } from "html-to-image";
import DownloadImage from "./DownloadImage";
import CopyToClipboard from "./Copy";

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
  react: <SiReact className="text-2xl text-white" />,
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
  selectedIcon,
}: Props) {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    gradient ||
      "bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-pleb-500  via-slate-950 to-black"
  );
  const [icon, setIcon] = useState<string>(selectedIcon || "");

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
      setPendingChange(null);

      // Send request to backend with the last pending change
      if (pendingChange && iconChange) {
        updateBg(pendingChange, iconChange);
      }
    }, 100); // Adjust the debounce time as needed
    // @ts-ignore
    setDebounceTimeout(newDebounceTimeout);
  };
  //update bg function
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

  //get the ref of the div
  const imageRef = useRef<HTMLDivElement>(null);

  const htmlToImageConvert = () => {
    toPng(imageRef.current!, {
      backgroundColor: "none",

      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${username}-RenderCon-Ticket.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center py-5 sm:gap-44  ">
        <section className=" items-center w-full">
          <div className="sm:px-6 sm:py-6  w-full" ref={imageRef}>
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
                          as="div"
                          size="2"
                          className=" text-purple-200 text-shadow shadow-purple-300"
                        >
                          @{username}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Text
                      as="p"
                      size="2"
                      weight="bold"
                      className="text-neutral-200 font-mono text-shadow shadow-purple-200 "
                    >
                      #{number.toString().padStart(4, "0")}
                    </Text>
                  </Box>
                </Flex>
                <Box className=" bg-opacity-0 flex flex-col items-center   ">
                  <Flex gap="1" justify="center" align="center">
                    <Text
                      className={`sm:text-4xl  font-bold  text-purple-200 text-shadow shadow-purple-300  text-3xl  `}
                    >
                      RenderCon
                    </Text>

                    <Text
                      as="span"
                      //  text-fuchsia-400  font-bold shadow-red-400 text-shadow-lg
                      className=" text-5xl sm:text-5xl text-rendercon-wordings font-bold"
                    >
                      24
                    </Text>
                  </Flex>
                  <Flex className="">
                    <Text
                      as="p"
                      weight="light"
                      className="text-xs font-light text-rendercon-wordings  py-1"
                    >
                      4 - 5 Octo, 2024 • Nairobi, Kenya
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex justify="between">
                    {/*   text-red-200 text-shadow shadow-red-500 */}
                    <Text
                      as="p"
                      weight="light"
                      className="text-xs text-rendercon-wordings "
                    >
                      React Reimagined
                    </Text>
                    <Text
                      as="p"
                      weight="light"
                      className="text-xs  text-rendercon-wordings flex items-center gap-2"
                    >
                      <span>Powered by</span>{" "}
                      {icon ? (
                        iconComponents[icon]
                      ) : (
                        <SiReact className="text-white text-xl dark:text-slate-900" />
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
      {currentUserEmail === email && (
        <div className="flex justify-center items-center py-4 gap-4 flex-col sm:flex-row">
          <DownloadImage htmlToImageConvert={htmlToImageConvert} />
          <CopyToClipboard
            textToCopy={`https://social.rendercon.org/share/${username}`}
          />
        </div>
      )}
    </>
  );
}
