import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
           <h2 className='text-5xl text-center font-mono'>All Question Answer Is Here....!</h2>
           <div className='text-center text-2xl font-semibold mt-5'>
             <div>
             <p>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
            <br />
            <small className='p-4'>Ans = A refresh token allows an application to obtain a new access token without prompting the user.
            
            <br />
            Client-side storage APIs enable you to store data on the client-side, so you can create an app that will save its state between page loads, and perhaps even work when the device is</small>
            </p>
             </div>
             {/* qus-2 */}
             <div className='mt-3'>
             <p>2.Compare SQL and NoSQL databases?
            <br />
            <small className='p-4'>Ans = SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data</small>
            </p>
             </div>
            {/* qus3 */}
              <div className='mt-3'>
              <p>3.What is express js? What is Nest JS?
            
            <br />
            <small className='p-4'>Ans = Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
            Node.js framework that’s great for building highly testable and maintainable backend applications
            </small></p>
              </div>
            {/* qus4 */}
           <div className='mt-3'>
           <p>4.What is MongoDB aggregate and how does it work?
            <br />
            <small className='p-4'>Ans = When working with data in MongoDB, you may quickly have to run complex operations, with multiple stages of operations to gather metrics for your project.Generating reports and displaying useful metadata are just two major use cases where MongoDB aggregation operations can prove incredibly useful, powerful, and flexible.</small></p>
           </div>
           </div>
        </div>
    );
};

export default Blog;