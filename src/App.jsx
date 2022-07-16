import { useState } from 'react';
import styled from 'styled-components';
import PasswordInput from './PasswordInput';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`;
const App = () => {
	const [value, setValue] = useState('erioferf e');
	return (
		<StyledElement>
			<PasswordInput
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
		</StyledElement>
	);
};
export default App;
