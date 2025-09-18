import React, {Component} from 'react';
import tw from "tailwind-styled-components";
import {ActionBar} from "./ActionBar.jsx";

const PostButton = tw["button"]`
    bg-gray-200 
    hover:bg-gray-300 
    text-black 
    text-sm 
    font-bold 
    py-2 
    px-5 
    rounded-full 
    disabled:opacity-50 
`;

const charLimit = 100;
const yellowOffset = 11;

export class TwitterComposeBox extends Component {

    state = {
        charCount: 0,
        charCountColor: "text-gray-400",
        color: "#1d9bf0",
    }


    textAreaOnChange = (e) => {
        // this.setState({
        //     charCount: e.target.value.length
        // })
        // console.log(this.state.charCount)
        //
        // if (this.state.charCount < charLimit - yellowOffset) {
        //     this.setState({
        //         color: ""
        //     })
        // } else if (this.state.charCount >= charLimit - yellowOffset && this.state.charCount < charLimit) {
        //     this.setState({
        //         color: this.props.containerState.colors.charCountYellow
        //     })
        // } else if (this.state.charCount >= charLimit) {
        //     this.setState({
        //         color: this.props.containerState.colors.charCountRed
        //     })
        // }
        // Wrong and completely bugged method

        const colors = this.props.containerState.colors;
        const newCharCount = e.target.value.length;
        const charsLeft = charLimit - newCharCount;
        let newColor = "";
        let newCharCountColor = "text-gray-400";

        if (charsLeft < 0) {
            newColor = colors.charCountRed;
            newCharCountColor = "text-[" + colors.charCountRed + "]";
        } else if (charsLeft < yellowOffset) {
            newColor = colors.charCountYellow;
        } else {
            newColor = colors.premiumBlue; // Your default value
        }
        
        this.setState({
            charCount: newCharCount,
            charCountColor: newCharCountColor,
            color: newColor
        });

    }

    render() {

        // const {containerState} = this.props;
        const colors = this.props.containerState.colors;

        {
            // console.log(containerState)
            // console.log(colors)
        }

        return (
            <>
                
                <div className="flex-1 text-white">


                    <form action="" className="flex flex-col h-full">

                    <textarea
                        placeholder="What's happening?"
                        className="flex-1 bg-transparent text-white text-xl placeholder-gray-500 focus:outline-none resize-none w-full"
                        onChange={this.textAreaOnChange}
                    />

                        <hr className={`border-t border-[${colors.borderGrey}]`}/>

                        <div className="bg-black w-full max-w-lg mx-auto p-4 text-white">
                            <div className="flex justify-between items-center">
                                <ActionBar/>
                                <div className="flex items-center gap-x-4">
                                    {this.state.charCount ? (
                                        <>
                                            <div className="relative w-8 h-8">
                                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                                    <circle
                                                        cx="18" cy="18" r="15.915"
                                                        className="stroke-current text-gray-700"
                                                        strokeWidth="2"
                                                        fill="transparent"
                                                    ></circle>
                                                    <circle
                                                        cx="18" cy="18" r="15.915"
                                                        className={"stroke-current text-[" + this.state.color + "]"}
                                                        strokeWidth="2"
                                                        fill="transparent"
                                                        strokeDasharray="100"
                                                        strokeDashoffset={charLimit - this.state.charCount < 100 ? charLimit - this.state.charCount : 0}
                                                        strokeLinecap="round"
                                                        transform="rotate(-90 18 18)"
                                                    ></circle>
                                                    <text
                                                        x="18" y="21"
                                                        className={`fill-current ${this.state.charCountColor} text-xs font-bold`}
                                                        textAnchor="middle"
                                                    >
                                                        {charLimit - this.state.charCount < yellowOffset ? charLimit - this.state.charCount : null}
                                                    </text>
                                                </svg>
                                            </div>
                                            <div className="w-px h-8 bg-gray-7-00"></div>
                                        </>
                                    ) : null}
                                    <PostButton>Post</PostButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}