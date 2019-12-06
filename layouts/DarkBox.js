/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <div
    sx={{
      width: '100vw',
      height: '100vw',
      p: 4,
    }}
    css={{
      background: 'conic-gradient(#141414, #212121, #212121, #141414);'
    }}
  >
  <div sx={{
    p: 4,
    color: 'gray.2',
    width: "full",
    height: "full",
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'}}
    css={{
      backgroundColor: '#141414',
    }}>
    {children}
    </div>
  </div>
)