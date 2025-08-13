import useInputState from "../../../Hooks/UseInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('rojoni klanto');

    const emailState = useInputState('rojoni@sojoni.go');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name)
        console.log(emailState.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name}
                onChange={handleNameChange}
                type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;