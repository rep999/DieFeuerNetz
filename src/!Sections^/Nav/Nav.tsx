import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavParent>
            <NavWrapper>
                <GroupNav>
                    <NavListUL>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper> 
                                                <SagePNG src='/G_Icons/Dashboard.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Dashboard</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Self_Serve_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Self Serve</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper> 
                                                <SagePNG src='/G_Icons/Ad_Products.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Ad Products</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Reports_Products.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Reports</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Audience_Logo.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Audience</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                    </NavListUL>
                </GroupNav>
            </NavWrapper>
        </NavParent>
    );
};

export default Nav;

const NavParent = styled.section`
    // border: 1.4px solid black;
    height: 100%;
    min-width: 166px;
    max-width: 166px;
    position: absolute;
    left: 0px;
    flex-grow: 1;
    background: #f6f6f6;
`;

const NavWrapper = styled.div`
    border: 1.4px solid black;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    height: 100%;
`;

const GroupNav = styled.nav`
    border: 1.4px solid black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 460px;
`;

const NavListUL = styled.ul`
    border: 1.4px solid black;
    margin: 0;
    // padding: 2px;
    padding: 4px;
`;
const NavListLI = styled.li`
    align-items: center;
    display: flex;
    margin-bottom: 6px;
    margin-top:
    position: relative;
    rgb(255 255 255 / 1%) 0px 4px 55px, rgb(217 217 217 / 1%) 0px -12px 30px, rgb(224 224 224 / 2%) 0px 4px 6px, rgb(233 233 233 / 5%) 0px 12px 13px, rgb(227 227 227 / 7%) 0px -3px 5px;
    box-shadow: rgb(50 50 93 / 45%) 0px 4px 12px -9px, rgb(0 0 0 / 30%) 0px 8px 7px -8px;
    `;

const NavListLink = styled.a`
    border: 1.4px solid black;
    align-items: center;
    border-radius: 4px;
    color: #ebeef2;
    transition: color 0.15s ease;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    position: relative;
    text-decoration: none;
    width: 100%;
    height: 36px;
    width: 226px;
`;
const IconTextSage = styled.span`
    display: flex;
    align-items: center;
    border-radius: 4px;
    // color: #ebeef2;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    position: relative;
    text-decoration: none;
    width: 100%;
`;
const DecoratedTextSage = styled.span`
    align-items: center;
    border-radius: 4px;
    color: #ebeef2;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    padding-left: 2px;
    position: relative;
    text-decoration: none;
    width: 100%;
    align-items: center;
    display: inline-flex;
`;
const TextSageDecoration_Icon = styled.span`
    margin-right: 0px;
    align-items: center;
    border-radius: 4px;
    // color: #ebeef2;
    // color: var(--custom-text-and-icon-color, #ebeef2);
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    // padding-left: 12px;
    position: relative;
    text-decoration: none;
    width: 28px;
    height: 28px;
    // border: 1px solid black;
`;
const SVGSage_Wrapper = styled.span`
    // align-self: center;
    // display: flex;
    // flex-shrink: 0;
    // justify-self: center;
    // margin: 0;
    // padding: 0;
    // justify-content: center;
    display: flex;
    justify-content: center;
`;
const SagePNG = styled.img`
    display: none;
    height: 100%;
    width: 100%;
    height: 23px;
    width: 23px;
`;
const LILabel = styled.span`
    text-align: center;
    color: black;
    max-width: 164px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700!important;
    margin-right: 4px;
    font-family: helvetica;
    font-weight: 800;
`;
