import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-store-hero bg-no-repeat bg-cover">
      <div className="absolute z-10 flex flex-col justify-center small:p-32 gap-6">
        <span>
          <div className="flex flex-row flex-wrap gap-3 p-4">
            <div className="flex-1">
              <Heading
                level="h1"
                className="text-4xl text-bold leading-10 text-ui-fg-base font-normal text-grey-0"
              >
                A STEP FOR <br />
                HEALTHIER <br />
                AND HAPPIER <br />
                <span style={{ color: "#f58634" }}>LIFE</span> <br />
              </Heading>
            </div>
            <div className="flex-1">
              <Heading
                level="h2"
                className="text-2xl leading-10 text-ui-fg-subtle font-normal text-grey-0"
              >
                Ayurveda has several references to kansa's therapeutic benefits.
                The right proportion of copper and tin produces health benefits
                that have stood the test of time Kansa is man-made yet natural
                and provides the natural elements of copper and tin which are
                essential to the proper functioning of the body. This is a
                perfect gift for kids on their birthday
              </Heading>
              <br />
              <a href="/products/kasyantra">
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8">
                <div className="flex flex-row items-end" style={{ width: 200 }}>
                  <div className="flex-1 text-xl">BUY NOW</div>
                  <div className="flex-1">
                    <div style={{ float: 'right' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Hero
