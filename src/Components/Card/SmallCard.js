import styled from "styled-components"

function SmallCard({view, socialIcon,number, icon, pColor, percent}) {
  return (
    <Holder>
        <FirstRow>
            <View>{view}</View>
            <Social src={socialIcon} />
        </FirstRow>
        <SecondRow>
            <Number>{number}</Number>
            <Analysis>
                <Icon src={icon} alt="bullish or bearish"/>
                <Percent pColor={pColor}>{percent}</Percent>
            </Analysis>
        </SecondRow>
    </Holder>
  );
}

export default SmallCard;

const Holder = styled.div`
 background-color:#F0F3FA;
    width: 239.8px;
    display: flex;
    margin: 15px;
    padding: 20px 0px;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
`
const FirstRow = styled.div`
    display: flex;
    align-items: center;
    width:80%;
    justify-content: space-between;
    margin: 10px 0px;

`
const View = styled.div`
    color:#7E8290;
    font-weight: 600;
`
const Social = styled.img`
    width: 18px;
`
const SecondRow = styled.div`
    display: flex;
    width:80%;
    margin: 10px 0px ;
    align-items: center;
    justify-content: space-between;
    
`

const Number = styled.div`
    font-size:25px;
    font-weight: 700;
    margin: 0px;
`

const Analysis = styled.div`
    display: flex;
`
const Icon = styled.img`
    width: 13px;
    margin: 5px;
`
const Percent = styled.div`
    color: ${({pColor}) => pColor};
    font-weight: 650;
    font-size:12px;
`
