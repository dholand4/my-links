import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    background: black;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin: auto;
  max-width: 320px;
  padding: 0 10px;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const AvatarImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 30px;
  border-radius: 50%;
  max-width: 122px;
  height: auto;
  padding: 3.7px;
  border: #046482 solid 4px;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    margin-top: 100px;
    max-width: 350px;
    padding: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 24px 0 8px;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    font-size: 55px;
    margin-top: 65px;
    margin-bottom: 50px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  opacity: 0.8;
  font-size: 18px;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    font-size: 38px;
    margin-bottom: -15px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 45px 0;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    margin: 60px;
  }
`;

export const StyledLink = styled.a`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #046482;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 12px;
  border-radius: 6px;
  transition: background 400ms;

  &:hover {
    background: #00232e;
  }

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #046482;
    color: white;
    text-transform: uppercase;
    font-size: 33px;
    margin-bottom: 20px;
    border-radius: 10px;
    transition: background 400ms;
  }
`;

export const StyledFooter = styled.footer`
  font-weight: 500;
  font-size: 12px;
  opacity: 0.6;
  transition: opacity 400ms;

  @media (min-width: 375px) and (max-width: 1080px) and (max-height: 2400px) {
    margin-top: 40px;
    font-weight: 500;
    font-size: 26px;
    opacity: 0.6;
    transition: opacity 400ms;
  }
`;
