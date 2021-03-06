import React, {useState} from 'react';

const Button = (props) => {
  const color = props.color;
  const backgroundColor = props.backgroundColor;
  const borderRadius = props.borderRadius;
  const opacity = props.opacity;
  const fontSize = props.fontSize;

  const style = {
    color: color,
    backgroundColor : backgroundColor,
    borderRadius: `${borderRadius}%`,
    opacity: opacity,
    fontSize: `${fontSize}px`,
  };

  return (
    <button
      disabled={props.isDisabled}
      style={style}
    >{props.text}</button>
  );
}


const Color = (props) => {
  return(
    <div>
      <label>color</label>
      <input name="color" type="color" min="10" max="100" step="1" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const BackgroundColor = (props) => {
  return (
    <div>
      <label>background-color</label>
      <input name="backgroundColor" type="color" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const BorderRadius = (props) => {
  return (
    <div>
      <label>border-radius</label>
      <input name="borderRadius" type="range" min="0" max="100" step="1" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const FontSize = (props) => {
  return (
    <div>
      <label>font-size</label>
      <input name="fontSize" type="range" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const Opacity = (props) => {
  return (
    <div>
      <label>opacity</label>
      <input name="opacity" type="range" min="0" max="1" step="0.1" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const Disable = (props) => {
  return (
    <div>
      <label>disabled属性</label>
      <input name="isDisabled" type="checkbox" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

const Text = (props) => {
  return (
    <div>
      <label>buttonに表示するテキスト</label>
      <input name="text" type="text" value={props.value} onChange={props.onChange}/>
    </div>
  );
}

function App() {
  const [enteredStyle, setEnteredStyle] = useState({
    color: "#000000",
    backgroundColor:"#ffffff",
    opacity:"1",
    borderRadius:"5",
    fontSize: "16",
    isDisabled: false,
    text: "ButtonCustomizer",
  });

  const styleChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const newStyle = {
      ...enteredStyle,
      [name]: value
    // key, valueはeventから取得するといいです。
    }
    setEnteredStyle(newStyle);
  }

  return(
    <div>
      <Button
        color={enteredStyle.color}
        backgroundColor={enteredStyle.backgroundColor}
        opacity={enteredStyle.opacity}
        borderRadius={enteredStyle.borderRadius}
        fontSize={enteredStyle.fontSize}
        isDisabled={enteredStyle.isDisabled}
        text={enteredStyle.text}
      />
      <Color
        value={enteredStyle.color}
        onChange={styleChangeHandler}/>
      <BackgroundColor
        value={enteredStyle.backgroundColor}
        onChange={styleChangeHandler}/>
      <BorderRadius
        value={enteredStyle.borderRadius}
        onChange={styleChangeHandler}/>
      <FontSize
        value={enteredStyle.fontSize}
        onChange={styleChangeHandler}/>
      <Opacity
        value={enteredStyle.opacity}
        onChange={styleChangeHandler}/>
      <Disable
        value={enteredStyle.isDisabled}
        onChange={styleChangeHandler}/>
      <Text
        value={enteredStyle.text}
        onChange={styleChangeHandler}/>
    </div>
  );
}
export default App;
