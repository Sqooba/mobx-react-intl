import React from 'react';
import {injectIntl} from "react-intl"
import {observer} from "mobx-react"

import Toolbar from "./Toolbar"; 

const Home = ({intl: {formatMessage}}) => <div>
    <h1>{formatMessage({id: "hello"})}</h1>
    <Toolbar />
</div>


export default injectIntl(observer(Home));

