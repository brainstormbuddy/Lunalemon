import { ShopifySection } from "types/shopify";

export const hero: ShopifySection = {
  name: "Hero",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
    {
      type: "richtext",
      id: "list",
      label: "List",
    },
    {
      type: "image_picker",
      id: "image",
      label: "Image",
    },
    {
      type: "collection",
      id: "collection",
      label: "Collection",
    },
  ],
  presets: [
    {
      name: "Hero",
    },
  ],
};
