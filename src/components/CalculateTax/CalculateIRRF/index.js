import React, { useState, useEffect } from 'react';
import { Level, Heading, Title } from "rbx";
import CountUp from 'react-countup';

const CalculateIRRF = (props) => {
    const [aliquotValue, setAliquotValue] = useState(0);
    const [IR, setIR] = useState(0);
    const [dependentsDiscount, setDependentsDiscount] = useState(0);

    const calculate = () => {
        let calcValue = props.valueINSS;

        if(calcValue >= 1903.98 && calcValue < 2826.65) {
            setIR(142.80);
            setAliquotValue(((calcValue * 7.5)/100));
        } else if(calcValue >= 2826.66 && calcValue <= 3751.05) {
            setIR(354.80);
            setAliquotValue(((calcValue * 15)/100));
        } else if(calcValue >= 3751.06 && calcValue <= 4664.68) {
            setIR(636.13);
            setAliquotValue(((calcValue * 22.5)/100));
        } else if(calcValue > 4664.68) {
            setIR(869.36);
            setAliquotValue(((calcValue * 27.5)/100));
        }


        if(calcValue >= 1903.98) {
            setDependentsDiscount(IR * props.numberOfDependents);
        } else {
            setDependentsDiscount(0);
            setAliquotValue(0);
            setIR(0);
        }
    }

    useEffect(() => {
        calculate();
    }, [props.valueINSS, props.numberOfDependents, calculate])

    return (
        <>
            <Level>
                <Level.Item textAlign="centered">
                    <div>
                        <Heading>Discount INSS</Heading>
                        <Title as="p"><CountUp end={(props.salary - props.valueINSS).toFixed(2)} duration={2} /></Title>
                    </div>
                </Level.Item>

                <Level.Item textAlign="centered">
                    <div>
                        <Heading>Dependents Discount</Heading>
                        <Title as="p"><CountUp end={dependentsDiscount.toFixed(2)} duration={2} /></Title>
                    </div>
                </Level.Item>

                <Level.Item textAlign="centered">
                    <div>
                        <Heading>Discount IRRF</Heading>
                        <Title as="p"><CountUp end={(((aliquotValue - IR))).toFixed(2)} duration={2} /></Title>
                    </div>
                </Level.Item>
            </Level>

            <hr />

            <Level>
                <Level.Item textAlign="centered">
                    <div>
                        <Heading>Liquid Salary</Heading>
                        <Title as="p">R$ <CountUp end={(props.valueINSS - ((aliquotValue - IR) + dependentsDiscount)).toFixed(2)} duration={2} /></Title>
                    </div>
                </Level.Item>
            </Level>
        </>
    )
}

export default CalculateIRRF;