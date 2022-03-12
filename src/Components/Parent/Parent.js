import TopCards from "../CardHolder/TopCards"
import BottomCard from "../CardHolder/BottomCard"

function Parent({myTheme, setMyTheme}) {
  return (
    <div >
      <TopCards setMyTheme={setMyTheme} myTheme={myTheme}  />
      <BottomCard setMyTheme={setMyTheme} myTheme={myTheme}  />
    </div>
  );
}

export default Parent;
