import React from "react"
import styled from "styled-components"


function BigCard({brColor, socialicon, username, number, followers, icon, day, dayColor }) {
  return (
    <CardHolder brColor={brColor}>
        <SocialProfile>
            <SocialIcon  src={socialicon} alt= "social medium"/>
            <UserName>{username}</UserName>
        </SocialProfile>
        <Number>{number}</Number>
        <Followers>{followers}</Followers>
        <Analysis>
            <Icon src={icon} alt= "bullish" />
            <Day dayColor={dayColor}>{day}</Day>
        </Analysis>
    </CardHolder>
  );
}

export default BigCard;

const CardHolder = styled.div`
    background-color:#F0F3FA;
    width: 260px;
    display: flex;
    margin: 15px;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-top: ${({brColor}) => brColor};
    border-radius: 8px;
`

const SocialProfile = styled.div`
    display:flex;
    align-items: center;
    margin: 20px 0px 10px;

`

const SocialIcon = styled.img`
    width: 15px;
    margin: 5px;

`

const UserName = styled.div`
    margin: 5px;
    color:#1D2029;
    font-weight:600;

`
const Number = styled.div`
    font-size:50px;
    font-weight: 700;
    margin: 0px;
`

const Followers = styled.div`
    font-size:15px;
    font-weight: 350;
    letter-spacing: 4px;
    margin-top: -8px;
    text-transform: uppercase;
`
const Analysis = styled.div`
    display:flex;
    align-items: center;
    margin: 20px;
`

const Icon = styled.img`
    width: 15px;
    margin: 5px;
`

const Day = styled.div`
    margin: 5px;
    color: ${({dayColor}) => dayColor};
    font-weight: 650;
`