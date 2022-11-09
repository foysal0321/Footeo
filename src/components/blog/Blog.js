import React from 'react';
import Usetitle from '../../useTitle/Usetitle';
import './Blog.css'

const Blog = () => {
    Usetitle('Blog')
    
    return (

        
        <div className='py-5 question'>
            <div className="q1">
                <h4 className='text-2xl text-red-600 py-2'>1. What is the difference between SQL and NOSQL?</h4>
                <h6 className='text-lg text-lime-500 font-bold'>SQL :</h6>
                <p>. SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them),</p>
                <p>. SQL databases are relational,</p>
                <p>. SQl databases use structured query language and have a predefined schema.</p>
                <p>. SQL databases are vertically scalable,</p>
                <h6 className='text-lg text-lime-500 font-bold'>NOSQL :</h6>
                <p>. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                <p>. NoSQL databases are non-relational,</p>
                <p>.  NoSQL databases have dynamic schemas for unstructured data,</p>
                <p>. while NoSQL databases are horizontally scalable.</p>
            </div> <br />
            <div className="q2">
                <h4 className='text-2xl text-red-600 py-2'>2. What is JWT, and how does it work?</h4>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</p>
                <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            </div> <br />
            <div className="q3">
                <h4 className='text-2xl text-red-600 py-2'>3. What is the difference between javascript and NodeJS?</h4>
                <h6 className='text-lg text-lime-500 font-bold'>JavaScript : </h6>
                <p>. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                <p>. Javascript is a programming language that is used for writing scripts on the website, </p>
                <p>. Javascript can only be run in the browsers,</p>
                <p>. 	It is basically used on the client-side.</p>
                <h5 className='text-lg text-lime-500 font-bold py-2'>NodeJS : </h5>
                <p>. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p>. NodeJS is a Javascript runtime environment.</p>
                <p>. We can run Javascript outside the browser with the help of NodeJS.</p>
                <p>. It is mostly used on the server-side.</p>
            </div> <br />
            <div className="q4">
                <h5 className='text-2xl text-red-600 py-2'>4. How does NodeJS handle multiple requests at the same time?</h5>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
            </div>
        </div>
    );
};

export default Blog;