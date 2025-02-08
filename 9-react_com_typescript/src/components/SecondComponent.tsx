// 5 - DESTRUCTURING NAS PROPS
interface Props {
	name: string
}

// 2 - função com componente
const SecondComponent = (props: Props) => {
	return (
		<div>
			<h2>Meu segundo componente</h2>
			<p>O nome dele é {props.name}</p>
		</div>
	)
}

export default SecondComponent