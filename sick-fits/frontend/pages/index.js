import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/Sell">
        <a>Sell!</a>
      </Link>
    </div>
  );
};

export default Home;
