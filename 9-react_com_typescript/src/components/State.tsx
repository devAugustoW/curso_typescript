// 6 - HOOKS
import { ChangeEvent, useState } from 'react';


const State = () => {
	const [text, setText] = useState<string | null>("testando o useState")

	// seta os dados do input em 'text'
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	}

	return (
		<div>
			<p>O texto é: {text}</p>
			<input type="text" onChange={handleChange}/>
		</div>
	)
}

export default State;