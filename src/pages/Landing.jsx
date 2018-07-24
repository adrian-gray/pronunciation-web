import React from 'react'
import MailchimpCustom from './../components/MailchimpCustom'

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
      <h4>Be in the know as soon as we launch</h4>
      <p>We are currently running in a limited test. We aim to launch the early beta in September 2018.</p>
      <MailchimpCustom />
    </div>
  </div>

export default Landing
