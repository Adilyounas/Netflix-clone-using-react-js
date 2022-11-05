import React, { useEffect, useState } from 'react'
import "./Home.scss"
import "./Home.scss"
import axios from "axios"
import { BsFillPlayFill } from 'react-icons/bs';
import { MdPlaylistPlay } from 'react-icons/md';




const apiKey = "d4207fd09571fe484dc5438658abcf56"
const url = "https://api.themoviedb.org/3/movie"
const upComing = "upcoming"
const topRated = "top_rated"
const populars = "popular"
const nowPlaying = "now_playing"
const latest = "latest"
const key = "?api_key"
const imgUrl = "https://image.tmdb.org/t/p/original"



function Card({ img }) {
  return (
    <img src={img} alt="img" className='card' />

  )
}

function Row({ title, arr = [] }) {

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div>
        {
          arr.map((item, index) => {
            return (
              <div key={index}>

                <Card img={`${imgUrl}/${item.poster_path}`} />
              </div>
            )
          })
        }



      </div>


    </div>

  )
}

const Home = () => {

  const [upComingMovies, setUpComingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularsMovies, setPopularsMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  // const [latestMovies, setLatestMovies] = useState([])
  const [genre, setGenre] = useState([])


  //////////////////////
  useEffect(() => {
    const fetchupComing = async () => {
      const { data: { results } } = await axios.get(`${url}/${upComing}?api_key=${apiKey}`)
      setUpComingMovies(results)
    }

    const fetchtopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)
    }

    const fetchpopulars = async () => {
      const { data: { results } } = await axios.get(`${url}/${populars}?api_key=${apiKey}`)
      setPopularsMovies(results)
    }

    const fetchnowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results)
    }


    const fetchGenre = async () => {
      const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=d4207fd09571fe484dc5438658abcf56`)
      setGenre(genres)
    }

    fetchupComing()
    fetchtopRated()
    fetchpopulars()
    fetchnowPlaying()
    fetchGenre()



  }, [])








  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage: `url(${"https://image.tmdb.org/t/p/original//y5Z0WesTjvn59jP6yo459eUsbli.jpg"})`
      }}>


        <div className="heading">

          {
            popularsMovies[0] && (<h2>{popularsMovies[0].original_title}</h2>)
          }

          {
            popularsMovies[0] && (<p>{popularsMovies[0].overview}</p>)
          }

          <div className="btn">
            <button>Play  <BsFillPlayFill /> </button>
            <button className='mylist'>My list  <MdPlaylistPlay /> </button>

          </div>


        </div>




      </div>
      <Row title={upComing} arr={upComingMovies} />
      <Row title={topRated} arr={topRatedMovies} />
      <Row title={populars} arr={popularsMovies} />
      <Row title={nowPlaying} arr={nowPlayingMovies} />
      {/* <Row title={latest} arr={latestMovies}/> */}

      <div className="gen">
        {
          genre.map((item) => {
            return (
              <h3 key={item.id}>{item.name}</h3>

            )
          })
        }
      </div>

    </section>
  )
}

export default Home