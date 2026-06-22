import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Header() {
  return <h1> Welcom to the React course</h1>;
}

function Homepage() {
  return <p> we are super excited to learn react</p>;
}

function Footer() {
  return <p>contact us for more infomation reactlearn@gmail.com !</p>;
}

root.render(
  <div>
    <Header></Header>
    <Homepage></Homepage>
    <Footer></Footer>
  </div>,
);
