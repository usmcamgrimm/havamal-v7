import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'

export default function Gallery() {
  function HavamalImage() {
    return (
      <a href="#" className="image-group">
        <div className="image-container">
          <Image
            alt="Photos of Havamal"
            src="https://bit.ly/placeholder-img"
            className="single-image"
          />
        </div>
      </a>
    )
  }
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Gallery
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Gallery</h1>

      <section id="gallery">
        <div className="gallery-container">
          <div className="gallery-grid">

          </div>
        </div>
      </section>
    </>
  )
}
