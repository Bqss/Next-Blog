import React from 'react'
import styles from "./layout.module.css"
import utilStyles from "/styles/util.module.css"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const name = "basofi"
const siteTitle = "Bass media"

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="favicon" href="/favicon.ico" />
                <meta name='description' content='learn how to build a personal website using next.js' />
                <meta property='og:title' content='Tutor bang' />
                <meta property='twitter card' content='summary_large_image' />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}

export default Layout