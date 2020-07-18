import React, { useContext } from "react"
import Switch from "react-switch"
import { MdBrightness3, MdWbSunny } from "react-icons/md"

import { StateContext } from '../../context/StateContext'

const styleSwitch = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  justifyContent: "center",
}

const SwitchButton = () => {
  const { dark, toggleDark } = useContext(StateContext);

  return(
    <Switch
      offColor='#3b3b3b'
      offHandleColor="#f7f7f7"
      onColor="#fff"
      onHandleColor="#3b3b3b"
      uncheckedIcon={
        <div style={styleSwitch}>
          <MdBrightness3 color="#f7f7f7" size={20} />
        </div>
      }
      checkedIcon={
        <div style={styleSwitch}>
          <MdWbSunny color="#3b3b3b" size={20} />
        </div>
      }
      checked={dark}
      onChange={toggleDark}
    />
  )
};

export default SwitchButton
