

const features = [
  {
    name: 'NME',
    description:
      'DSC',

  },
]

export default function AboutMe() {
  return (
    <div>
      <div className="overflow-hidden bg-white dark:bg-zinc-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                {}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">About Me</p>
                <p className="mt-6 text-lg leading-8 dark:text-zinc-100 text-gray-600">
                Hello World!
                </p>
                {}
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                src="profile.jpg"
                alt=""
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] max-h-[53.4rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>

      {}
    </div>
  )
}