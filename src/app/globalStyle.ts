"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Unbounded:wght@200..900&display=swap');

$Pacifico-font : 'Pacifico', cursive;
$Raleway-font : 'Raleway', sans-serif;
$Noto-Korean : 'Noto Sans KR', sans-serif;

@font-face {
    font-family: 'TheJamsil';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'TheJamsil';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil4Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'TheJamsil';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil3Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}


// variables
$Jamsil-font : 'TheJamsil', sans-serif;
$darkMode-button : rgba(154,154,154,0.2);
$darkFont-Color: #fff;
$lightFont-Color: #000;


*{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

    // 스크롤바 디자인
    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: #fff;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #5f5f5f;
        display: block;
    }
    
    body{
        background-color: #fff;
        height: 100%;

        main{
            position: relative;
            top : 0;
            left : 0;
            width : 100%;
            height : 100%;
            display: block;
        }

        .theme{
            transition : all 0.5s ease-out;
        }

        // 검정 테마 디자인 요소
        .dark{
            background-color: #000;
            
            a, p, h1, h2, h3, span, svg{
                color: $darkFont-Color;
            }

            input, textarea{
                color: $darkFont-Color;

                &::placeholder {
                    color: $darkFont-Color;
                }
            }

            .Preview-container{
                background-color: #000;
                color: $darkFont-Color;
                
                &::-webkit-scrollbar-thumb{
                    background-color: #000;
                }
            
                &::-webkit-scrollbar{
                    background-color: #fff;
                }
            }

            .AddNotice-button{
                a{
                    background-color: $darkMode-button;
                    color: $darkFont-Color;
                }
            }

            .NoticeList-button{
                a{
                    background-color: $darkMode-button;
                }
            }

            .login-Boxline{

                .line-text{
                    background-color: #000;
                }
            }

            .Navbar-container{
                background-color: #000;
                transition: all 0.5s ease-in;
            }

            .upload-button{
                h1{
                    background-color: $darkMode-button;
                }
            }

            .form-header{
                .submit-button{
                    button{
                        background-color: $darkMode-button;
                    }
                }
            }

            .viewChannel-button{
                background-color: $darkMode-button;
            }

            .Skeleton-thumbnail{
                background-color: rgba(113, 113, 113, 0.2);
                animation : darkMode_thumbnail 1s linear infinite;

                @keyframes darkMode_thumbnail {
                    0% {
                        background-color: rgba(113, 113, 113, 0.2);
                    }

                    100% {
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                }
            }

            .Skeleton-infoBox{
                .Skeleton-title{
                    background-color: rgba(113, 113, 113, 0.2);
                    animation : darkMode_title 1s linear infinite;

                    @keyframes darkMode_title {
                        0% {
                            background-color: rgba(113, 113, 113, 0.2);
                        }

                        100% {
                            background-color: rgba(255, 255, 255, 0.2);
                        }
                    }
                }

                .Skeleton-channel{
                    background-color: rgba(113, 113, 113, 0.2);
                    animation : darkMode_channel 1s linear infinite;

                    @keyframes darkMode_channel {
                        0% {
                            background-color: rgba(113, 113, 113, 0.2);
                        }

                        100% {
                            background-color: rgba(255, 255, 255, 0.2);
                        }
                    }
                }
            }
        }

        // 밝은 테마 디자인 요소
        .light{
            background-color: #fff;

            a, p, h1, h2, h3, span, svg{
                color: $lightFont-Color;
            }

            .Preview-container{
                background-color: #fff;

                &::-webkit-scrollbar-thumb{
                    background-color: #000;
                }
            
                &::-webkit-scrollbar{
                    background-color: #fff;
                }
            }

            .login-Boxline{

                .line-text{
                    background-color: #fff;
                }
            }

            .AddNotice-button{
                a{
                    border : none;
                    background-color : #000;
                    color : #fff;
                }
            }

            .NoticeList-button{
                border : 2px solid #fff;
                color: #fff;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }

            .viewChannel-button{
                background-color: rgba(0, 0, 0, 0.8);
            }

            .Skeleton-thumbnail{
                background-color: #cbcbcb;
                animation : lightMode_thumbnail 1s linear infinite;

                @keyframes lightMode_thumbnail {
                    0%{
                        background-color: #cbcbcb;
                    }

                    100% {
                        background-color: #777777;
                    }
                }
            }

            .Skeleton-infoBox{

                .Skeleton-channelImg {
                    background-color: #b5b5b5;

                    animation : lightMode_title 1s linear infinite;

                    @keyframes lightMode_channelImg {
                        0%{
                            background-color: #b5b5b5;
                        }

                        100% {
                            background-color: #777777;
                        }
                    }
                }
                .Skeleton-title{
                    background-color: #b5b5b5;

                    animation : lightMode_title 1s linear infinite;

                    @keyframes lightMode_title {
                        0%{
                            background-color: #b5b5b5;
                        }

                        100% {
                            background-color: #777777;
                        }
                    }
                }

                .Skeleton-channel{
                    background-color: #b5b5b5;

                    animation : lightMode_channel 1s linear infinite;

                    @keyframes lightMode_channel {
                        0%{
                            background-color: #b5b5b5;
                        }

                        100% {
                            background-color: #777777;
                        }
                    }
                }
            }
        }
    }
}

nav{
    font-family: $Raleway-font;
}

header {
    position: sticky;
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #e9ecef;
    z-index: 1100;
}

footer{
    position: relative;
    width: 100%;
    height: 30rem;
    background-color: var(--colorMain);
    padding : 2rem 6.25rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width : 768px) {
        position: relative;
        width: 100%;
        height: 42rem;
        padding : 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

section{
    position: relative;
    display: inline-block;
    width : 100%;
    height : max-content;
}

:root {
    --colorMain: #2D3A8C;
    --chatColor: #f5f5f5;
}
`;
