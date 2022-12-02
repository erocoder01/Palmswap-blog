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

export const FormatDateOnPostCard = (date) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  let mm = monthNames[newDate.getMonth()];
  let dd = newDate.getDate();

  if (dd < 10) dd = "0" + dd;

  const formattedDate = mm + " " + dd + ", " + yyyy;

  return formattedDate;
};
