"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;800&display=swap');

$Raleway-font : 'Raleway', sans-serif;
$Noto-Korean : 'Noto Sans KR', sans-serif;


*{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

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

        .dark{
            background-color: #000;
            color: #fff;
            
            a, p, h1, h2, span, svg{
                color: #fff;
            }

            input, textarea{
                color: #fff;
            }

            .Preview-container{
                background-color: #000;
                color: #fff;

                &::-webkit-scrollbar-thumb{
                    background-color: #000;
                }
            
                &::-webkit-scrollbar{
                    background-color: #fff;
                }
            }

            .AddNotice-button{
                a{
                    background-color: #fff;
                    color : #000;
                }
            }

            .NoticeList-button{
                a{
                    background-color: rgba(154,154,154,0.2);
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
                    background-color: rgba(154,154,154,0.2);
                }
            }

            .form-header{
                .submit-button{
                    button{
                        background-color: rgba(154,154,154,0.2);
                    }
                }
            }

            .viewChannel-button{
                background-color: rgba(255, 255, 255, 0.2);
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

        .light{
            background-color: #fff;

            a{
                color: #000;
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
                    background-color: #000;
                    color : #fff;
                }
            }

            .NoticeList-button{
                a{
                    background-color : rgba(0,0,0,0.7);
                }
            }

            .upload-button{
                h1{
                    background-color: rgba(0,0,0,0.7);
                }
            }

            .form-header{
                .submit-button{
                    button{
                        background-color: rgba(0,0,0,0.7);
                    }
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
                        background-color: #5f5f5f;
                    }
                }
            }

            .Skeleton-infoBox{
                .Skeleton-title{
                    background-color: #cbcbcb;

                    animation : lightMode_title 1s linear infinite;

                    @keyframes lightMode_title {
                        0%{
                            background-color: #cbcbcb;
                        }

                        100% {
                            background-color: #5f5f5f;
                        }
                    }
                }

                .Skeleton-channel{
                    background-color: #cbcbcb;

                    animation : lightMode_channel 1s linear infinite;

                    @keyframes lightMode_channel {
                        0%{
                            background-color: #cbcbcb;
                        }

                        100% {
                            background-color: #5f5f5f;
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
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    z-index: 1100;

    @media screen and (max-width : 768px) {
        position: sticky;
        height : 5rem;
        background-color: #fff;
    }
}

footer{
    position: relative;
    width: 100%;
    height: 30rem;
    background-color: #000;
    padding : 2rem 6.25rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width : 768px) {
        position: relative;
        width: 100%;
        height: 40rem;
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
`;
