import Link from "next/link";

import DesktopFlyoutMenu from "./desktop-flyout-menu";

export default function NavDesktop() {
  return (
    <div>
      <div className="bg-white text-white absolute z-10 w-10/12 mx-auto h-14 left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 mt-6 rounded-2xl flex items-center xl:visible lg:visible md:visible sm:invisible">
        <div className="flex w-11/12 mx-auto items-center justify-between antialiased">
          <div className="flex items-center">
            <div>
              <Link href="/">
                <LogoNew />
              </Link>
            </div>
            <div className="text-secondary pl-4 antialiased">
              <ul className="inline-flex font-medium text-base">
                <li>
                  <DesktopFlyoutMenu />
                </li>
                <Link href="/Manifestations-Graphics">
                  <li className="pl-4">Manifestations & Graphics</li>
                </Link>
                <Link href="/CoverStyl">
                  <li className="pl-4">CoverStyl&apos;</li>
                </Link>
                <Link href="/Vehicle-tinting">
                  <li className="pl-4">Vehicle Tinting</li>
                </Link>
                {/* <li className="pl-4">Vehicle Wrapping</li>
                <li className="pl-4">Cloaking</li> */}
              </ul>
            </div>
          </div>
          <div className="text-left text-secondary"></div>
          <div className="text-secondary">KKK</div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="77"
      height="21"
      viewBox="0 0 77 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.5467 10.1819C76.5467 12.3679 76.1216 14.212 75.2715 15.7142C74.4213 17.2099 73.274 18.3445 71.8294 19.1179C70.3848 19.885 68.774 20.2685 66.997 20.2685C65.2072 20.2685 63.59 19.8818 62.1454 19.1084C60.7072 18.3285 59.563 17.1907 58.7129 15.695C57.8691 14.1929 57.4473 12.3552 57.4473 10.1819C57.4473 7.99578 57.8691 6.15487 58.7129 4.65914C59.563 3.157 60.7072 2.02242 62.1454 1.25537C63.59 0.481934 65.2072 0.0952148 66.997 0.0952148C68.774 0.0952148 70.3848 0.481934 71.8294 1.25537C73.274 2.02242 74.4213 3.157 75.2715 4.65914C76.1216 6.15487 76.5467 7.99578 76.5467 10.1819ZM71.0623 10.1819C71.0623 9.00573 70.9057 8.01496 70.5925 7.20956C70.2857 6.39777 69.8287 5.78414 69.2214 5.36865C68.6206 4.94678 67.8791 4.73584 66.997 4.73584C66.1149 4.73584 65.3702 4.94678 64.763 5.36865C64.1621 5.78414 63.7051 6.39777 63.3919 7.20956C63.0851 8.01496 62.9316 9.00573 62.9316 10.1819C62.9316 11.358 63.0851 12.352 63.3919 13.1638C63.7051 13.9692 64.1621 14.5828 64.763 15.0047C65.3702 15.4201 66.1149 15.6279 66.997 15.6279C67.8791 15.6279 68.6206 15.4201 69.2214 15.0047C69.8287 14.5828 70.2857 13.9692 70.5925 13.1638C70.9057 12.352 71.0623 11.358 71.0623 10.1819Z"
        fill="#3163C6"
      />
      <path
        d="M49.4197 6.84521C49.3366 6.50644 49.2055 6.20921 49.0265 5.95352C48.8476 5.69145 48.6238 5.47093 48.3554 5.29195C48.0933 5.10658 47.7865 4.96915 47.4349 4.87966C47.0898 4.78378 46.7094 4.73584 46.2939 4.73584C45.3991 4.73584 44.6352 4.94997 44.0024 5.37824C43.376 5.80651 42.8966 6.42334 42.5642 7.22874C42.2382 8.03414 42.0752 9.00573 42.0752 10.1435C42.0752 11.2941 42.2318 12.2785 42.545 13.0966C42.8582 13.9148 43.3248 14.5412 43.9449 14.9759C44.5649 15.4106 45.3351 15.6279 46.2556 15.6279C47.0674 15.6279 47.7417 15.5096 48.2787 15.2731C48.822 15.0366 49.2279 14.701 49.4964 14.2664C49.7648 13.8317 49.8991 13.3204 49.8991 12.7323L50.8195 12.8282H46.3323V9.03129H55.0383V11.7543C55.0383 13.5441 54.6579 15.075 53.8973 16.347C53.143 17.6126 52.1011 18.5842 50.7716 19.2618C49.4484 19.9329 47.9303 20.2685 46.2172 20.2685C44.306 20.2685 42.6281 19.8626 41.1835 19.0508C39.7389 18.239 38.6107 17.0821 37.7989 15.5799C36.9935 14.0778 36.5908 12.2912 36.5908 10.2202C36.5908 8.59664 36.8369 7.15843 37.3291 5.90558C37.8277 4.65274 38.518 3.59486 39.4001 2.73193C40.2822 1.86262 41.3018 1.20743 42.4587 0.766379C43.6157 0.318936 44.8557 0.0952148 46.1789 0.0952148C47.3422 0.0952148 48.4225 0.261408 49.4197 0.593795C50.4232 0.919788 51.3085 1.38641 52.0756 1.99365C52.849 2.5945 53.4722 3.30722 53.9452 4.13179C54.4182 4.95637 54.7059 5.86084 54.8082 6.84521H49.4197Z"
        fill="#3163C6"
      />
      <path
        d="M34.201 10.1819C34.201 12.3679 33.7759 14.212 32.9258 15.7142C32.0756 17.2099 30.9283 18.3445 29.4837 19.1179C28.0391 19.885 26.4283 20.2685 24.6513 20.2685C22.8615 20.2685 21.2443 19.8818 19.7997 19.1084C18.3615 18.3285 17.2173 17.1907 16.3672 15.695C15.5234 14.1929 15.1016 12.3552 15.1016 10.1819C15.1016 7.99578 15.5234 6.15487 16.3672 4.65914C17.2173 3.157 18.3615 2.02242 19.7997 1.25537C21.2443 0.481934 22.8615 0.0952148 24.6513 0.0952148C26.4283 0.0952148 28.0391 0.481934 29.4837 1.25537C30.9283 2.02242 32.0756 3.157 32.9258 4.65914C33.7759 6.15487 34.201 7.99578 34.201 10.1819ZM28.7166 10.1819C28.7166 9.00573 28.56 8.01496 28.2468 7.20956C27.94 6.39777 27.483 5.78414 26.8757 5.36865C26.2749 4.94678 25.5334 4.73584 24.6513 4.73584C23.7692 4.73584 23.0245 4.94678 22.4173 5.36865C21.8164 5.78414 21.3594 6.39777 21.0462 7.20956C20.7393 8.01496 20.5859 9.00573 20.5859 10.1819C20.5859 11.358 20.7393 12.352 21.0462 13.1638C21.3594 13.9692 21.8164 14.5828 22.4173 15.0047C23.0245 15.4201 23.7692 15.6279 24.6513 15.6279C25.5334 15.6279 26.2749 15.4201 26.8757 15.0047C27.483 14.5828 27.94 13.9692 28.2468 13.1638C28.56 12.352 28.7166 11.358 28.7166 10.1819Z"
        fill="#3163C6"
      />
      <path
        d="M0.518066 20.0001V0.36377H5.84903V15.7047H13.788V20.0001H0.518066Z"
        fill="#3163C6"
      />
    </svg>
  );
}
function LogoNew() {
  return (
    <svg
      width="199"
      height="43"
      viewBox="0 0 199 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.9919 12.1337L61.9841 15.386H55.9594C54.8571 15.386 53.739 15.2799 53.2811 16.095C53.0448 16.551 53.0448 17.1301 53.2811 17.5783C53.7548 18.3527 54.8571 18.2873 55.6157 18.2873H58.2533C60.4578 18.2873 61.9682 18.6541 63.1926 20.8058C64.0586 22.2485 63.9682 24.9477 63.0377 26.5372C61.8541 28.5839 59.8213 28.6076 57.8372 28.6076H49.1173V25.3552H56.5224C57.2573 25.3552 58.9395 25.4614 59.4777 24.5402C59.7388 24.0841 59.7388 23.505 59.4777 23.032C58.9791 22.2169 57.8779 22.323 57.1261 22.323H54.4478C52.5949 22.323 50.8391 21.9562 49.6554 19.8688C48.7894 18.3606 48.7736 15.7924 49.6554 14.2842C51.0189 11.9361 53.9504 12.1314 55.4608 12.1314H63.9919V12.1337Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.0654 12.0932C74.1151 11.8809 78.1557 11.8155 80.1568 14.3758C82.1409 16.8944 82.2471 21.5984 81.3404 24.3134C80.5807 26.5802 79.5282 27.8683 77.2173 28.4553C75.3395 28.9114 70.0983 29.1643 67.8281 27.1594C65.6891 25.2594 65.2403 21.0205 65.6077 18.6645C65.9345 16.5534 66.6693 13.9039 69.3227 12.7129C70.2294 12.3054 71.2492 12.1587 72.0665 12.0932M69.5432 20.0417C69.568 18.3134 69.9999 16.5692 72.1807 15.7948C73.1767 15.4528 75.3078 15.5589 76.3932 16.4225C77.8787 17.6044 77.9929 20.1975 77.838 21.2891C77.6831 22.6664 77.2343 24.0041 75.552 24.7785C74.4339 25.2922 72.5719 25.317 71.404 24.5663C69.6246 23.3843 69.5183 21.4438 69.5432 20.0417Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.8483 12.1335V25.3653H95.0329L93.2206 28.6176H83.9219V12.1245H87.8483V12.1324V12.1335Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107.337 12.1333C108.333 14.8889 110.333 20.3911 111.329 23.1468C111.828 24.5161 112.831 27.2559 113.337 28.6253H109.189C108.911 27.8757 108.348 26.3754 108.071 25.6337H104.29C103.809 24.8187 102.853 23.1795 102.372 22.3565C101.776 23.9223 100.575 27.0606 99.9794 28.6253H95.75C96.7618 25.8696 98.7787 20.3674 99.7827 17.6118C100.289 16.2425 101.301 13.5026 101.815 12.1333C103.187 12.1333 105.954 12.1333 107.335 12.1333M102.462 22.0946C103.025 20.5379 104.144 17.4233 104.707 15.8665C105.255 17.4233 106.357 20.5379 106.912 22.0946H102.462Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.783 12.1335H123.658C125.275 12.1335 126.94 12.0443 128.385 13.8777C129.553 15.3858 129.569 17.9699 129.226 19.3076C128.924 20.555 128.319 21.4435 127.006 22.0463C126.164 22.438 125.642 22.4538 125.062 22.5024L129.145 28.6244H124.573L118.727 19.6971V28.6244H114.799V12.1335M118.71 19.2252V15.3858H122.098C122.743 15.3858 124.556 15.2549 125.144 16.2912C125.405 16.7642 125.422 17.7746 125.078 18.3616C124.515 19.3076 123.2 19.2252 122.016 19.2252H118.71Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.386 12.1333L144.443 15.6712H140.426C138.875 15.6712 136.907 15.5403 135.74 17.587C134.964 18.9891 134.924 21.94 135.74 23.3014C136.817 25.1359 138.484 25.0873 140.01 25.0873H141.953V22.1364H137.765V18.6222H145.88V28.6253H138.63C136.491 28.6253 133.878 28.4706 132.261 25.7556C130.579 22.9515 130.62 17.7586 132.221 15.0029C133.82 12.1581 136.736 12.1333 138.802 12.1333H146.386Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M158.689 12.1333L162.681 23.1468L164.688 28.6253H160.54L159.422 25.6337H155.642L153.723 22.3565L151.331 28.6253H147.102L151.134 17.6118L153.167 12.1333H158.686M153.807 22.0946L156.052 15.8665L158.257 22.0946H153.807Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.137 12.1335H175.012C176.628 12.1335 178.293 12.0443 179.738 13.8777C180.906 15.3858 180.922 17.9699 180.579 19.3076C180.278 20.555 179.673 21.4435 178.359 22.0463C177.518 22.438 176.996 22.4538 176.416 22.5024L180.498 28.6244H175.926L170.08 19.6971V28.6244H166.153V12.1335M170.063 19.2252V15.3858H173.451C174.097 15.3858 175.909 15.2549 176.497 16.2912C176.758 16.7642 176.775 17.7746 176.431 18.3616C175.868 19.3076 174.554 19.2252 173.37 19.2252H170.063Z"
        fill="#020202"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.034 12.1335C192.238 12.1335 195.128 12.0681 196.851 15.0438C198.468 17.8243 198.492 22.8862 196.941 25.6012C195.325 28.446 192.99 28.577 190.467 28.6176H182.588V12.1245H190.034M186.515 25.1113V15.7607H188.826C190.679 15.7607 192.215 15.6297 193.317 17.5048C194.158 18.8663 194.158 21.8985 193.317 23.366C192.255 25.2817 190.402 25.1101 188.72 25.1101H186.515V25.1113Z"
        fill="#020202"
      />
      <path
        d="M8.9303 29.8269C6.77185 27.6685 4.61424 25.5092 2.45496 23.3516C1.3279 22.2245 1.56048 20.3337 2.99559 19.5582C3.62931 19.2165 4.35801 19.1659 5.07613 19.5471C5.82109 19.9418 6.33058 20.5804 6.90544 21.1502C8.12144 22.3545 9.30644 23.5897 10.5116 24.8049C12.6667 26.9785 14.831 29.1444 16.9861 31.318C17.6566 31.9935 18.4251 32.5224 19.3193 32.83C20.2495 33.1502 21.2148 33.2306 22.2009 33.0904C23.3941 32.9194 24.4445 32.4447 25.3194 31.6302C25.8759 31.1123 26.3585 30.5357 26.695 29.8198C27.112 28.9312 27.3084 28.0114 27.3085 27.0546C27.3098 26.5431 27.1761 26.0272 27.0709 25.5198C26.7764 24.104 25.8113 23.1306 24.832 22.168C23.6621 21.0166 22.4956 19.8635 21.3316 18.7062C20.8029 18.1809 20.2265 17.6915 19.7757 17.105C19.1067 16.2366 19.1058 14.977 19.8641 14.1013C20.4531 13.4216 21.1841 13.1102 22.058 13.2416C22.6954 13.3377 23.2073 13.702 23.663 14.1728C24.7741 15.3208 25.9179 16.4378 27.0483 17.5682C27.8867 18.4066 28.7226 19.2475 29.5634 20.0817C30.3716 20.8831 31.1831 21.6795 31.9954 22.4768C32.7482 23.2145 34.0974 23.1073 34.8138 22.265C35.412 21.5611 35.4564 20.3703 34.7079 19.6452C33.5364 18.5106 32.3858 17.3533 31.2286 16.2027C29.7373 14.7215 28.2561 13.2302 26.7539 11.7616C26.237 11.2564 25.7024 10.757 25.1168 10.3373C24.7266 10.0578 24.2426 9.89557 23.7821 9.73171C23.0767 9.48045 22.3311 9.41869 21.5907 9.46092C21.1077 9.48907 20.6205 9.59019 20.1544 9.72234C19.7041 9.85032 19.2523 10.0152 18.8491 10.2472C18.4098 10.5001 18.0017 10.8227 17.6204 11.162C16.9122 11.7913 16.3568 12.5414 16.0329 13.441C15.7592 14.1997 15.6005 14.9778 15.5885 15.7938C15.5773 16.5602 15.7095 17.2974 15.9549 18.0037C16.2474 18.8459 16.7477 19.5742 17.393 20.2061C18.2415 21.0361 19.0614 21.8962 19.9014 22.7346C20.8749 23.7081 21.8601 24.6698 22.837 25.64C23.6166 26.4146 23.9418 27.3465 23.5526 28.3886C23.2873 29.1003 22.751 29.6283 21.9553 29.818C20.9626 30.0555 20.1833 29.7253 19.4851 29.0154C17.6069 27.1037 15.712 25.2104 13.8095 23.323C13.092 22.6105 12.5354 21.7808 12.0852 20.8982C11.2958 19.3513 10.8418 17.6956 10.8858 15.9446C10.9078 15.0649 10.9625 14.1744 11.1279 13.3141C11.2649 12.6048 11.5411 11.9106 11.84 11.2475C12.1607 10.5375 12.4998 9.80897 12.9765 9.20302C13.6358 8.3691 14.3841 7.59228 15.1794 6.89096C15.7116 6.4209 16.3864 6.10524 17.0151 5.75517C17.4426 5.51732 17.892 5.30297 18.3548 5.14566C18.8745 4.96826 19.4137 4.82693 19.9553 4.74347C20.6077 4.64164 21.271 4.57252 21.9301 4.57133C22.5976 4.57014 23.2736 4.62598 23.9311 4.73716C24.5794 4.84749 25.2244 5.02155 25.8451 5.23837C26.361 5.41904 26.8434 5.69697 27.335 5.9422C28.8458 6.69385 29.9302 7.95589 31.1034 9.10898C32.6325 10.6129 34.1447 12.1318 35.6628 13.6466C36.6019 14.5857 37.5469 15.5206 38.4683 16.4772C39.0331 17.0638 39.3557 17.7953 39.6472 18.5511C40.0379 19.5636 40.1209 20.6018 40.021 21.66C39.9295 22.626 39.5955 23.5122 39.1542 24.3865C38.4734 25.7387 37.2967 26.62 36.2727 27.644C34.2574 29.6593 32.2135 31.6445 30.1696 33.6313C29.123 34.6494 28.0855 35.6801 26.9793 36.6303C26.4404 37.0936 25.7765 37.4336 25.126 37.735C24.5484 38.0021 23.9213 38.1995 23.2966 38.3207C22.6225 38.451 21.9231 38.5142 21.2371 38.4986C20.531 38.483 19.8115 38.402 19.1287 38.227C18.4493 38.0538 17.7984 37.7514 17.1516 37.4683C15.6475 36.8106 14.647 35.5386 13.5216 34.4249C11.9808 32.9026 10.456 31.3643 8.92443 29.8328C8.92694 29.8303 8.92862 29.8286 8.93113 29.8261L8.9303 29.8269Z"
        fill="url(#paint0_linear_841_34771)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_841_34771"
          x1="2.12163"
          y1="20.506"
          x2="41.4628"
          y2="22.5152"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.11" stopColor="#251E5A" />
          <stop offset="0.18" stopColor="#2B2764" />
          <stop offset="0.29" stopColor="#3C3F81" />
          <stop offset="0.44" stopColor="#5867AF" />
          <stop offset="0.45" stopColor="#5968B0" />
          <stop offset="0.71" stopColor="#4295B9" />
          <stop offset="0.87" stopColor="#37ACBE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
