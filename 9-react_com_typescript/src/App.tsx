// Cria contexto para compartilhar dados entre componentes sem passar explicitamente pelas props.
import { createContext } from 'react';
// 4- IMPORTAÇÃO DE COMPONENTE
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";

// 10 - Utilizando Contexto
import { Context } from './components/Context';

// 8 - TYPE
// Define um tipo que pode ser uma string ou null
// Define um tipo fixo com valores específicos
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - INTERFACE PARA CONTEXT
// Define a estrutura dos dados que serão compartilhados pelo contexto
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

// Cria o contexto com um valor inicial null
export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1- VARIÁVEIS
  const name: string = "Augusto";
  const age: number = 40;
  const isWorking = true;

  // 2- FUNÇÕES COM COMPONENTES
  // Função anônima que retorna uma saudação
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  };

  // 8- TYPE
  const myText: textOrNull = "Tem algum texto aqui!";
  let mySecondText: textOrNull = null;
  mySecondText = 'Opa';
  const testandoFixed: fixed = "Isso";

  // 9 - CONTEXT
  // Define o valor do contexto que será compartilhado
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    // Provider, disponibiliza os dados para os componentes filhos
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>Typescript com React</h1>

        <h2>Variáveis</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        {isWorking ? (
          <p>Está trabalhando</p>
        ) : (
          <p>Não está trabalhando</p>
        )}

        {/* FUNÇÕES COM COMPONENTES */}
        <h2>Funções com Componentes</h2>
        <h3>{userGreeting(name)}</h3>

        {/* IMPORTANDO COMPONENTE */}
        <FirstComponent />

        {/* DESTRUCTURING NAS PROPS */}
        <SecondComponent name="segundo" />

        <h2>Função com uma props</h2>

        <Destructuring
          title="Primeiro post"
          content="Conteúdo do post"
          comentsQty={10}
          tags={["js", "ts"]}
          category={Category.TS}
        />

        <h2>Função com mais props</h2>
        <Destructuring
          title="Segundo post"
          content="Conteúdo do post"
          comentsQty={5}
          tags={["Firebase", "Postgres"]}
          category={Category.PT}
        />

        <h2>UseState</h2>
        <State />

        <h2>Type</h2>
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}

        <p>Type Fixo: {testandoFixed}</p>

				<Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;