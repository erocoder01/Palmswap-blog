import categories from "./categories";
import readtime from "./readtime";

export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .error("Title must be at least 5 characters long!"),
        Rule.required()
          .max(100)
          .warning("Title should not be over 100 characters"),
      ],
    },

    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [...categories],
      },
      validation: (Rule) => Rule.required().error("Choose an category"),
    },
    {
      title: "Estimated Read time",
      name: "readtime",
      type: "string",
      options: {
        list: [...readtime],
      },
      validation: (Rule) =>
        Rule.required().error("Estimated read time is required"),
    },

    {
      title: "Short Description or part of Content",
      name: "excerpt",
      type: "text",

      validation: (Rule) => [
        Rule.required().error("Short Description is required"),
        Rule.max(120).error("Excerpt must be less than 120 characters long"),
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error("Content is required"),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required().error("Image is required"),
    },
  ],
};
