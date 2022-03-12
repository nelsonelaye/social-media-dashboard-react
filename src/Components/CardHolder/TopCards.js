import styled from "styled-components"
import BigCard from "../Card/BigCard"
import {FaToggleOff, FaToggleOn} from "react-icons/fa"
import facebook from "../../img/icon-facebook.svg"
import twitter from "../../img/icon-twitter.svg"
import instagram from "../../img/icon-instagram.svg"
import youtube from "../../img/icon-youtube.svg"


import down from "../../img/icon-down.svg"
import up from "../../img/icon-up.svg"
import on from "../../img/on.png"

function TopCards(props ) {

  const changeTheme = ()=> {
    if(props.myTheme === "light") {
      props.setMyTheme("dark")
    } else{
      props.setMyTheme("light")
    }
  }

  // {props.myTheme === "light" ? <FaToggleOff onClick={changeTheme} /> : <FaToggleOn onClick={changeTheme} />}
  return (
    <Wrapper>
      <ShortBg></ShortBg>
      
      <Hold>
        <Headline>
          <Text>
            <Title>Social Media Dashboard</Title>
            <Total>Total Followers: 23,004</Total>
          </Text>
          <Switch>
            <Det>Dark Mode</Det>
            {/* <FaToggleOn onClick={changeTheme} /> */}
            <Toggle src={on} alt="Switch button" onClick={changeTheme}/>
          </Switch>
            
        </Headline>
        <CardHolder>
          <BigCard
          brColor={"5px solid #178FF3"}
          socialicon={facebook}
          username="@NathDaniel"
          number={1987}
          followers="Followers"
          icon={up}
          day="12 Today"
          dayColor={"#56B69D"}
          />

          <BigCard
          brColor={"5px solid #178FF3"}
          socialicon={twitter}
          username="@mark_larry"
          number={1044}
          followers="Followers"
          icon={up}
          day="99 Today"
          dayColor={"#56B69D"}
          />

          <BigCard
          brColor={"5px solid rgb(249,193,114);"}
          socialicon={instagram}
          username="@Djedje"
          number="11K"
          followers="Followers"
          icon={up}
          day="1099 Today"
          dayColor={"#56B69D"}
          />

          <BigCard
          brColor={"5px solid #C00D33"}
          socialicon={youtube}
          username="@tibyLane"
          number={8239}
          followers="Subcribers"
          icon={down}
          day="144 Today"
          dayColor={"#C00D33"}
          />
        </CardHolder>
      </Hold>
    </Wrapper>
  );
}

export default TopCards;

const Wrapper = styled.div`
  background-color:${props => props.theme.pageBaground};
  display:flex;
  flex-direction: column;
  align-items:center;
  transition: all .35s ease-in;
`

const ShortBg = styled.div`
  background-color:${props => props.theme.topBox};
  transition: all .35s ease-in;
  height:250px;
  position: absolute;
  top:0px;
  width:100%;
  z-index: -50;
`

const Hold = styled.div`
  width: 80%;
`
const Headline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  width:100%;
  color:${props => props.theme.whiteText};
  transition: all .35s ease-in;
`

const Text = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`

const Switch = styled.div`
  display:flex;
  align-items: center;
`

const Det = styled.div`
  color:#7E8290;
  font-weight:600;
  font-size: 16px;
`
const Toggle = styled.img`
  width:60px;
  height:60px;
  margin:20px;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`
const Total = styled.div`
  color:#7E8290;
  font-weight:700;
  font-size: 18px;
`

const CardHolder = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
`
