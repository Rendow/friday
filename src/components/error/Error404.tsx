import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (

        <div className={s.body}>
            <div className={s.mainbox}>
                <div className={s.err}>4</div>
                <div className={s.err3}>0</div>
                <div className={s.err2}>4</div>
                <div className={s.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
            </div>
        </div>

    )
}

export default Error404
