import React from 'react'

const Meta = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="페이지 제목" />
      <meta property="og:description" content="페이지 설명"/>
      <meta property="og:image" content="http://www.mysite.com/article/article1_featured_image.jpg"/>
      <meta property="og:url" content="http://www.mysite.com/article/article1.html"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="페이지 제목"/>
      <meta name="twitter:description" content="페이지 설명"/>
      <meta name="twitter:image" content="http://www.mysite.com/article/article1.html"/>
      <meta name="twitter:domain" content="사이트 명"/>
    </>
  )
}

export default Meta