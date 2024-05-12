import { Seo } from "@/ui/components/seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Seo
        title="premier composant"
        description="Coders Monkey is a blog for coders"
      />
      <h1> Hello world </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        laboriosam soluta ut pariatur quae fugit qui, in natus asperiores
        impedit quibusdam ipsa commodi repellendus officia amet tempora modi
        quam laborum.{" "}
      </p>
    </>
  );
}
