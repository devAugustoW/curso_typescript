# React com Typescript
Este Módulo apresenta os conceitos fundamentais sobre o uso do React com TypeScript. Abaixo, explico as principais etapas do projeto e como os diferentes componentes e conceitos se relacionam.

## Estrutura do Projeto
```
/src
  |-- components/
  |    |-- FirstComponent.tsx
  |    |-- SecondComponent.tsx
  |    |-- Destructuring.tsx
  |    |-- State.tsx
  |    |-- Context.tsx
  |-- App.tsx
```

## Conceitos Abordados
### 1. Variáveis no React
```
const name: string = "Augusto";
const age: number = 40;
const isWorking: boolean = true;
```
- No React com TypeScript, utilizamos type para definir tipos personalizados:
```tsx
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";
```

### 2. Funções em Componentes
- O TypeScript permite a tipagem de funções, garantindo que os valores de entrada e saída sejam consistentes.

```tsx
const userGreeting = (name: string): string => {
  return `Olá, ${name}! Seja bem-vindo!`;
};

function SecondComponent() {
  return (
    <div>
      <h2>{userGreeting("Augusto")}</h2>
    </div>
  );
}
```

### 3. Criando Componentes
- Podemos criar componentes funcionais 
```tsx
const FirstComponent = () => {
  return <h1>Primeiro Componente</h1>;
};
```

### 4. Importando Componentes
```tsx
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

```

### 5. Desestruturando Props
- A desestruturação de props é uma forma de acessar diretamente os valores passados:
```tsx
const Destructuring = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

```

### 6. Hook useState
- O useState permite gerenciar estados dentro do componente:
```tsx
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

### 7. Enum
- O enum define um conjunto de valores fixos:
```tsx
enum Category {
  TECH = "Tecnologia",
  FOOD = "Comida",
  SPORTS = "Esportes",
}
```

### 8. Type
- Podemos definir type para padronizar os dados:

```tsx
type User = {
  name: string;
  age: number;
};
```

### 9. Context API
- O Context API permite compartilhar dados sem passar props manualmente:
```tsx
import { createContext } from "react";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const Context = createContext<IAppContext | null>(null);
```
- No App.tsx, utilizamos o contexto:
```tsx
import { Context } from "./components/Context";

const App = () => {
  return (
    <Context.Provider value={{ language: "TypeScript", framework: "React", projects: 5 }}>
      <FirstComponent />
    </Context.Provider>
  );
};
```

## Conclusão
Este projeto demonstra como usar TypeScript com React para criar aplicações mais seguras e estruturadas.