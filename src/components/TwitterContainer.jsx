import React, {Component} from 'react';
import tw from "tailwind-styled-components";
import {TwitterComposeBox} from "./TwitterComposeBox.jsx";
import defaultProfilePic from "../assets/default_profile_400x400.png";
import "../mycss.css"

const Container = tw["div"]`
    flex 
    p-4 
    gap-4
    w-[600px]
    h-[400px]
    bg-black
    border
    border-solid
    border-[#2F3336]
`

const Avatar = tw["img"]`
    w-12 
    h-12 
    rounded-full 
    object-cover
`

const TestComponent = tw["h1"]`
    mb-5
    text-center
    text-[yellow]
    myTestCss
`

class TwitterContainer extends Component {
    
    state = {
        colors: {
            borderGrey: "#2F3336",
            textRed: "#8a0d20",
            premiumBlue: "#1d9bf0",
            charCountRed: "#de1e2a",
            charCountYellow: "#ffd401",
        }
    }
    
    render() {
        return (
            <><TestComponent>Test</TestComponent>
            <Container className={"border-[" + this.state.colors.borderGrey + "]"}>
                <div>
                    <Avatar src={defaultProfilePic} alt="Avatar's pic"/>
                </div>
                <TwitterComposeBox containerState={this.state}>
                    
                </TwitterComposeBox>
            </Container>
            </>
        );
    }
}

export default TwitterContainer;