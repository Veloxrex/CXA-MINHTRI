import React, {useState} from "react"
import "./style.css"


const buttonArray = [
    {
        id: 'c',
        display: 'Clear'
    },
    {
        id: '/',
        display: "&#247;"
    },
    {
        id: 7,
        display: "7"
    },
    {
        id: 8,
        display: "8"
    },
    {
        id: 9,
        display: "9"
    },
    {
        id: '*',
        display: "&#215;"
    },
    {
        id: 4,
        display: "4"
    },
    {
        id: 5,
        display: "5"
    },
    {
        id: 6,
        display: "6"
    },
    {
        id: "-",
        display: "&#8722;"
    },
    {
        id: 1,
        display: "1"
    },
    {
        id: 2,
        display: "2"
    },
    {
        id: 3,
        display: "3"
    },
    {
        id: '+',
        display: "&#43;"
    },
    {
        id: 0,
        display: "0"
    },
    {
        id: '=',
        display: "&#61;"
    }

];
const genClassButton = (id) => {
    switch (id) {
        case 'c':
            return 'is-clear';
        case 0:
            return 'is-zero';
        case '=':
            return 'is-red';
        case '+':
            return 'is-red';
        case '-':
            return 'is-red';
        case '*':
            return 'is-red';
        case '/':
            return 'is-red';
        default:
            break;
    }
};

export const CalculatorComponent = () => {
    const [result, setResult] = useState('');
    const [equalStatus , setEqualStatus] = useState(false)
    const reset = () => {
        if (result !== '') {
            setEqualStatus(false)
            setResult('')
        }

    };

    const calculate = () => {
        try {

            // eslint-disable-next-line no-eval
            setResult((eval(result) || 0) + '');
            setEqualStatus(true)
        } catch (e) {
            setResult("error")
        }
    };

    const onClickKeyPad = (e) => {
        const button = e.target.id;
        if (button === "=") {
            calculate();
        } else if (button === "c") {
            reset()
        } else {
            if (!(["+", "-", "*", "/"].includes(button)) || result.slice(-1) !== button) {

                if(equalStatus){
                    reset();
                    setResult(button);
                }else{
                    setResult(result + button);
                }

            }

        }
    };

    return (
        <>
            {/*<span>{result}</span>*/}
            <div className="calculator">
                <input type="text" value={result} disabled/>
                <div className="calculator-buttons">
                    {buttonArray.map(item => {
                        const {id, display} = item;
                        return (
                            <button id={id} key={id} className={`calc-button ${genClassButton(id)}`}
                                    onClick={(e) => onClickKeyPad(e)}
                                    dangerouslySetInnerHTML={{__html: display}}/>
                        )
                    })}
                </div>

            </div>
        </>
    )
};



