import React, { useState } from 'react';
import { Input, Column, Control, Icon } from "rbx";
import CalculateTax from '../CalculateTax';

const SalaryField = () => {
    const [salary, setSalary] = useState(0);
    const [numberOfDependents, setNumberOfDependents] = useState(0);

    return (
        <div>
            <Column.Group>
                    <Column>
                        <Control iconLeft>
                            <Input type="text" 
                            color="success" 
                            placeholder="Type your salary" 
                            onKeyUp={(e) => setSalary(e.target.value)} 
                            rounded />

                            <Icon size="small" align="left">
                                R$
                            </Icon>
                        </Control>
                    </Column>

                    <Column>
                        <Input type="number" 
                        min="0" 
                        placeholder="Number of dependents" 
                        onKeyUp={(e) => setNumberOfDependents(e.target.value)} 
                        rounded />
                    </Column>
            </Column.Group>

            <CalculateTax salary={salary} numberOfDependents={numberOfDependents} />
        </div>
    )
}

export default SalaryField;