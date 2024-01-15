import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function KryptoBirdMarketplace({Component, pageProps}) {
  return (
    <div>
      <nav className='border-b p-6' style={{backgroundColor:'red'}}>
        <p className='text-4x1 font-bold text-white'>NFT Marketplace</p>
        <div className='flex mt-4 justify-center'>
        <Link href='/'className='mr-4'>Main Marketplace</Link>
            
           
          <Link href='/mint-item'
             className='mr-6'>
              Mint Tokens
            
          </Link>
          <Link href='/my-nfts'
             className='mr-6'>
              My NFts
            
          </Link>
          <Link href='/account-dashboard'
             className='mr-6'>
              Account Dashboard
            
          </Link>
          </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default KryptoBirdMarketplace 