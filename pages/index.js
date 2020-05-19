import React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import {reducer, initialState} from '../reducers/useReducer';

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link type="text/css" rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <link type="text/css" rel="stylesheet" href="/bootstrap.min.css" />
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link> */}
        <script src="/script.js"></script>
      </Head>

      <h1 className="text-primary mt-2">Things I've Gotta Get Done</h1>
            <ul id="list-items" className="mt-4">
            <li><input className='checkbox' type='checkbox'/> Visit Cinema <i className='remove fa fa-trash text-primary'></i><hr /></li>
            <li><input className='checkbox' type='checkbox'/> Visit Mall <i className='remove fa fa-trash text-primary'></i><hr /></li>
            <li><input className='checkbox' type='checkbox'/> Goto Gym <i className='remove fa fa-trash text-primary'></i><hr /></li>
            </ul>
            <form className="add-items">
                <input type="text" className="form-control" id="todo-list-item" placeholder="What do you need to do today?" />
                <button className="btn btn-block btn-primary mt-2" type="submit">Add to List</button>
            </form>
            <p>Am Adebayo Rilwan Ajibola, a fullstack web developer from lagos</p>
    </div>
  )
}
