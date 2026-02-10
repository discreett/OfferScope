'use client'

import Dropzone from './Dropzone'
import styles from '@/styles/home.module.css'

function myHome() {
    return (
        <main>
            <div>
                <header>
                <h1>OfferScope</h1>
                <nav>Placeholder</nav>
                </header>
                
                <p>Prepare your future in real time.</p>
                <p>Upload offer letters. Parse information in real time. Powered by A.I.</p>
                <Dropzone />

                <footer>
                    <p>This tool provides informational summaries and comparisons only.</p>
                    <ul>
                        <li>It does not provide:</li>

                        <li>Legal advice</li>

                        <li>Financial advice</li>

                        <li>Employment advice</li>
                    </ul>
                </footer>
            </div>
        </main>
    )
}

export default myHome