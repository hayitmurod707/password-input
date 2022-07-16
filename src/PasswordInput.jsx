import { func, string } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const StyledElement = styled.div`
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	& * {
		box-sizing: border-box;
	}
	& .icon {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 40px;
		z-index: -1;
	}
	& input {
		background: transparent;
		border-radius: 8px;
		border: 1px solid #e2e4ea;
		color: black;
		font-size: 16px;
		font-weight: 500;
		height: 42px;
		outline: none;
		padding: 0 38px;
		width: 100%;
		font-family: 'Gilroy', sans-serif;
		&[type='password'] {
			letter-spacing: 2px;
		}
		&[type='text'] {
			letter-spacing: initial;
		}
		&::placeholder {
			letter-spacing: 0;
		}
	}
	& .toggle {
		align-items: center;
		cursor: pointer;
		display: flex;
		height: 100%;
		justify-content: center;
		position: absolute;
		right: 0;
		top: 0;
		width: 40px;
	}
`;
const Open = () => (
	<svg
		fill='none'
		height='20'
		stroke='#6E7892'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		viewBox='0 0 24 24'
		width='20'>
		<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
		<circle cx='12' cy='12' r='3'></circle>
	</svg>
);
const Close = () => (
	<svg
		fill='none'
		height='20'
		stroke='#6E7892'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		viewBox='0 0 24 24'
		width='20'>
		<path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'></path>
		<line x1='1' y1='1' x2='23' y2='23'></line>
	</svg>
);
const Lock = () => (
	<svg
		enableBackground='new 0 0 24 24'
		height='20'
		stroke='#6E7892'
		viewBox='0 0 24 24'
		width='20'>
		<path d='M20,18v-4c0-1.9-1.3-3.4-3-3.9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v3.1c-1.7,0.4-3,2-3,3.9v4c0,2.2,1.8,4,4,4h8C18.2,22,20,20.2,20,18z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v3H9V7z M6,18v-4c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v4c0,1.1-0.9,2-2,2H8C6.9,20,6,19.1,6,18z' />
	</svg>
);
const PasswordInput = ({ value, onChange, onFocus }) => {
	const [type, setType] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		ref.current.focus();
	}, [type]);
	return (
		<StyledElement>
			<div className='icon'>
				<Lock />
			</div>
			<input
				onChange={onChange}
				onFocus={onFocus}
				ref={ref}
				type={type ? 'text' : 'password'}
				value={value}
			/>
			<div className='toggle' onClick={() => setType(!type)}>
				{type ? <Close /> : <Open />}
			</div>
		</StyledElement>
	);
};
PasswordInput.defaultProps = {
	value: '',
};
PasswordInput.propTypes = {
	onChange: func.isRequired,
	onFocus: func,
	value: string.isRequired,
};
export default PasswordInput;
