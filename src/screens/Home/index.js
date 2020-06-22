import React from 'react';
import SalaryField from '../../components/SalaryField';
import { Card, Title } from "rbx";
import './style.css';

const HomeScreen = () => {
    return (
        <>
            <Card>
                <Card.Content>
                    <Title subtitle>(Calculated based on Brazillian's taxes)</Title>

                    <br />

                    <SalaryField /> 
                </Card.Content>
            </Card>
        </>
    )
}

export default HomeScreen;