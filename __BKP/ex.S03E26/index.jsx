import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
import SilvaFamily from './silvaFamily'

ReactDOM.render(
    <div>
        <Family lastName='Silva'>
            <Member name='Guilherme'/>
        </Family>
        <br/>
        <br/>
        <SilvaFamily/>
    </div>
, document.getElementById('app'))


