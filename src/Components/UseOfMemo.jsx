import React,{memo} from 'react'

const Greet=memo(function ({ name }) {
    console.log("rerenderd with" , name);
  return (
<div className="counter-child">
    Hello {name}
</div>
  ) 
})
function UseOfMemo() {
    return (
        <div>
            <div className="counter-parent">
                <Greet name="Shivani"/>
                <Greet name="Shivani"/>
                <Greet name="krish"/>
                <Greet name="Harshil"/>
                  <Greet name="Sunita"/>
            </div>
        </div>
    );
}
export default UseOfMemo;