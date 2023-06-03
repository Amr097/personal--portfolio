import "./styles/index.css";
import "./styles/App.scss";

export const metadata = {
  title: "Amr Abdelghany",
  description: "Amr Abdelghany personal Portfolio website",
  icons: {
    icon: "./images/letter-a.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
