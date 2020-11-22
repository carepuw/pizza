import React from 'react'
import ContentLoader from "react-content-loader"

const LoaderPizza = () => {
    return (
        <ContentLoader
        speed={1}
        width={315}
        height={542}
        viewBox="0 0 326 542"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="140" /> 
        <rect x="0" y="304" rx="0" ry="0" width="280" height="25" /> 
        <rect x="0" y="346" rx="0" ry="0" width="280" height="88" />
      </ContentLoader>
    )
}

export default LoaderPizza;
