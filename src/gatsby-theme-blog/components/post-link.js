/** @jsx jsx */
import { Styled, jsx, useThemeUI } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => {
  const { theme } = useThemeUI()

  return (
    <div
      style={{
        background: theme.colors.linkBackground,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
      <Styled.p>{excerpt}</Styled.p>
    </div>
  )
}

export default PostLink
