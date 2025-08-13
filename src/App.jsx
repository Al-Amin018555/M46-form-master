import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/SimpleForm/HookForm/HookForm'
// import RefForm from './components/SimpleForm/RefForm/RefForm'
// import StatefullForm from './components/SimpleForm/StatefullForm/StatefullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log(data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log(data)
  // }

  return (
    <>
      <h2>Form Master</h2>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* way-2 */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm
        formTitle='Sign UP'
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sing UP</h2>
          <p>Please sing up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle='Profile Update'
        submitBtnText='Update'
        handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm> */}

    </>
  )
}

export default App
