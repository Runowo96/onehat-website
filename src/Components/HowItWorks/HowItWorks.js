import React from 'react'
import "./HowItWorks.scss";
import hatSelect from "../../assets/images/buckethat-colors-square.png"
import patchSheet from "../../assets/images/Dino_Sheet-removebg-preview.png"
import bucketHat from "../../assets/images/Untitled_design-removebg-preview.png"
function HowItWorks() {
  return (
    <section className='how-it-works'>
    <h2 className='how-it-works__header'>How it works</h2>
    <section className='how-it-works__sub-block-container'>
    <article className='how-it-works__sub-block'>
        <h3 className='how-it-works__sub-block-header'>1. Select your color</h3>
    <img className='how-it-works__image' src={hatSelect} alt="selection of bucket hats in different colors" />
    </article>
    <article className='how-it-works__sub-block'>
        <h3 className='how-it-works__sub-block-header'>2. Collect your patches</h3>
    <img className='how-it-works__image' src={patchSheet} alt="selection of bucket hats in different colors" />
    </article>
    <article className='how-it-works__sub-block'>
        <h3 className='how-it-works__sub-block-header'>3. BE CREATIVE!</h3>
    <img className='how-it-works__image' src={bucketHat} alt="selection of bucket hats in different colors" />
    </article>

    </section>

    </section>
  )
}

export default HowItWorks
