import {connect} from 'frontity';

const Theme = ({ state }) => {

  return (
    <Head>
      <meta name="description" content={state.frontity.description} />
      <html lang="en" />
    </Head>
  )
}

export default connect(Theme);
