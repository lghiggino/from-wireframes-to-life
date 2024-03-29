import React from 'react';
import Link from "next/link"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Layout from '../../src/Layout';
import Layout2, {siteTile2} from '../../src/DraweAndAppBarLayout'


export default function MyComponent() {
  const theme = useTheme();
  const matches0 = useMediaQuery(theme.breakpoints.up('xs'));
  const matches1 = useMediaQuery(theme.breakpoints.up('sm'));
  const isActiveMQ1 = useMediaQuery("(max-width: 200px")

  return (
    <Layout2>
      <h1>App</h1>
      <span>{`theme.breakpoints.up('sm') matches: ${matches1}`}</span>;
      {isActiveMQ1 && <p>This MQ shows ONLY when the screen is super small</p>}
      {matches0 && <p>This is a media query generated paragraph if the theme breakpoint is bigger than XS - which is always!</p>}
      {matches1 && <p>This is a media query generated paragraph if the theme breakpoint is bigger than SM!</p>}
      <Link href="/materialUI">back to materialUI index</Link>
    </Layout2>
  )
}