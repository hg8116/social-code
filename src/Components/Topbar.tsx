import { FC } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Topbar: FC = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Social Code</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center flex-shrink md:w-[700px] sm:w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={4000}
            className="text-[18px] text-black"
            >
            <div>
              <p>
                Generate stunning code snippet images for social media sharing!
              </p>
            </div>
            <div>
              <p>
                Code with flair! Social Code lets you craft, share, and showcase
                your code snippets!
              </p>
            </div>
            <div>
              <p>
                Because your code deserves a visually stunning spotlight on
                social media!
              </p>
            </div>
            <div>
              <p>
                Code sharing redefined with stunning PNGs for your social media
                audience.
              </p>
            </div>
          </Carousel>
        </nav>
      </div>
    </header>
  )
}

export default Topbar
