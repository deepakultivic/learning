import React from 'react'
import "./style.css"
const Loader = () => {
    return (
        <div>
            <div class="loader-wrapper">
                <div class="loader-container">
                    <h1 class="lt">&lt</h1>
                    <h1 class="loader">/</h1>
                    <h1 class="lt" id="ltNd">&lt</h1>
                </div>
            </div>
        </div>
    )
}

export default Loader
