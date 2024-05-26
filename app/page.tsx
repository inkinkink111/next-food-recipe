import ImageSlideShow from "@/components/image/ImageSlideShow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-center relative w-full h-full gap-8 mt-10 ">
        <ImageSlideShow />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
              NEXTFOOD Recipe for Foodies
            </h1>
            <p className="text-3xl text-slate-200">
              Cook & share food from all over the world.
            </p>
          </div>
          <div className="context">
            <Button variant="link">
              <Link href="/community">Join the community</Link>
            </Button>
            <Button variant="green">
              <Link href="/meals">Explore Recipes</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center ">
        <section className="flex flex-col">
          <h2>How it works</h2>
          <p>
            NextFood is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers from all over the world.
          </p>
          <p>
            NextFood is a place to discover new dishes, Explore some new recipes
            with our community.
          </p>
        </section>

        <section className="flex flex-col">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
