import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>Yo</p>;
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-32">{children}</div>
        {/* <Modal label="Modal test title" content={content} isOpen={false} /> */}
        {/* important les deux ci-dessous ne seront pas rendered sur l'écran si 
        le isOpen n'est pas set à true
        cf Modal.tsx avec
        if (!isOpen) {
          return null;
        } */}
        <LoginModal />
        <SignUpModal />
        <AddPropertyModal />
      </body>
    </html>
  );
}
