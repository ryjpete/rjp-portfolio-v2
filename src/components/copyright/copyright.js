import React from 'react'

// Import component styles
import styles from './copyright.module.less'

const Images = ( props ) => (
  <span className={styles.logos}>
    <a
      href='https://www.figma.com/'
      target='_blank'
      rel='noreferrer'
    >
      <svg
        width='22'
        height='32'
        viewBox='0 0 18 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0)'>
          <path
            d='M4.50093 27C6.98443 27 9.00003 24.984 9.00003 22.5V18H4.50093C2.01743 18 0.00183105 20.016 0.00183105 22.5C0.00183105 24.984 2.01743 27 4.50093 27Z'
            fill={props.color} />
          <path
            d='M0.00183105 4.5C0.00183105 2.016 2.01743 0 4.50093 0H9.00003V9H4.50093C2.01743 9 0.00183105 6.984 0.00183105 4.5Z'
            fill={props.color} />
          <path
            d='M0.00183105 13.5C0.00183105 11.016 2.01743 9 4.50093 9H9.00003V18H4.50093C2.01743 18 0.00183105 15.984 0.00183105 13.5Z'
            fill={props.color} />
          <path
            d='M9 0H13.4991C15.9826 0 17.9982 2.016 17.9982 4.5C17.9982 6.984 15.9826 9 13.4991 9H9V0Z'
            fill={props.color} />
          <path
            d='M17.9982 13.5C17.9982 15.984 15.9826 18 13.4991 18C11.0156 18 9 15.984 9 13.5C9 11.016 11.0156 9 13.4991 9C15.9826 9 17.9982 11.016 17.9982 13.5Z'
            fill={props.color} />
        </g>
        <defs>
          <clipPath id='clip0'>
          <rect
            width='18'
            height='27'
            fill={props.color} />
          </clipPath>
        </defs>
      </svg>
    </a>
    <a
      href='https://www.gatsbyjs.com/'
      target='_blank'
      rel='noreferrer'
    >
      <svg
        width='30'
        height='32'
        viewBox='0 0 27 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <mask
          id='mask0'
          mask-type='alpha'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='27'
          height='27'
        >
          <path
            d='M0 0H27V27H0V0Z'
            fill='url(#pattern0)'/>
        </mask>
        <g mask='url(#mask0)'>
          <ellipse
          cx='13.5'
          cy='13.5'
          rx='13.86'
          ry='13.86'
          fill={props.color} />
        </g>
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              xlinkHref='#image0'
              transform='scale(0.00333333)'/>
          </pattern>
          <image
            id='image0'
            width='300'
            height='300'
            xlinkHref='data:image/png;base64,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'/>
        </defs>
      </svg>
    </a>
    <a
      href='https://www.contentful.com/'
      target='_blank'
      rel='noreferrer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='32'
      >
        <path
          fill={props.color}
          opacity='0.75'
          d='M9.7 22.3C8 20.7 7 18.5 7 16s1-4.7 2.6-6.3c1.4-1.4 1.4-3.6 0-5s-3.6-1.4-5 0C1.8 7.6 0 11.6 0 16s1.8 8.4 4.7 11.3c1.4 1.4 3.6 1.4 5 0 1.3-1.4 1.3-3.6 0-5z'/>
        <path
          fill={props.color}
          opacity='0.75'
          d='M9.7 9.7C11.3 8 13.5 7 16 7s4.7 1 6.3 2.6c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5C24.4 1.8 20.4 0 16 0S7.6 1.8 4.7 4.7c-1.4 1.4-1.4 3.6 0 5 1.4 1.3 3.6 1.3 5 0z'/>
        <path
          fill={props.color}
          opacity='0.75'
          d='M22.3 22.3C20.7 24 18.5 25 16 25s-4.7-1-6.3-2.6c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5C7.6 30.2 11.6 32 16 32s8.4-1.8 11.3-4.7c1.4-1.4 1.4-3.6 0-5-1.4-1.3-3.6-1.3-5 0z'/>
        <circle
          cx='7.2'
          cy='7.2'
          r='3.5'
          fill={props.color} />
        <circle
          cx='7.2'
          cy='24.8'
          r='3.5'
          fill={props.color} />
      </svg>
    </a>
  </span>
)

