import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "s8507rxu",
  dataset: "production",
  apiVersion: "2023-06-05",
  useCdn: true,
  token:
    "skJPwskND4UwXtiYp5tLHCJt0pWf5XIWRvgdmPKS00SDafMtfijfI2zB7Fa4r93C5zm34JNQIfa3HSJEPLfDYhn6MTNNuIS1M2g3k21hm4dD5JQmwFBTBgTyqWPDob3jGhQszaxbo5qKnH3sWgMZmyMvv9gxFewnelOICuTdGVmmdpwLPvxm",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
