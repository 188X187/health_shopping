import { useEffect, useState } from "react";
import List from "../../pages/List";

function Filter() {
    const [checkbox, setcheckbox] = useState('')

    return (
        <>
        <label>
            <input
                type="checkbox"
                onChange={(e) => {
                    if(e.target.checked){
                        setcheckbox("&sort=date")
                    } else {
                        setcheckbox('')
                    }
                }}>
            </input>최신순
        </label>
        <List checkbox={checkbox}/>
        </>
    )
}

export default Filter