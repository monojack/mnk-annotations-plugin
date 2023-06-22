import { definePlugin } from "@monokle/plugin-toolkit";
import { noEmptyAnnotations } from "./rules/1-example.js";

export default definePlugin({
  id: "PAP",
  name: "pap",
  displayName: "Private Annotations Plugin",
  description: "My first private plugin!",
  rules: {
    noEmptyAnnotations
  },
});
