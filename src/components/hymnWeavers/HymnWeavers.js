import Image from 'next/image'
import styles from './hymnWeavers.module.css'
import styled from '@emotion/styled'

const hwImage = styled.span`
  & > span {
    max-width: 500px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 6px #000000;
  }
`;

export default function HymnWeavers() {
  return (
    <div className={styles.band}>
      <hwImage>
        <Image
          src="/images/band-photos/lennie.jpg"
          alt="Lennie Spetze"
          height={540}
          width={810}
        />
      </hwImage>
      <hwImage>
        <Image
          src="/images/band-photos/andreas.jpg"
          alt="Andreas Herlogsson"
          height={540}
          width={541}
        />
      </hwImage>
      <hwImage>
        <Image
          src="/images/band-photos/bjorn.jpg"
          alt="Björn Larsson"
          height={540}
          width={364}
        />
      </hwImage>
      <hwImage>
        <Image
          src="/images/band-photos/kjell.jpg"
          alt="Kjell Gilliusson"
          height={540}
          width={539}
        />
      </hwImage>
      <hwImage>
        <Image
          src="/images/band-photos/tino.jpg"
          alt="Tino Vesanen"
          height={540}
          width={810}
        />
      </hwImage>
    </div>
  )
}