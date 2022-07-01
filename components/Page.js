import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
   font-family:"Work Sans", sans-serif;
   padding: 0;
   margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    --primary-color: #F29057;
    --secondary-color: #D99E6A;
    --terciary-color: #734116;
    --quaternary-color: #401E01;
    --quinary-color: #260F01;
    --boxShadow: 0px 0px 40px 13px #f6f6f6;
    --borderRadius:4px;
    --transition: all 0.3s ease;
 
  }
  a {
    text-decoration: none;
    color: inherit
  }
  a:hover {
    text-decoration: underline;
  }
  img{
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  input{
    width: 100%;
    
  }
  input:focus,
  textarea:focus, button:focus {
    outline: none;
  }
`

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  )
}
