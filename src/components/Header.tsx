import Image from 'next/image'

export default function Header() {

  return(
    <div className=" bg-pink-900 w-full h-20 ">
        <div className='flex'>
        <Image
              priority
              src="/MY.png"
              height={80}
              width={80}
            />
        </div>
    </div>
  )
}