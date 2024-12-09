import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-secondary antialiased">
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 text-white lg:py-24 lg:px-24 md:py-16 md:px-8 sm:py-16 sm:px-6">
        <div className="basis-2/5">
          <div>
            <LogoWhite />
          </div>
          <div className="lg:mt-1 md:mt-2 sm:mt-2">
            <address className="not-italic font-medium text-base">
              Unit 5, Karlbrook Enterprise Park, <br />
              Doughcloyne Industrial Estate, <br />
              Wilton, Cork, <br />
              Ireland <br />
              T12 H593
            </address>
          </div>
          <div className="flex items-center lg:mt-6 md:mt-3 sm:mt-6">
            <span>
              <PhoneIcon />
            </span>
            <h6 className="pl-2 font-normal text-lg">
              021 4545606 - 087 2576757
            </h6>
          </div>
          <div className="flex items-center mt-2">
            <span>
              <EmailIcon />
            </span>
            <h6 className="pl-2 font-medium text-base">
              <a
                href="mailto:info@solargardireland.com"
                className="hover:text-primary"
              >
                info@solargardireland.com
              </a>
            </h6>
          </div>
          <div className="flex items-center mt-3">
            <div>
              <FacebookIcon />
            </div>
            <div className="pl-2">
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="lg:basis-3/5 md:basis-10/12 sm:basis-10/12 antialiased">
          <div className="grid lg:grid-cols-2">
            <div>
              <h5 className="font-semibold lg:text-2xl md:text-2xl sm:text-xl lg:mt-0 sm:mt-8 sm:mb-1">
                Our Services
              </h5>
              <div className="flex font-medium text-base antialiased gap-12">
                <div>
                  <div>
                    <Link href="/Solar-Films">
                      <button className="text-sm font-medium hover:underline cursor-pointer">
                        Solar Films
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/Privacy-Films">
                      <button className="text-sm font-medium hover:underline">
                        Privacy Films
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/Safety-Films">
                      <button className="text-sm font-medium hover:underline">
                        Safety Films
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/CoverStyl">
                      <button className="text-sm font-medium hover:underline">
                        CoverStyl&apos;
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href="/Vehicle-tinting">
                      <button className="text-sm font-medium hover:underline">
                        Vehicle Tinting
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <span className="text-sm font-medium hover:underline">
                        Vehicle Wrapping
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/Manifestations-Graphics">
                      <span className="text-sm font-medium hover:underline">
                        Manifestations & Graphics
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold lg:text-2xl md:text-2xl sm:text-xl lg:mt-0 sm:mt-8 sm:mb-1">
                Our Company
              </h5>
              <div className="flex font-medium text-base antialiased gap-12">
                <div>
                  <Link href="/">
                    <button className="text-sm font-medium hover:underline">
                      About Us
                    </button>
                  </Link>
                  <div>
                    <Link href="/">
                      <button className="text-sm font-medium hover:underline">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href="/">
                      <button className="text-sm font-medium hover:underline">
                        Terms & Conditions
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <button className="text-sm font-medium hover:underline">
                        Privacy Policy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-normal lg:text-base md:text-base sm:text-sm mt-12 antialiased">
              Solar Gard Solutions Ireland specialises in premium glass film
              solutions for residential, commercial, and automotive needs. From
              solar and privacy films to CoverStyl&apos;, car tinting, and
              vehicle wrapping, we transform spaces and vehicles with style and
              functionality.
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:w-11/12 md:w-11/12 sm:w-11/12 pb-16 mx-auto text-white border-t-2 border-white">
        <h6 className="text-xs font-normal mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </h6>
      </div>
    </div>
  );
}

