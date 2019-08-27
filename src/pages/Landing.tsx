import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Mailchimp from "../components/Mailchimp";
import SEO from "../components/SEO";

export default () => {
  return (
    <Container>
      <SEO meta="landing" />
      <h1>{"Pronunciation Practice"}</h1>
      <h3>{"Improve Your Spoken English"}</h3>
      <p>
        {
          "Is poor English pronunciation holding you back in your career or studies? Do you want to improve your spoken English, but are not sure how? Help is on the way!"
        }
      </p>
      <p>
        {
          "We are currently producing over 60 videos lessons to help you improve your spoken English. The videos feature Nicky Brooks, a professional English language consultant, giving English language pronunciation lessons made for this site. She teaches how to make the sounds used in English, how to understand English sounds, and how to improve your accent in English."
        }
      </p>
      <p>
        {
          "Following the pronunciation lessons are English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. We are adding currently adding sounds and activities weekly. Improve your English pronunciation to speak clearly and professionally."
        }
      </p>
      <h5>{"Stay up to date as we add pronunciation activities"}</h5>
      <p>
        {
          "We are currently adding sounds and activities multiple times a week and are open in a limited testing capacity. We aim to launch in late 2019."
        }
      </p>
      <Mailchimp />
      <div className="text-center full-width pad2">
        <Link to="/home">
          <Button variant="success" className="btn btn-lg">
            {"Start Pronunciation Practice Now"}
          </Button>
        </Link>
      </div>
      <img
        className="full-width"
        src="/assets/images/improve-english-pronounciation.jpg"
        title="Learn to improve English pronunciation"
        alt="Learn to improve English pronunciation"
      />
    </Container>
  );
};
