import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url = '//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&amp;id=f0489cd39a'

// https://github.com/revolunet/react-mailchimp-subscribe/blob/master/demo/src/index.js

const Landing = () =>
  <div className='container'>
    <br />
    <br />
    <div className='jumbotron'>
      <h1 className='display-4'>English Pronunciation Lessons</h1>
      <h2>Improve English Pronunciation</h2>
      <p>Is poor English pronunciation holding you back in your career or studies? Do you want to improve your pronunciation, but are not sure how? We are here to help you.</p>
      <p>We have English pronunciation video lessons from a registered English pronunciation instructor. The pronunciation lessons are followed by English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. You will learn how to pronounce English clearly and professionally.</p>
      <p>Take your English pronunciation to the next level</p>
      <hr className='my-4' />
      <div className='container text-center'>
        <div className='mailchimp-subscribe'>
          <h3 className='h2'>Get Updated!</h3>
          <MailchimpSubscribe url={url} />
        </div>
      </div>
      <hr className='my-4' />
      <p>We are currently running in a limited test. We aim to launch the early beta in September 2018.</p>
      <p>Sign up to our launch list to know as soon as our site is live.</p>
    </div>
  </div>

export default Landing