function LogoWhite() {
  return (
    <svg
      width="300"
      height="50"
      viewBox="0 0 346 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-72 md:w-80 sm:w-56"
    >
      <g clipPath="url(#clip0_957_34867)">
        <path
          d="M10.6786 37.2306C7.47066 34.0517 4.26811 30.8728 1.05469 27.6994C-0.619985 26.0399 -0.272 23.2543 1.86484 22.1121C2.80549 21.6056 3.89294 21.5302 4.95864 22.0905C6.06784 22.6724 6.82362 23.6099 7.67727 24.4504C9.48244 26.2231 11.2441 28.0442 13.033 29.833C16.2355 33.0334 19.4489 36.2231 22.6515 39.4235C23.6465 40.4203 24.7883 41.1961 26.1205 41.6487C27.5015 42.1175 28.937 42.236 30.405 42.0312C32.1776 41.778 33.7435 41.0776 35.043 39.8761C35.8695 39.111 36.5926 38.2597 37.0928 37.209C37.7127 35.8998 38.0063 34.542 38.0063 33.1304C38.0063 32.3761 37.8106 31.6164 37.6529 30.8675C37.2179 28.7823 35.7825 27.3491 34.3253 25.9321C32.5854 24.2349 30.8509 22.5377 29.1218 20.8351C28.3389 20.0593 27.4798 19.3427 26.811 18.4752C25.816 17.1983 25.816 15.3394 26.9469 14.0463C27.8223 13.0442 28.9098 12.5862 30.2093 12.7748C31.1554 12.9149 31.9166 13.4537 32.5962 14.1433C34.2492 15.8351 35.9456 17.4784 37.6257 19.1433C38.8708 20.3772 40.116 21.6164 41.3611 22.8448C42.5627 24.0248 43.7698 25.1994 44.9769 26.3685C46.097 27.4569 48.1033 27.2953 49.169 26.0506C50.0607 25.0108 50.126 23.2597 49.0113 22.1875C47.2714 20.5172 45.5587 18.8147 43.8405 17.1175C41.6275 14.9353 39.4254 12.7425 37.1907 10.5765C36.4241 9.83297 35.6302 9.10021 34.7548 8.4806C34.173 8.07112 33.4553 7.82866 32.7702 7.59159C31.7208 7.21983 30.6116 7.13362 29.5133 7.19289C28.7956 7.23599 28.0724 7.38146 27.3765 7.58082C26.7077 7.7694 26.0335 8.01185 25.4354 8.35668C24.7829 8.72845 24.1739 9.20797 23.6084 9.70366C22.5536 10.6304 21.7272 11.7349 21.2487 13.0657C20.8409 14.1864 20.6016 15.3287 20.5853 16.5356C20.569 17.6616 20.7648 18.75 21.1291 19.7899C21.564 21.0291 22.3035 22.1067 23.2659 23.0334C24.5273 24.2565 25.7453 25.5226 26.9959 26.7565C28.4422 28.1897 29.9048 29.6067 31.3565 31.0345C32.5147 32.1767 32.9986 33.5506 32.4168 35.0862C32.0199 36.1369 31.2206 36.9127 30.0407 37.1929C28.5672 37.5431 27.4037 37.0582 26.3706 36.0129C23.5813 33.2004 20.7648 30.4095 17.9374 27.6293C16.8717 26.5787 16.0452 25.361 15.3764 24.0571C14.202 21.778 13.5332 19.3373 13.5984 16.7565C13.6311 15.458 13.7126 14.1487 13.9627 12.8825C14.1694 11.8373 14.5772 10.8136 15.023 9.83836C15.5015 8.7931 16.0072 7.71552 16.714 6.82651C17.6927 5.59806 18.8019 4.45582 19.9872 3.41595C20.7811 2.72091 21.7815 2.25754 22.7167 1.7403C23.3529 1.39009 24.0217 1.0722 24.7068 0.840517C25.4789 0.576509 26.2836 0.371767 27.0883 0.247845C28.0724 0.107759 29.062 0 30.0407 0C31.0357 0 32.0362 0.080819 33.0149 0.242457C33.9773 0.404095 34.9397 0.657328 35.8586 0.980603C36.6252 1.24461 37.343 1.65409 38.0716 2.01509C40.3171 3.11961 41.9266 4.97845 43.6719 6.68103C45.9447 8.89547 48.1903 11.1315 50.4468 13.3621C51.8441 14.7468 53.2469 16.1207 54.6171 17.5323C55.4545 18.3944 55.9329 19.472 56.3679 20.5873C56.9497 22.0797 57.0693 23.6099 56.9225 25.167C56.7866 26.5894 56.2864 27.8987 55.6339 29.1864C54.6171 31.18 52.8663 32.4784 51.3439 33.9871C48.3425 36.9558 45.3031 39.8869 42.2637 42.8179C40.7086 44.3211 39.1644 45.8405 37.517 47.2414C36.7177 47.9256 35.7281 48.4267 34.7603 48.8739C33.9012 49.2672 32.9714 49.5582 32.0416 49.736C31.0412 49.93 29.9972 50.0216 28.9805 50C27.9311 49.9784 26.8599 49.8599 25.8432 49.6013C24.8318 49.3481 23.864 48.9009 22.907 48.486C20.6723 47.5162 19.188 45.6465 17.5133 44.0032C15.2242 41.7619 12.9569 39.4935 10.6841 37.2414C10.6732 37.236 10.6786 37.236 10.6786 37.2306Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.2043 9.47739L87.3874 15.6088H75.9365C73.8431 15.6088 71.7172 15.4095 70.8473 16.9451C70.396 17.8071 70.396 18.8955 70.8473 19.7414C71.7498 21.2015 73.8431 21.0776 75.284 21.0776H80.2972C84.4838 21.0776 87.3547 21.7673 89.6819 25.8298C91.3239 28.5507 91.1553 33.6369 89.3882 36.6379C87.1372 40.4957 83.2768 40.5442 79.5033 40.5442H62.936V34.4127H77.0076C78.405 34.4127 81.6021 34.6121 82.6243 32.8772C83.1191 32.0151 83.1191 30.9267 82.6243 30.0323C81.6782 28.4968 79.5849 28.6961 78.1549 28.6961H73.0656C69.5422 28.6961 66.2092 28.0065 63.9582 24.0679C62.3161 21.2231 62.2835 16.3793 63.9582 13.5399C66.5463 9.111 72.1195 9.48276 74.9904 9.48276L91.2043 9.47739Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M106.548 9.40196C110.442 9.00325 118.119 8.87933 121.92 13.7069C125.688 18.4591 125.889 27.3276 124.171 32.4461C122.73 36.7187 120.729 39.1487 116.336 40.2533C112.769 41.1153 102.808 41.5894 98.4959 37.8071C94.4288 34.2241 93.5806 26.2339 94.2765 21.7888C94.8964 17.8071 96.2939 12.8125 101.334 10.5657C103.058 9.80065 104.993 9.52588 106.548 9.40196ZM101.753 24.3912C101.802 21.1315 102.623 17.8449 106.766 16.3793C108.658 15.7328 112.709 15.9321 114.77 17.5647C117.592 19.7953 117.809 24.6821 117.515 26.7403C117.222 29.3373 116.368 31.8589 113.171 33.319C111.045 34.2888 107.511 34.3319 105.292 32.9203C101.91 30.695 101.709 27.0367 101.753 24.3912Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M136.535 9.47739V30.2479V34.4289H150.188L146.746 40.5604H129.075V19.7899V9.46121H136.535V9.47739Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M173.568 9.47738C175.46 14.6713 179.261 25.0485 181.153 30.2479C182.099 32.8287 184.008 37.9957 184.97 40.5765C183.002 40.5765 179.06 40.5765 177.092 40.5765C176.564 39.1649 175.493 36.3362 174.966 34.9354C173.166 34.9354 169.583 34.9354 167.783 34.9354C166.87 33.3998 165.054 30.3071 164.135 28.7554C163.004 31.708 160.72 37.6239 159.589 40.5765C157.572 40.5765 153.554 40.5765 151.553 40.5765C153.478 35.3825 157.311 25.0054 159.214 19.806C160.176 17.2252 162.101 12.0582 163.074 9.47738C165.684 9.47738 170.942 9.47738 173.568 9.47738ZM164.303 28.2651C165.374 25.3287 167.5 19.4558 168.571 16.5194C169.61 19.4558 171.703 25.3287 172.758 28.2651C170.632 28.2651 166.413 28.2651 164.303 28.2651Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187.716 9.47739H204.577C207.649 9.47739 210.813 9.31036 213.559 12.7694C215.778 15.6142 215.81 20.4849 215.158 23.0065C214.581 25.361 213.434 27.0366 210.938 28.1735C209.34 28.9116 208.35 28.944 207.246 29.0356L215.005 40.5819H206.317L195.208 23.75V40.5819H187.748V19.8114V9.48276M195.176 22.8556V15.6142H201.613C202.837 15.6142 206.284 15.3664 207.399 17.3222C207.893 18.2112 207.926 20.1186 207.274 21.2285C206.202 23.0119 203.707 22.8556 201.456 22.8556H195.176Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M247.765 9.47741L244.073 16.1476H236.439C233.492 16.1476 229.751 15.8998 227.533 19.7576C226.059 22.403 225.983 27.9688 227.533 30.5334C229.583 33.9925 232.747 33.9009 235.645 33.9009H239.337V28.3352H231.377V21.708H246.797V40.5711H233.019C228.952 40.5711 223.988 40.2802 220.916 35.1617C217.719 29.8707 217.8 20.0808 220.84 14.8869C223.879 9.5205 229.42 9.47741 233.345 9.47741H247.765Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M271.145 9.47738L278.73 30.2479L282.547 40.5765H274.668L272.542 34.9354H265.36L261.711 28.7554L257.166 40.5765H249.129L256.791 19.806L260.651 9.47738H271.145ZM261.869 28.2651L266.137 16.5194L270.324 28.2651H261.869Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M285.293 9.47739H302.154C305.226 9.47739 308.39 9.31036 311.136 12.7694C313.355 15.6142 313.387 20.4849 312.735 23.0065C312.158 25.361 311.011 27.0366 308.515 28.1735C306.917 28.9116 305.927 28.944 304.824 29.0356L312.583 40.5819H303.894L292.786 23.75V40.5819H285.326V19.8114V9.48276M292.758 22.8556V15.6142H299.196C300.419 15.6142 303.867 15.3664 304.981 17.3222C305.476 18.2112 305.509 20.1186 304.856 21.2285C303.785 23.0119 301.289 22.8556 299.038 22.8556H292.758Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M330.705 9.4774C334.892 9.4774 340.383 9.35348 343.657 14.9677C346.729 20.2102 346.772 29.7575 343.825 34.8761C340.753 40.2425 336.316 40.4849 331.521 40.5657H316.552V19.7953V9.46661H330.7M324.017 33.9548V16.32H328.405C331.928 16.32 334.843 16.0722 336.936 19.6121C338.535 22.1768 338.535 27.8987 336.936 30.6627C334.919 34.2726 331.396 33.9548 328.204 33.9548H324.017Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_957_34867">
          <rect width="346" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0023 0C6.28121 0 0 5.83061 0 12.9978C0 16.739 1.73862 20.3015 4.77013 22.7722C5.01284 22.9683 5.3804 22.9455 5.59393 22.7224C5.8063 22.4971 5.78296 22.1559 5.54026 21.9577C2.76079 19.6928 1.16569 16.4271 1.16569 12.9978C1.16569 6.42959 6.92415 1.08315 14.0012 1.08315C21.077 1.08315 26.8366 6.42959 26.8366 12.9978C26.8366 19.5672 21.077 24.9125 14.0012 24.9125C12.2637 24.9125 11.1575 24.619 10.8063 24.0612C10.3594 23.3549 11.0572 22.0941 11.6091 21.1681L11.9253 21.298C12.245 21.4291 12.5823 21.4962 12.93 21.4962C13.916 21.4962 14.8098 20.9558 15.2089 20.1196L15.7211 19.0397C16.2765 17.8753 15.7048 16.5083 14.4504 15.9917L12.7071 15.2768C12.5228 15.202 12.3419 14.8294 12.3489 14.1676C12.3582 13.4019 12.6173 12.4303 13.0595 11.5009C14.0502 9.42018 15.3769 8.53633 15.8308 8.7183L17.5741 9.43209C18.8028 9.93359 20.3197 9.38335 20.8565 8.25254L21.3699 7.17264C21.6371 6.60831 21.6546 5.98009 21.4131 5.40385C21.1739 4.82869 20.7071 4.37377 20.098 4.12465L18.3571 3.40868C18.0035 3.26462 17.6208 3.19205 17.2159 3.19205C14.7106 3.19205 11.6044 6.03641 9.66511 10.1091C7.3734 14.9248 7.5986 19.5271 10.1785 20.5864L10.5356 20.7326C9.83197 21.9143 9.04201 23.4178 9.7958 24.6136C10.3851 25.5462 11.7596 26 13.9977 26C21.7188 26 28 20.1683 28 13.0022C28.0047 5.83061 21.7235 0 14.0023 0Z"
        fill="white"
      />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg
      width="23"
      height="15"
      viewBox="0 0 23 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3819 7.40614L21.9588 0.21941C21.693 0.0756588 21.3961 0 21.0944 0H1.90541C1.60372 0 1.30675 0.0756588 1.04102 0.21941L9.61793 7.40614C10.7008 8.33485 12.2989 8.33485 13.3819 7.40614Z"
        fill="white"
      />
      <path
        d="M22.6913 0.9114L16.022 6.49974L22.7395 13.569C22.9107 13.2607 23.0005 12.9127 23.0005 12.5599V2.00452C23.0015 1.61865 22.8946 1.24052 22.6913 0.9114Z"
        fill="white"
      />
      <path
        d="M0.309251 0.911255C0.105919 1.23943 -0.000938018 1.61867 6.20373e-06 2.00452V12.5599C6.20373e-06 12.9127 0.0889058 13.2598 0.260079 13.569L6.97761 6.49974L0.309251 0.911255Z"
        fill="white"
      />
      <path
        d="M13.9875 8.20524C12.5566 9.4328 10.4447 9.4328 9.01385 8.20524L7.74373 7.1413L0.947754 14.292C1.23526 14.4707 1.56816 14.5653 1.90672 14.5662H21.0947C21.4333 14.5653 21.7653 14.4707 22.0537 14.292L15.2577 7.1413L13.9875 8.20524Z"
        fill="white"
      />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 3C5.96933 3 0 8.96933 0 16.3333C0 23.0173 4.924 28.5373 11.34 29.5013V19.8667H8.04133V16.3613H11.34V14.0293C11.34 10.168 13.2213 8.47333 16.4307 8.47333C17.968 8.47333 18.78 8.58667 19.1653 8.63867V11.6973H16.976C15.6133 11.6973 15.1373 12.9893 15.1373 14.4453V16.3613H19.1307L18.5893 19.8667H15.1387V29.5293C21.6467 28.648 26.6667 23.0827 26.6667 16.3333C26.6667 8.96933 20.6973 3 13.3333 3Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0C3.3585 0 0 3.3585 0 7.5V19.5C0 23.6415 3.3585 27 7.5 27H19.5C23.6415 27 27 23.6415 27 19.5V7.5C27 3.3585 23.6415 0 19.5 0H7.5ZM22.5 3C23.328 3 24 3.672 24 4.5C24 5.328 23.328 6 22.5 6C21.672 6 21 5.328 21 4.5C21 3.672 21.672 3 22.5 3ZM13.5 6C17.6415 6 21 9.3585 21 13.5C21 17.6415 17.6415 21 13.5 21C9.3585 21 6 17.6415 6 13.5C6 9.3585 9.3585 6 13.5 6ZM13.5 9C12.3065 9 11.1619 9.47411 10.318 10.318C9.47411 11.1619 9 12.3065 9 13.5C9 14.6935 9.47411 15.8381 10.318 16.682C11.1619 17.5259 12.3065 18 13.5 18C14.6935 18 15.8381 17.5259 16.682 16.682C17.5259 15.8381 18 14.6935 18 13.5C18 12.3065 17.5259 11.1619 16.682 10.318C15.8381 9.47411 14.6935 9 13.5 9Z"
        fill="white"
      />
    </svg>
  );
}
