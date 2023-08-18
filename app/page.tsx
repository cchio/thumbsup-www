import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Image
          src="/thumbs-up-emoji.svg"
          alt="thumbsup"
          width={100}
          height={24}
          priority
        />
      </div>
    </main>
  )
}
