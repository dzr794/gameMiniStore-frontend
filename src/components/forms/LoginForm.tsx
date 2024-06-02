
export const LoginForm = ( { title, subData }: { title: string, subData:any } ) => {
  return (
    <>
    <h1>{ title }</h1>w
    <div className="alert alert-error" style={{ display: 'none' }}></div>
    <form className="form">

       {/* <InputEmail({ data: subData.inputEmailData }) />
       <InputPassword({ data: subData.inputPasswordData }) />
       <LoginButton({ data: subData.loginButtonData }) /> */}
      
    </form>
    <a href="/" className="btn default">Back to home page</a>
    </>
  )
}
