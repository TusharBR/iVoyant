
import "../styles/main.css"
const Maincontainer:React.FC=()=> {
  return (
    <div className="mainclass">
        <div className="subdivs"><select name="select1">
              <option value="">firstoptions1</option>
              <option value="">firstoptions2</option>
              <option value="">firstoptions3</option>
              <option value="">firstoptions4</option>
              <option value="">firstoptions5</option>
              <option value="">firstoptions6</option>
              <option value="">firstoptions7</option>
              <option value="">firstoptions8</option>
              <option value="">firstoptions9</option>
        </select></div>
        <div className="subdivs"><select name="select2">
        <option value="">secondoptions1</option>
        <option value="">secondoptions2</option>
        <option value="">secondoptions3</option>
        <option value="">secondoptions4</option>
        <option value="">secondoptions5</option>
        <option value="">secondoptions6</option>
        <option value="">secondoptions7</option>
        <option value="">secondoptions8</option>
        <option value="">secondoptions9</option>
        </select></div>
        <div className="subdivs"><select name="select3">
        <option value="">thirdoptions1</option>
        <option value="">thirdoptions2</option>
        <option value="">thirdoptions3</option>
        <option value="">thirdoptions4</option>
        <option value="">thirdoptions5</option>
        <option value="">thirdoptions6</option>
        <option value="">thirdoptions7</option>
        <option value="">thirdoptions8</option>
        <option value="">thirdoptions9</option>
        </select></div>
    </div>
  )
}

export default Maincontainer