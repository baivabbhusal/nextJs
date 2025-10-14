import Header from "@/components/header";
import "./globals.css";
import config from "@/config";
import Footer from "@/components/footer ";

export const metadata = {
  title:{
    default:config.appName,
    template:`${config.appName} | %s`,
  },
  description: "Website to buy clothes",
  keyword: "Online shopping,Best clothing Product,shirt,online shopping in nepal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header />
          <main>
               {children}
            </main>  
        <Footer />  
      </body>
    </html>
   
  );
}
