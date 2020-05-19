import Link from 'next/link';

// export default function FirstPost() {
//     return <Link href="/about"><h1> <a>First Post</a> </h1></Link> 
//   }

// import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
  