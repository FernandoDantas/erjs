import Button from '../Button/Button'
import * as SC from './SessionController.styles'

export interface SessionControllerProps {
  name: string;
  description: string;
  onLogout?: () => any
}

function SessionController (props: SessionControllerProps) {
  return <SC.Wrapper>
    <SC.Avatar src="https://www.fernandojr.com.br/img/profile.jpg" />
    <SC.Name>
      { props.name }
    </SC.Name>
    <SC.Description>
      { props.description }
    </SC.Description>
    <Button variant="danger" label="Logout" onClick={props.onLogout} />
  </SC.Wrapper>
}

export default SessionController