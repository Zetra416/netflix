import React from 'react';
import { 
    Container, 
    Inner, 
    Pane, 
    Title, 
    SubTitle, 
    Image, 
    Item 
} from './styles/jumbotron';

//encapsulated compound component
export default function Jumbotron({
    children, 
    direction = 'row', 
    ...restProps }) {
    return (
        <Item>
           <Inner  direction={direction} {...restProps }> {children} </Inner>
        </Item>
    )
}

//compound components
Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps}) {
    return <Pane { ...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title { ...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps}) {
    return <SubTitle { ...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image { ...restProps} />;
}