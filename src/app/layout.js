import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Clínica Médica",
  description: "Empresa",
  charset: 'UTF-8',
  author: 'Leticia Andrade',
  keywords: 'saúde e bem-estar, consultório médico'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head rel="icon" href="favicon.ico"/>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}