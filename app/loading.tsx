import Image from "next/image"
// import spinner from '@/assets/loader.gif'

const LoadingPage = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }}>
        <Image 
            src='/images/logo.png'
            alt="loading..."
            height={50}
            width={50}
            className="w-auto h-auto animate-spin"
        />
    </div>
  )
}
export default LoadingPage