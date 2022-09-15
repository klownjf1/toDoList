import React, {useState} from 'react';
import '../App.css'

const InputField = ({select, setDoings}) => {

    const [inputText, setInputText] = useState('')

    const onChange = (e) => {
        let text = e.target.value
        setInputText(text)
    }

    const addCase = () => {
        let newCase = {id: Math.random(), case: inputText, editMode: false}
        setDoings(prevState => [...prevState, newCase])
        setInputText('')
    }

    return (
        <div>
            <input value={inputText} onChange={onChange} placeholder={'New task'} className='form__input-field'/>
            <button onClick={addCase} disabled={select === 'deleted' || inputText === ''} className='form__add-btn' >Add</button>
        </div>
    );
};

export default InputField;