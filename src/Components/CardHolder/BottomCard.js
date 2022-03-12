import styled from "styled-components"
import SmallCard from "../Card/SmallCard"

import facebook from "../../img/icon-facebook.svg"
import twitter from "../../img/icon-twitter.svg"
import instagram from "../../img/icon-instagram.svg"
import youtube from "../../img/icon-youtube.svg"
import up from "../../img/icon-up.svg"
import down from "../../img/icon-down.svg"

function BottomCard(props ) {

  const changeTheme = ()=> {
    if(props.myTheme === "light") {
      props.setMyTheme("dark")
    } else{
      props.setMyTheme("light")
    }
  }
  return (
    <Wrapper>
        <Hold>
            <Title>Overview - Today</Title>
        
            <CardHolder>
                <SmallCard
                view="Page Views"
                socialIcon={facebook}
                number={87}
                icon={up}
                percent="3%"
                pColor={"#56B69D"}
                />

                <SmallCard
                view="Likes"
                socialIcon={facebook}
                number={52}
                icon={down}
                percent="2%"
                pColor={"#C00D33"}
                />

                <SmallCard
                view="Likes"
                socialIcon={instagram}
                number={5462}
                icon={up}
                percent="22572%"
                pColor={"#56B69D"}
                />

               <SmallCard
                view="Profile Views"
                socialIcon={instagram}
                number="52K"
                icon={up}
                percent="1375%"
                pColor={"#56B69D"}
                />

                <SmallCard
                view="Retweets"
                socialIcon={twitter}
                number={117}
                icon={up}
                percent="303%"
                pColor={"#56B69D"}
                />

                <SmallCard
                view="Likes"
                socialIcon={twitter}
                number={507}
                icon={up}
                percent="553%"
                pColor={"#56B69D"}
                />
                
                <SmallCard
                view="Likes"
                socialIcon={youtube}
                number={107}
                icon={down}
                percent="19%"
                pColor={"#C00D33"}
                />
                
                <SmallCard
                view="Total Views"
                socialIcon={youtube}
                number={1407}
                icon={down}
                percent="12%"
                pColor={"#C00D33"}
                />
            </CardHolder>

        </Hold>
    </Wrapper>
  );
}

export default BottomCard;

const Wrapper = styled.div`
    /* margin-top: 30px; */
    display:flex;
    align-items: center;
    flex-direction: column;
  background-color:${props => props.theme.pageBaground};
  transition: all .35s ease-in;
`

const Hold = styled.div`
  width: 80%;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color:#7E8290;
  margin:0px 20px 10px;
`


const CardHolder = styled.div`
  display:flex;
  flex-wrap: wrap;
`

