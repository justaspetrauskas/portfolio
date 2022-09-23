import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: new Date().toJSON().slice(0, 10), // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_PERSONAL_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
