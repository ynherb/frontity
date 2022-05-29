import { useEffect } from 'react'
import { connect } from 'frontity';
export const Error = ( { actions }) => {
  useEffect(() => {
    console.log(actions.source);
    //actions.source.fetch("/");
  }, [actions.source]);
  return (
    <div>400 not found</div>
  )
}
export default connect(Error);
