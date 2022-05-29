import { useEffect } from 'react'
import { connect } from 'frontity';
export const Post = ( { actions }) => {
  useEffect(() => {
    console.log(actions.source);
    //actions.source.fetch("/");
  }, [actions.source]);
  return (
    <div>321321</div>
  )
}
export default connect(Post);
