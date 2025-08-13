import { useState } from "react"

const useInputState = (defaultValue = null) => {

    const [value, setValue] = useState(defaultValue);

    // way-1
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    // return [value,handleChange];

    // way-2
    const onChange = e => {
        setValue(e.target.value);
    }
    return { value, onChange }

}
export default useInputState;