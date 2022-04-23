import logo from './grupo3.png';
import './App.css';





function App() {
var href = "./public/inicio.html";
 
  return (
    <body >
      <main >
     
            <form class="efeito">
              <img src={logo}></img>
              <input type="text" placeholder='Usuario' />
              <input type="password" placeholder='Senha' />
             <button>Logar</button>
            

            </form>
            <span>Não possui uma conta?<a> Criar</a></span>
            <span>Essa tela é somente para intuito de aprendizado não contem nenhum tipo de monetização não possui nenhum vinculo com a AME <a href="https://www.amedigital.com" target="_blank" rel="noopener noreferrer">site oficial AME</a></span>


      </main>
      <footer>
       
      </footer>
    </body>
  );
}

export default App;
