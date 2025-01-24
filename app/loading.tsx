import Image from "next/image"
import spinner from '@/assets/loader.gif'

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
            src={spinner}
            alt="loading..."
            height={150}
            width={150}
        />
    </div>
  )
}
export default LoadingPage