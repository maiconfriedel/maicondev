import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export default merge(defaultThemeColors, {
  modes: {
    dark: {
      linkBackground: "#333",
    },
  },
  linkBackground: "#eee",
  highlight: "#ddd",
})