const Copyright = ( props ) => (

  <div className={`${styles.copyright} ${props.addClass ? styles[props.addClass] : ''}`}>
    <svg
      width='29'
      height='29'
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.18 13.1225C12.2404 12.7237 12.3733 12.3733 12.5425 12.0712C12.7117 11.7691 12.9533 11.5154 13.2554 11.322C13.5454 11.1408 13.9079 11.0562 14.355 11.0441C14.6329 11.0562 14.8867 11.1045 15.1162 11.2012C15.3579 11.31 15.5754 11.455 15.7446 11.6362C15.9137 11.8175 16.0467 12.035 16.1554 12.2766C16.2642 12.5183 16.3125 12.7841 16.3246 13.05H18.4875C18.4633 12.482 18.3546 11.9625 18.1492 11.4912C17.9437 11.02 17.6658 10.6091 17.3033 10.2708C16.9408 9.93246 16.5058 9.66663 15.9983 9.47329C15.4908 9.27996 14.935 9.19538 14.3187 9.19538C13.5333 9.19538 12.8446 9.32829 12.2646 9.60621C11.6846 9.88413 11.2012 10.2466 10.8146 10.7179C10.4279 11.1891 10.1379 11.7329 9.95666 12.3612C9.77541 12.9895 9.66666 13.642 9.66666 14.3429V14.6691C9.66666 15.37 9.76332 16.0225 9.94457 16.6508C10.1258 17.2791 10.4158 17.8229 10.8025 18.282C11.1892 18.7412 11.6725 19.1158 12.2525 19.3816C12.8325 19.6475 13.5212 19.7925 14.3067 19.7925C14.8746 19.7925 15.4062 19.6958 15.9017 19.5145C16.3971 19.3333 16.8321 19.0795 17.2067 18.7533C17.5812 18.427 17.8833 18.0525 18.1008 17.6175C18.3183 17.1825 18.4512 16.7233 18.4633 16.2279H16.3004C16.2883 16.4816 16.2279 16.7112 16.1192 16.9287C16.0104 17.1462 15.8654 17.3275 15.6842 17.4845C15.5029 17.6416 15.2975 17.7625 15.0558 17.847C14.8262 17.9316 14.5846 17.9558 14.3308 17.9679C13.8958 17.9558 13.5333 17.8712 13.2554 17.69C12.9533 17.4966 12.7117 17.2429 12.5425 16.9408C12.3733 16.6387 12.2404 16.2762 12.18 15.8775C12.1196 15.4787 12.0833 15.0679 12.0833 14.6691V14.3429C12.0833 13.92 12.1196 13.5212 12.18 13.1225ZM14.5 2.41663C7.82999 2.41663 2.41666 7.82996 2.41666 14.5C2.41666 21.17 7.82999 26.5833 14.5 26.5833C21.17 26.5833 26.5833 21.17 26.5833 14.5C26.5833 7.82996 21.17 2.41663 14.5 2.41663ZM14.5 24.1666C9.17124 24.1666 4.83332 19.8287 4.83332 14.5C4.83332 9.17121 9.17124 4.83329 14.5 4.83329C19.8287 4.83329 24.1667 9.17121 24.1667 14.5C24.1667 19.8287 19.8287 24.1666 14.5 24.1666Z'
        fill={props.color} />
    </svg>
    <p style={{
      color: props.color,
    }}>
      {new Date().getFullYear()} RJP
      <br />
      This mess of a site designed and developed by me using
      <Images
        color={props.color} />
    </p>
  </div>

)

export default Copyright
