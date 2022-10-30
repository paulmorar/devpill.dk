import Head from 'next/head'

export default function Home() {
    const currentDate = new Date()

    return (
        <div className="h-screen flex justify-center items-center bg-white max-sm:bg-[#092540]">
            <Head>
                <title>DevPill.dk</title>
                <meta
                    name="description"
                    content="You next generation solutions"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 m-1">
                <div className="mx-auto max-w-4xl rounded-3xl sm:bg-[#092540] p-1 text-center sm:p-20">
                    <h2 className="text-5xl font-bold leading-tight text-white">
                        Grow rapidly with the use of our design and development
                        skills
                    </h2>
                    <p className="mt-5 text-xl leading-8 text-white">
                        World class design and development consultants.
                    </p>
                    <p className="mt-5 text-xl leading-8 text-white">
                        Off the shelf SaaS products.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a
                            className="flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-lg font-medium text-white"
                            href="mailto:paulcornelmorar@gmail.com?subject=[devpill.dk]Let's talk"
                        >
                            <span>Drop us a mail</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
