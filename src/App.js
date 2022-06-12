import loginLogo from "./assets/logo.svg";
import './styles.css';

function App() {
  return (
    <div className='container'>
      <div className = 'container-login'>
         <div className='wrap-login'>
          <form className='login-form'>

            <span className="img-background">
            <img src={loginLogo} alt='logo parrot'/>
            </span>
            <span className='login-form-title'>LOGIN</span>

            <div className='wrap-input'>
              <input className='input' type='email' placeholder ='Email'/>
              
            </div>

            <div className='wrap-input'>
              <input className='input'  type='password' placeholder ='Senha'/>
              
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'> entrar
              </button>
            </div>

            <div className='without-account'>
              <a className='txt' href='#'>cadastre-se</a>

            </div>

          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
