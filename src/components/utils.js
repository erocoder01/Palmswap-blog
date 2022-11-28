import sanity from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export const createURL = (source, width = 352, height = 198) => {
  return builder.image(source).width(width).height(height).url();
};

export const FormatDate = (date) => {
  const options = {
    month: "short",
    day: "numeric",
  };

  let newDate = new Date(date);
  let writtenOut = newDate.toLocaleDateString("en-us", options);

  return writtenOut;
};
