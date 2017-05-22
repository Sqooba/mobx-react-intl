import React from "react"
import {inject, observer} from "mobx-react" 

const Toolbar = ({locale}) => <div>
    <select value={locale.value} onChange={(event) => locale.value = event.target.value}>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
    </select>
</div>

export default inject("locale")(observer(Toolbar));
