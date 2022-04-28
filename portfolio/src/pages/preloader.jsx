import React from 'react'

export default function Preloader() {
    window.onload = function() {
        // similar behavior as clicking on a link
        window.location.href = "http://briank.wtf";
    }
  return (
    <div id='preloader'></div>
  )
}
