import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {  
  return (
    <div className="container">
      <Head>
        <title>HULU | Built For Recruiters</title>
        <meta name="description" content="Built By Achal Chaudhary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Navbar/>
      <Results results={results}/>

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query;
  const query = genre.query;
  let req;
  if(query===undefined){
    req = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`).then(r=>r.json())
  }else{
    req = await fetch(`https://api.themoviedb.org/3${requests[query]?.url || requests.fetchTrending.url}`).then(r=>r.json())
  }
  return{
    props:{
      results:req.results
    }
  }
}