import './selectInput.scss';

const SelectInput = ({value, options, title}) => {
    return ( 
        <select value={value} name="" id="" className="select-input">
                {options.map((option) => (
                    <option value={option.value} className="select-input__item">{option.label}</option>
                ))}

        </select>
     );
}
 
export default SelectInput;