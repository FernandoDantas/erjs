import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export default function NavBar () {
  return <nav>
    <List>
      <Item><NavLink exact to="/">home</NavLink></Item>
      <Item><NavLink exact to="/editores">editores</NavLink></Item>
      <Item><NavLink exact to="/posts/criar">novo post</NavLink></Item>
    </List>
  </nav>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  text-decoration: lowercase;
  font-size: 18px;
a{
  text-decoration: none;
  color: #274060;

  &.active{
    color: #09f;
  }
}

`