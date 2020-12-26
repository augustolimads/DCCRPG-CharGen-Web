import Head from 'next/head'
import Header from '../components/Header'

import Main from '../layout/Main'
import Combat from '../layout/Combat'
import Magic from '../layout/Magic'
import Details from '../layout/Details'
import Equipment from '../layout/Equipment'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DCC RPG - Ficha de 'personagem'</title>
      </Head>
      <main>
        <Header />
        <form>
          <div 
            className='pt-20 md:pt-12 flex w-full overflow-x-scroll scroll-container md:grid md:grid-cols-4'
          >
            <Main className='min-w-full w-screen md:w-full' />
            <Combat className='min-w-full w-screen md:w-full' />
            <Equipment className='min-w-full w-screen md:w-full' />
            <Details className='min-w-full w-screen md:w-full' />
          </div>
        </form>
      </main>
    </div>
  )
}
