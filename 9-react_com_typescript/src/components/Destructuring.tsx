// 5 - DESTRUCTURING NAS PROPS
interface Props {
  title: string;
  content: string;
  comentsQty: number;
  tags: string[];
	// ENUM
  category: Category;
}

// Enum para categorias
export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  PT = "Português",
}

// 2 - função com componente
const Destructuring = ({ title, content, comentsQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Comentários: {comentsQty}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
      </div>
      <p>Categoria: {category}</p>
    </div>
  );
};

export default Destructuring;