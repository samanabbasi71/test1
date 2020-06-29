import React from 'react'
import Hotels from './Hotels'
import Alert from '../components/Alert'
export default function Home() {
    return (
        <React.Fragment>
            <Alert title="این پروژه صرفا جهت ارایه در رزومه می باشد..."/>
            <Hotels />
        </React.Fragment>
    )
}
