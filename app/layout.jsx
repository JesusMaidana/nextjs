import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "mi proyecto",
  description: "Esta es la pag principal",
  keywords: "tienda, online, ecommerce",
};
const roboto = Roboto ({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
