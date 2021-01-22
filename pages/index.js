import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "../components/Header"
import Header from "../components/Header";
import JumboTron from "../components/Jumbotron";
import Main from "../components/Body";

export default function Home() {
  return (
      <>
        <Header/>
        <JumboTron/>
        <Main/>
      </>
  )
}
