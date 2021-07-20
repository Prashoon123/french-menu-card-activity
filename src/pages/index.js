import Head from "next/head";
import Category from "../components/Category";
import { server } from "../config";

export default function Home({ starters, salads, dishes, drinks, deserts }) {
  return (
    <div>
      <Head>
        <title>French Menu Card</title>
        <meta
          name="description"
          content="This website will give you the names of some French dishes!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="font-bold text-4xl m-12">Les idées de menus</h1>

        <div className="m-12">
          <Category name="Hors-d'oeuvre" data={starters} />
          <Category name="Salades" data={salads} />
          <Category name="Plats" data={dishes} />
          <Category name="Boissons" data={drinks} />
          <Category name="Desserts" data={deserts} />
        </div>
      </main>

      <footer className="text-center mb-5">
        <p>Made by Prashoon Bhattacharjee</p>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const starters = await fetch(`${server}/api/starters`).then((res) =>
    res.json()
  );
  const salads = await fetch(`${server}/api/salads`).then((res) => res.json());
  const dishes = await fetch(`${server}/api/dishes`).then((res) => res.json());
  const drinks = await fetch(`${server}/api/drinks`).then((res) => res.json());
  const deserts = await fetch(`${server}/api/desserts`).then((res) =>
    res.json()
  );

  return {
    props: {
      starters,
      salads,
      dishes,
      drinks,
      deserts,
    },
  };
}
