import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

export default function Home({ homepage }) {
  return (
    <>
      {/* <Head>
        <title>{prismicH.asText(homepage.data.title)}</title>
      </Head> */}
      <SliceZone slices={homepage.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const homepage = await client.getByUID("homepage", "homepage");

  return {
    props: { homepage }, // Will be passed to the page component as props
  };
}
