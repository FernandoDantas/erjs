import * as P from './Profile.styles'

export interface ProfileProps {
  name: string;
  description: string;
  editorId: number;
}

function Profile (props: ProfileProps) {
  return <P.Wrapper tabIndex={0} to={`/editores/${props.editorId}`}>
    <P.Avatar src="https://www.fernandojr.com.br/img/profile.jpg" />
    <P.Info>
      <P.Name>{ props.name }</P.Name>
      <P.Description>{ props.description }</P.Description>
    </P.Info>
  </P.Wrapper>
}

export default Profile