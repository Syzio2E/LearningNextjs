"use client"

import React from 'react'
import Button from '../ui/button'
import classes from './events.search.module.css'
import { useRef } from 'react'

const EventSearch = (props) => {
const yearInputRef = useRef()
const monthInputRef = useRef()

const submitHanlder=(e)=>{
e.preventDefault()
const selectedYear = yearInputRef.current.value
const selectedMonth = monthInputRef.current.value
props.onSearch(selectedYear,selectedMonth)

}

  return (
    <form className={classes.form} onSubmit={submitHanlder}>
        <div className={classes.controls}>
        <div className={classes.control}>
            <label htmlFor='year'>Year</label>
            <select id='year' ref={yearInputRef}>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
        <div className={classes.control}>
            <label htmlFor='month'>Month</label>
            <select id='month'ref={monthInputRef}>
                <option id='1' value='1'>January</option>
                <option id='2' value='2'>February</option>
                <option id='3' value='3'>March</option>
                <option id='4' value='4'>April</option>
                <option id='5' value='5'>May</option>
                <option id='6' value='6'>June</option>
                <option id='7' value='7'>July</option>
                <option id='8' value='8'>August</option>
                <option id='9'value='9'>September</option>
                <option id='10'value='10'>October</option>
                <option id='11'value='11'>November</option>
                <option id='12'value='12'>December</option>
            </select>
        </div>
        </div>
        <Button>Find Events</Button>
    </form>
  )
}

export default EventSearch
