import React, { useState, useEffect } from 'react';
import CalculateIRRF from './CalculateIRRF';

const CalculateTax = (props) => {
    const [valueINSS, setValueINSS] = useState(0);

    function calculate() {
        let calcValue = props.salary;

        if (calcValue < 1693.72) {
            calcValue -= (calcValue*8)/100;
        } else if(calcValue >= 1693.72 && calcValue < 2822.90) {
            calcValue -= (calcValue*9)/100;
        } else if(calcValue >= 2822.90 && calcValue <= 5645.80) {
            calcValue -= (calcValue*11)/100;
        } else if(calcValue >= 5645.81) {
            calcValue -= 621.04;
        }

        setValueINSS(calcValue);
    }

    useEffect(() => {
        calculate();
    }, [props.salary])

    return (
        <>
            <CalculateIRRF salary={props.salary} valueINSS={valueINSS} numberOfDependents={ props.numberOfDependents } />
        </>
    )
}

export default CalculateTax;