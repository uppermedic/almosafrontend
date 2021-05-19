import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
export default function SearchNav() {
    return (
        <InputGroup className="search-nav">
            <Input placeholder="Search......" />
            <InputGroupAddon addonType="append">
            <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    )
}
