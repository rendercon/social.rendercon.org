import { inter, kronaOne } from "./fonts";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${kronaOne.variable}  `}>
          <Theme
            accentColor="teal"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
            appearance="dark"
          >
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
