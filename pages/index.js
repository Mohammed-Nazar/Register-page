import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Form from "../components/Form/Form"


export default function Home() {
  return( <div className="bg-[url('./../public/subtle-prism.svg')] h-screen flex justify-center items-center">
  <Form/>
  </div>);
}
