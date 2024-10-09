import React from 'react'

const Logo = ({w,h}) => {
  return (

    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={w}  // Width passed as prop
    height={h}  // Height passed as prop
    viewBox="0 0 224 195"  // Add the viewBox to maintain aspect ratio
  >
    <path d="M0 0 C73.92 0 147.84 0 224 0 C224 64.35 224 128.7 224 195 C150.08 195 76.16 195 0 195 C0 130.65 0 66.3 0 0 Z " fill="#FEFEFE" transform="translate(0,0)"/>
    <path d="M0 0 C14.02191304 9.28420606 23.63905213 20.94790721 29.578125 36.70703125 C29.91714844 37.5784375 30.25617188 38.44984375 30.60546875 39.34765625 C35.08155651 53.4566149 34.68849917 72.17819695 28.578125 85.70703125 C27.77955078 87.49173828 27.77955078 87.49173828 26.96484375 89.3125 C22.12242034 99.69711111 16.57321353 107.6141299 7.578125 114.70703125 C6.83820313 115.29484375 6.09828125 115.88265625 5.3359375 116.48828125 C-7.16189917 125.83092637 -20.74697816 130.10395871 -36.171875 130.01953125 C-37.24155518 130.0138916 -38.31123535 130.00825195 -39.41333008 130.00244141 C-46.79203098 129.88872373 -53.48658271 129.40522928 -60.421875 126.70703125 C-61.45828125 126.31644531 -62.4946875 125.92585937 -63.5625 125.5234375 C-83.02259363 117.38432251 -95.23797037 102.83410473 -103.421875 83.70703125 C-109.29924552 68.29130185 -108.24456629 47.83252201 -101.79296875 32.85546875 C-95.70970797 19.45608995 -87.31548185 8.31784085 -74.421875 0.70703125 C-73.761875 0.70703125 -73.101875 0.70703125 -72.421875 0.70703125 C-72.41640656 1.88854767 -72.41640656 1.88854767 -72.41082764 3.09393311 C-72.37274811 10.56626575 -72.31567276 18.03811075 -72.23797226 25.51012802 C-72.19868908 29.35035505 -72.16640794 33.19035935 -72.15087891 37.03076172 C-72.13558435 40.7463619 -72.10091789 44.46134896 -72.05356598 48.17667389 C-72.03888253 49.58457315 -72.03084159 50.99256001 -72.02999115 52.40053558 C-72.01409823 65.53552076 -70.17425223 75.99292303 -60.7890625 85.578125 C-53.19952844 92.40369606 -45.57590899 95.19219048 -35.32421875 94.953125 C-26.52806849 94.20728723 -19.98339736 91.57944396 -13.421875 85.70703125 C-12.060625 84.53140625 -12.060625 84.53140625 -10.671875 83.33203125 C-4.05659175 75.61420079 -1.9512429 66.42500874 -2.171875 56.44140625 C-2.90075584 48.46927201 -6.35739871 40.55805583 -12.20703125 35.015625 C-21.56386936 27.59340153 -31.56971003 24.75042696 -43.421875 25.70703125 C-45.8509455 26.30784838 -48.11741401 27.0509127 -50.44921875 27.953125 C-52.421875 28.70703125 -52.421875 28.70703125 -56.421875 29.70703125 C-56.421875 17.49703125 -56.421875 5.28703125 -56.421875 -7.29296875 C-36.92454199 -12.167302 -17.41154718 -10.2957502 0 0 Z " fill="#EC1B24" transform="translate(152.421875,36.29296875)"/>
    <path d="M0 0 C0.33 0 0.66 0 1 0 C1.01213028 1.1484565 1.01213028 1.1484565 1.02450562 2.32011414 C1.10252708 9.54433234 1.18984032 16.76835077 1.28752708 23.99232769 C1.33741983 27.70602895 1.38375024 31.41970273 1.421875 35.13354492 C1.45881687 38.71928456 1.50520049 42.30479034 1.55806351 45.89032936 C1.57656029 47.25657857 1.5916856 48.62287782 1.60334396 49.9892025 C1.62028657 51.90655783 1.65045399 53.82378237 1.68115234 55.7409668 C1.69447601 56.83128708 1.70779968 57.92160736 1.7215271 59.04496765 C2.00505711 62.05366386 2.73233869 64.27238679 4 67 C4.66 65.02 5.32 63.04 6 61 C8 64 8 64 8 66 C10.13875077 64.98239527 10.13875077 64.98239527 12 63 C12.33380814 59.37436186 12.33380814 59.37436186 12 56 C11.01 56 10.02 56 9 56 C9.33 54.35 9.66 52.7 10 51 C11.98 51.33 13.96 51.66 16 52 C16.268125 51.236875 16.53625 50.47375 16.8125 49.6875 C17.97242259 47.06241204 19.02464466 45.97535534 21 44 C21.36162029 42.67405895 21.69728039 41.34061543 22 40 C22.66 39.34 23.32 38.68 24 38 C24 36.68 24 35.36 24 34 C21.36 33.67 18.72 33.34 16 33 C16 31.68 16 30.36 16 29 C17.41478135 28.35004703 18.83191487 27.70521278 20.25 27.0625 C21.03890625 26.70285156 21.8278125 26.34320313 22.640625 25.97265625 C30.73113727 22.63732917 39.4616335 23.26070048 47.6484375 26.015625 C51.41143249 27.59083221 54.68283046 29.64443691 58 32 C58.86625 32.556875 59.7325 33.11375 60.625 33.6875 C67.3944376 40.2787945 70.94299525 48.76939716 71.375 58.125 C71.18615401 67.26514581 68.58042787 77.34956758 62 84 C53.22767664 91.92587111 43.57239789 95.36842145 31.83984375 95.2109375 C21.66228802 94.4549705 14.683505 88.94948199 7.75 81.875 C-0.1760649 72.38241066 -0.57491571 61.50233003 -0.390625 49.609375 C-0.3831433 48.16921788 -0.37745952 46.72905043 -0.37347412 45.28887939 C-0.35836896 41.54045353 -0.31922318 37.7926705 -0.2746582 34.04449463 C-0.23337412 30.20292857 -0.21539318 26.36125629 -0.1953125 22.51953125 C-0.1527096 15.01273116 -0.08464846 7.50645643 0 0 Z " fill="#F9F8F6" transform="translate(80,37)"/>
    <path d="M0 0 C5.0958704 3.34169815 7.92156141 7.4836883 9.26953125 13.48828125 C9.81631211 19.28415835 8.74549455 24.26124762 6.26953125 29.48828125 C3.83203125 32.36328125 3.83203125 32.36328125 1.26953125 34.48828125 C0.60953125 35.04515625 -0.05046875 35.60203125 -0.73046875 36.17578125 C-5.87282018 39.55044938 -10.68273632 40.38778576 -16.73046875 39.48828125 C-23.45245013 37.40284727 -28.09619694 34.11401948 -31.66796875 28.015625 C-34.08741143 22.26055363 -34.57401812 16.23271537 -32.73046875 10.23828125 C-30.10167837 4.44542644 -25.65649108 0.02084774 -19.79296875 -2.44921875 C-12.13572843 -4.78607328 -6.91409707 -3.77036015 0 0 Z " fill="#EA212B" transform="translate(127.73046875,78.51171875)"/>
    <path d="M0 0 C0.33 0 0.66 0 1 0 C1.01213028 1.1484565 1.01213028 1.1484565 1.02450562 2.32011414 C1.10252708 9.54433234 1.18984032 16.76835077 1.28752708 23.99232769 C1.33741983 27.70602895 1.38375024 31.41970273 1.421875 35.13354492 C1.45881687 38.71928456 1.50520049 42.30479034 1.55806351 45.89032936 C1.57656029 47.25657857 1.5916856 48.62287782 1.60334396 49.9892025 C1.62028657 51.90655783 1.65045399 53.82378237 1.68115234 55.7409668 C1.69447601 56.83128708 1.70779968 57.92160736 1.7215271 59.04496765 C2.00505711 62.05366386 2.73233869 64.27238679 4 67 C4.66 65.02 5.32 63.04 6 61 C8 64 8 64 8 66 C10.13875077 64.98239527 10.13875077 64.98239527 12 63 C12.33380814 59.37436186 12.33380814 59.37436186 12 56 C11.01 56 10.02 56 9 56 C9.33 54.35 9.66 52.7 10 51 C11.65 51.33 13.3 51.66 15 52 C14.96519531 52.61746094 14.93039063 53.23492187 14.89453125 53.87109375 C14.65281346 61.43340747 15.44903903 67.72019304 20.1875 73.8125 C23.57887458 76.45023579 27.08620312 78.26161379 31 80 C31 80.33 31 80.66 31 81 C26.05 81 21.1 81 16 81 C15.67 82.32 15.34 83.64 15 85 C14.01 85.99 14.01 85.99 13 87 C5.24763414 80.03158124 0.53436122 72.35287413 -0.24050903 61.69056702 C-0.23606781 60.55139328 -0.23162659 59.41221954 -0.22705078 58.23852539 C-0.22689972 56.93770523 -0.22674866 55.63688507 -0.22659302 54.29664612 C-0.21638281 52.89698123 -0.20595087 51.49731795 -0.1953125 50.09765625 C-0.19157733 48.65034685 -0.18873274 47.20303489 -0.18673706 45.75572205 C-0.17914024 41.96634813 -0.15952625 38.17713015 -0.1373291 34.38781738 C-0.11678503 30.51312366 -0.10771712 26.63840449 -0.09765625 22.76367188 C-0.07627617 15.17571055 -0.04218862 7.58787721 0 0 Z " fill="#F8F7F6" transform="translate(80,37)"/>
    <path d="M0 0 C0.87527344 -0.00257812 1.75054687 -0.00515625 2.65234375 -0.0078125 C5.0625 0.125 5.0625 0.125 8.0625 1.125 C8.0625 3.765 8.0625 6.405 8.0625 9.125 C7.0725 9.125 6.0825 9.125 5.0625 9.125 C4.7325 7.805 4.4025 6.485 4.0625 5.125 C-0.41883574 4.40243171 -0.41883574 4.40243171 -4.9375 4.125 C-4.9375 6.435 -4.9375 8.745 -4.9375 11.125 C-4.18984375 11.23457031 -3.4421875 11.34414062 -2.671875 11.45703125 C-1.68703125 11.61558594 -0.7021875 11.77414063 0.3125 11.9375 C1.28703125 12.08832031 2.2615625 12.23914063 3.265625 12.39453125 C6.24446135 13.17252342 7.85195433 14.00084347 10.0625 16.125 C11.18155902 20.07900854 11.2734188 22.43951391 10.0625 26.375 C7.56603437 29.80764025 5.1161331 31.20690268 1.0625 32.125 C-3.55556453 32.54553201 -7.42834091 32.25228977 -11.9375 31.125 C-11.9375 27.825 -11.9375 24.525 -11.9375 21.125 C-10.9475 21.125 -9.9575 21.125 -8.9375 21.125 C-8.2775 23.105 -7.6175 25.085 -6.9375 27.125 C-1.95843741 27.87927297 -1.95843741 27.87927297 3.0625 28.125 C3.0625 25.815 3.0625 23.505 3.0625 21.125 C2.23105469 20.95484375 1.39960937 20.7846875 0.54296875 20.609375 C-0.54371094 20.36703125 -1.63039063 20.1246875 -2.75 19.875 C-3.82894531 19.64296875 -4.90789062 19.4109375 -6.01953125 19.171875 C-9.3163065 17.9890962 -10.32107998 17.19233629 -11.9375 14.125 C-12.58731591 11.04920467 -12.56065733 8.20679625 -11.9375 5.125 C-8.1944558 1.18495347 -5.30532099 -0.01558097 0 0 Z " fill="#F5F7F6" transform="translate(116.9375,79.875)"/>
    <path d="M0 0 C3.31317555 0.26863586 4.63876354 0.59059868 6.875 3.125 C8.35604984 6.90990516 8.06348054 9.10057134 7 13 C4.48763535 16.31991043 2.00668367 17.93155102 -2 19 C-6.59853986 19.32140332 -10.50998716 19.12250321 -15 18 C-15 14.7 -15 11.4 -15 8 C-14.01 8 -13.02 8 -12 8 C-11.34 9.98 -10.68 11.96 -10 14 C-5.02093741 14.75427297 -5.02093741 14.75427297 0 15 C-0.33 12.36 -0.66 9.72 -1 7 C-0.34 7 0.32 7 1 7 C1.66 5.35 2.32 3.7 3 2 C2.01 2 1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F3ECDD" transform="translate(120,93)"/>
    <path d="M0 0 C-0.99 0.495 -0.99 0.495 -2 1 C-3.05836661 4.17509982 -3.20243789 6.64282383 -3.31640625 9.98046875 C-3.35830078 11.14384766 -3.40019531 12.30722656 -3.44335938 13.50585938 C-3.48267578 14.72080078 -3.52199219 15.93574219 -3.5625 17.1875 C-3.60568359 18.41404297 -3.64886719 19.64058594 -3.69335938 20.90429688 C-3.7995309 23.93608381 -3.90157952 26.96795315 -4 30 C-4.33 30 -4.66 30 -5 30 C-5.33 21.09 -5.66 12.18 -6 3 C-6.33 11.58 -6.66 20.16 -7 29 C-7.33 29 -7.66 29 -8 29 C-8.33 31.64 -8.66 34.28 -9 37 C-8.34 37.33 -7.68 37.66 -7 38 C-7.99 38 -8.98 38 -10 38 C-10 25.79 -10 13.58 -10 1 C-6.41220825 0.10305206 -3.65381163 -0.08304117 0 0 Z " fill="#EA3336" transform="translate(106,28)"/>
    <path d="M0 0 C0 2.64 0 5.28 0 8 C-0.99 8 -1.98 8 -3 8 C-3.33 6.68 -3.66 5.36 -4 4 C-8.48133574 3.27743171 -8.48133574 3.27743171 -13 3 C-13 5.31 -13 7.62 -13 10 C-10.69 10.33 -8.38 10.66 -6 11 C-6 11.33 -6 11.66 -6 12 C-12.15234375 12.09765625 -12.15234375 12.09765625 -14 12 C-15 11 -15 11 -15.4375 7.5625 C-15.64847551 3.95941003 -15.64847551 3.95941003 -18 2 C-12.78520552 -2.17183558 -6.1391583 -2.0463861 0 0 Z " fill="#F5E8E0" transform="translate(125,81)"/>
    <path d="M0 0 C0.33 0 0.66 0 1 0 C1.06058594 1.12277344 1.12117188 2.24554688 1.18359375 3.40234375 C1.60294982 10.96340965 2.04339834 18.4838441 3 26 C2.34 26 1.68 26 1 26 C0.34 24.68 -0.32 23.36 -1 22 C-1.66 22.99 -2.32 23.98 -3 25 C-3.66 25 -4.32 25 -5 25 C-5 24.01 -5 23.02 -5 22 C-4.34 22 -3.68 22 -3 22 C-3.25136719 20.75283203 -3.25136719 20.75283203 -3.5078125 19.48046875 C-3.71148437 18.39378906 -3.91515625 17.30710937 -4.125 16.1875 C-4.33382812 15.10855469 -4.54265625 14.02960938 -4.7578125 12.91796875 C-5 10 -5 10 -3 7 C-2.34 6.67 -1.68 6.34 -1 6 C-0.34227572 2.97065509 -0.34227572 2.97065509 0 0 Z " fill="#F6E6E3" transform="translate(45,90)"/>
    <path d="M0 0 C0.33 0 0.66 0 1 0 C1.01213028 1.1484565 1.01213028 1.1484565 1.02450562 2.32011414 C1.10252708 9.54433234 1.18984032 16.76835077 1.28752708 23.99232769 C1.33741983 27.70602895 1.38375024 31.41970273 1.421875 35.13354492 C1.45881687 38.71928456 1.50520049 42.30479034 1.55806351 45.89032936 C1.57656029 47.25657857 1.5916856 48.62287782 1.60334396 49.9892025 C1.62028657 51.90655783 1.65045399 53.82378237 1.68115234 55.7409668 C1.69447601 56.83128708 1.70779968 57.92160736 1.7215271 59.04496765 C2.00623092 62.06611984 2.78266573 64.24127682 4 67 C4.23608151 69.70549407 4.09234983 72.27567998 4 75 C0.48626967 69.7294045 -0.25138466 64.48016538 -0.22705078 58.23852539 C-0.22689972 56.93770523 -0.22674866 55.63688507 -0.22659302 54.29664612 C-0.21638281 52.89698123 -0.20595087 51.49731795 -0.1953125 50.09765625 C-0.19157733 48.65034685 -0.18873274 47.20303489 -0.18673706 45.75572205 C-0.17914024 41.96634813 -0.15952625 38.17713015 -0.1373291 34.38781738 C-0.11678503 30.51312366 -0.10771712 26.63840449 -0.09765625 22.76367188 C-0.07627617 15.17571055 -0.04218862 7.58787721 0 0 Z " fill="#F6E2E5" transform="translate(80,37)"/>
    <path d="M0 0 C7.75 -0.125 7.75 -0.125 10 1 C8.63408831 4.54243452 7.09068516 7.92627929 5.375 11.3125 C4.92898437 12.19550781 4.48296875 13.07851562 4.0234375 13.98828125 C3.68570313 14.65214844 3.34796875 15.31601563 3 16 C2.34 16 1.68 16 1 16 C1.33 14.02 1.66 12.04 2 10 C1.34 10 0.68 10 0 10 C0.33 9.01 0.66 8.02 1 7 C1.66 7.33 2.32 7.66 3 8 C2.65213292 6.02463255 2.65213292 6.02463255 2 4 C1.34 3.67 0.68 3.34 0 3 C0 2.01 0 1.02 0 0 Z " fill="#F6F3F2" transform="translate(48,54)"/>
    <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C0.34 3.66 -0.32 4.32 -1 5 C-1.6425235 7.06874034 -1.6425235 7.06874034 -2 9 C-2.66 9 -3.32 9 -4 9 C-4.33 9.66 -4.66 10.32 -5 11 C-5.61488281 10.91621094 -6.22976562 10.83242187 -6.86328125 10.74609375 C-7.67152344 10.64425781 -8.47976562 10.54242188 -9.3125 10.4375 C-10.11300781 10.33308594 -10.91351563 10.22867188 -11.73828125 10.12109375 C-14.16817116 9.85244822 -14.16817116 9.85244822 -17 11 C-19.1875 10.0625 -19.1875 10.0625 -21 9 C-20.07058594 8.68546875 -19.14117187 8.3709375 -18.18359375 8.046875 C-11.78810089 5.83279405 -5.72364107 3.67948355 0 0 Z " fill="#F6EDEB" transform="translate(153,155)"/>
    <path d="M0 0 C1.51403812 4.84492197 0.36602172 8.2591011 -1 13 C-1.33 12.34 -1.66 11.68 -2 11 C-2.66 11 -3.32 11 -4 11 C-4 11.66 -4 12.32 -4 13 C-6 13 -6 13 -7.6875 11.8125 C-9 10 -9 10 -9 7.625 C-7.33143262 3.24501062 -4.85288411 0 0 0 Z " fill="#EC1927" transform="translate(105,80)"/>
    <path d="M0 0 C-0.33 0.66 -0.66 1.32 -1 2 C-1.763125 1.67 -2.52625 1.34 -3.3125 1 C-5.99069135 -0.17436686 -5.99069135 -0.17436686 -9 0 C-9 0.66 -9 1.32 -9 2 C-8.34 2.33 -7.68 2.66 -7 3 C-7.83144531 3.30744141 -7.83144531 3.30744141 -8.6796875 3.62109375 C-9.40414062 3.89050781 -10.12859375 4.15992187 -10.875 4.4375 C-11.59429687 4.70433594 -12.31359375 4.97117187 -13.0546875 5.24609375 C-15.03648845 5.97916854 -15.03648845 5.97916854 -17 7 C-17.66 6.34 -18.32 5.68 -19 5 C-18.67 4.34 -18.34 3.68 -18 3 C-18.66 2.67 -19.32 2.34 -20 2 C-13.86905673 -1.91699153 -6.56460526 -4.37640351 0 0 Z " fill="#EB272F" transform="translate(123,77)"/>
    <path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 10.23 1.66 20.46 2 31 C4.69652403 29.38208558 7.38348441 27.74434373 10 26 C13.13671875 26.2421875 13.13671875 26.2421875 16.6875 26.875 C17.86699219 27.07867187 19.04648438 27.28234375 20.26171875 27.4921875 C21.16535156 27.65976562 22.06898437 27.82734375 23 28 C23 28.33 23 28.66 23 29 C21.97519531 29.12117188 20.95039062 29.24234375 19.89453125 29.3671875 C18.53381021 29.53610459 17.1731355 29.7053952 15.8125 29.875 C15.13896484 29.95363281 14.46542969 30.03226563 13.77148438 30.11328125 C9.87340805 30.60767142 6.60513206 31.47598325 3 33 C2.01 33 1.02 33 0 33 C0 22.11 0 11.22 0 0 Z " fill="#E40E1A" transform="translate(97,32)"/>
    <path d="M0 0 C4.17576168 0.68416434 7.88080407 2.01365009 11.8125 3.5625 C13.55466797 4.24505859 13.55466797 4.24505859 15.33203125 4.94140625 C16.21246094 5.29074219 17.09289062 5.64007813 18 6 C18 6.33 18 6.66 18 7 C13.33333333 7 8.66666667 7 4 7 C2.66216607 7.31478446 1.32796291 7.64587656 0 8 C0 5.36 0 2.72 0 0 Z " fill="#F7F1EE" transform="translate(80,158)"/>
    <path d="M0 0 C5.61 0 11.22 0 17 0 C15 2 15 2 12 4 C12 4.33 12 4.66 12 5 C10.56344146 5.08131463 9.1255517 5.13933559 7.6875 5.1875 C6.48673828 5.23970703 6.48673828 5.23970703 5.26171875 5.29296875 C3 5 3 5 1.20703125 3.61328125 C0 2 0 2 0 0 Z " fill="#EF171F" transform="translate(105,112)"/>
    <path d="M0 0 C0.5451123 0.15992432 1.09022461 0.31984863 1.65185547 0.48461914 C4.33283787 1.07305269 6.82621252 1.17852637 9.5703125 1.24609375 C11.16166016 1.29540039 11.16166016 1.29540039 12.78515625 1.34570312 C15.01942186 1.40711276 17.25380513 1.46437631 19.48828125 1.51757812 C20.54660156 1.55173828 21.60492188 1.58589844 22.6953125 1.62109375 C23.66484863 1.6461499 24.63438477 1.67120605 25.63330078 1.69702148 C28 2 28 2 30 4 C29.18321777 3.99476318 28.36643555 3.98952637 27.52490234 3.98413086 C23.80827612 3.96328651 20.09166222 3.95031608 16.375 3.9375 C15.08980469 3.92912109 13.80460937 3.92074219 12.48046875 3.91210938 C11.23652344 3.90888672 9.99257812 3.90566406 8.7109375 3.90234375 C6.99849854 3.89448853 6.99849854 3.89448853 5.25146484 3.88647461 C2.08118114 3.99716555 -0.88768854 4.40433244 -4 5 C-3.67 4.01 -3.34 3.02 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F6D0CA" transform="translate(102,24)"/>
    <path d="M0 0 C1.65 0 3.3 0 5 0 C5 0.66 5 1.32 5 2 C7.97 1.34 10.94 0.68 14 0 C14 0.66 14 1.32 14 2 C14.66 2.33 15.32 2.66 16 3 C16 3.66 16 4.32 16 5 C15.01 5 14.02 5 13 5 C12.67 5.99 12.34 6.98 12 8 C10.37284844 7.04532436 8.74834654 6.08613152 7.125 5.125 C6.22007812 4.59132813 5.31515625 4.05765625 4.3828125 3.5078125 C2 2 2 2 0 0 Z " fill="#F3EFE9" transform="translate(144,32)"/>
    <path d="M0 0 C5.35823297 2.49434983 9.70782108 4.91719566 14 9 C14.33 9.99 14.66 10.98 15 12 C14.34 12 13.68 12 13 12 C13 11.34 13 10.68 13 10 C11.948125 10.2165625 11.948125 10.2165625 10.875 10.4375 C6.86820677 9.8277706 5.7202981 7.74814659 3.33203125 4.62890625 C2.07775666 2.86833905 2.07775666 2.86833905 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F8E9E8" transform="translate(129,64)"/>
    <path d="M0 0 C2.28459758 2.28459758 2.97129748 4.12537344 4.125 7.125 C4.47820313 8.03507813 4.83140625 8.94515625 5.1953125 9.8828125 C5.46085937 10.58148438 5.72640625 11.28015625 6 12 C4.02 12 2.04 12 0 12 C-1.28571429 3.42857143 -1.28571429 3.42857143 0 0 Z " fill="#F7EBE6" transform="translate(49,120)"/>
    <path d="M0 0 C0.804375 0.4640625 0.804375 0.4640625 1.625 0.9375 C7.46779114 3.55138025 13.7307293 3.11150877 20 3 C20 3.99 20 4.98 20 6 C12.68889006 6.3689719 6.78743178 5.81552726 0 3 C0 2.01 0 1.02 0 0 Z " fill="#F6DBDA" transform="translate(100,126)"/>
    <path d="M0 0 C0.99 0 1.98 0 3 0 C3.433125 1.423125 3.433125 1.423125 3.875 2.875 C4.76825109 6.05211578 4.76825109 6.05211578 7 8 C6.01 8 5.02 8 4 8 C4 8.66 4 9.32 4 10 C2.68 10 1.36 10 0 10 C0 6.7 0 3.4 0 0 Z " fill="#F5E3D9" transform="translate(105,101)"/>
    <path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2 2.32 2 3 2 C4.125 7.75 4.125 7.75 3 10 C1.68 10 0.36 10 -1 10 C-2.15837626 5.94568308 -1.83691257 3.78187881 0 0 Z " fill="#EB242B" transform="translate(50,70)"/>
    <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C3.01508358 3.73323796 3.01508358 3.73323796 5 4 C4.27683594 4.61488281 4.27683594 4.61488281 3.5390625 5.2421875 C2.90742187 5.78101563 2.27578125 6.31984375 1.625 6.875 C0.99851562 7.40867187 0.37203125 7.94234375 -0.2734375 8.4921875 C-1.55836651 9.61432007 -2.79371975 10.79371975 -4 12 C-4.33 11.01 -4.66 10.02 -5 9 C-4.484375 8.5875 -3.96875 8.175 -3.4375 7.75 C-2.7259375 6.88375 -2.7259375 6.88375 -2 6 C-2.22757731 3.83700789 -2.22757731 3.83700789 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#F3ECE9" transform="translate(67,38)"/>
    <path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C5 5.62 5 10.24 5 15 C1.99382731 11.99382731 2.40414684 9.17618402 2 5 C1.01 5 0.02 5 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#FAEEEA" transform="translate(90,88)"/>
    <path d="M0 0 C4.455 2.97 4.455 2.97 9 6 C8.01 6.99 7.02 7.98 6 9 C3.69 8.34 1.38 7.68 -1 7 C-0.67 4.69 -0.34 2.38 0 0 Z " fill="#F3E7E5" transform="translate(69,149)"/>
    <path d="M0 0 C0.33 1.98 0.66 3.96 1 6 C0.01 5.67 -0.98 5.34 -2 5 C-2.33 5.66 -2.66 6.32 -3 7 C-7 2.25 -7 2.25 -7 0 C-4.3333581 -1.33332095 -2.83319697 -0.67102033 0 0 Z " fill="#F4EBEA" transform="translate(175,49)"/>
    <path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.66 4 1.32 4 2 C3.34 2 2.68 2 2 2 C2 2.99 2 3.98 2 5 C1.01 5.33 0.02 5.66 -1 6 C-1.66 5.67 -2.32 5.34 -3 5 C-3.33 5.99 -3.66 6.98 -4 8 C-5.32 7.34 -6.64 6.68 -8 6 C-7.05125 5.38125 -6.1025 4.7625 -5.125 4.125 C-2.05554891 2.18029031 -2.05554891 2.18029031 0 0 Z " fill="#EB2630" transform="translate(140,121)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 2.31 2 4.62 2 7 C-4.0546875 7.9765625 -4.0546875 7.9765625 -6 8 C-6.66 7.34 -7.32 6.68 -8 6 C-5.36 5.67 -2.72 5.34 0 5 C-0.33 4.01 -0.66 3.02 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#E92232" transform="translate(118,101)"/>
    <path d="M0 0 C0 3.59422497 -1.14981068 4.99344236 -3 8 C-3 8.66 -3 9.32 -3 10 C-4.65 9.67 -6.3 9.34 -8 9 C-6.4169423 4.7257442 -3.49431596 2.73468206 0 0 Z " fill="#F3E5E0" transform="translate(163,147)"/>
    <path d="M0 0 C3.63 0 7.26 0 11 0 C11 0.66 11 1.32 11 2 C8.59454362 3.20272819 7.05003047 3.10071472 4.375 3.0625 C3.14910156 3.04896484 3.14910156 3.04896484 1.8984375 3.03515625 C0.95871094 3.01775391 0.95871094 3.01775391 0 3 C0 2.01 0 1.02 0 0 Z " fill="#F5F4EE" transform="translate(109,109)"/>
    <path d="M0 0 C0.8971875 0.5259375 0.8971875 0.5259375 1.8125 1.0625 C-0.1501228 3.11045423 -1.6152307 4.01226638 -4.45703125 4.26171875 C-6.70704383 4.25108877 -8.94135562 4.19208525 -11.1875 4.0625 C-11.1875 3.7325 -11.1875 3.4025 -11.1875 3.0625 C-10.383125 2.93875 -9.57875 2.815 -8.75 2.6875 C-7.904375 2.48125 -7.05875 2.275 -6.1875 2.0625 C-5.8575 1.4025 -5.5275 0.7425 -5.1875 0.0625 C-2.1875 -0.9375 -2.1875 -0.9375 0 0 Z " fill="#EB303B" transform="translate(122.1875,113.9375)"/>
    <path d="M0 0 C0.598125 0.350625 1.19625 0.70125 1.8125 1.0625 C2.1425 0.7325 2.4725 0.4025 2.8125 0.0625 C4.875 0.5 4.875 0.5 6.8125 1.0625 C4.8125 3.0625 4.8125 3.0625 2.9375 3.29296875 C1.885625 3.27169922 1.885625 3.27169922 0.8125 3.25 C0.11125 3.24355469 -0.59 3.23710938 -1.3125 3.23046875 C-3.1875 3.0625 -3.1875 3.0625 -5.1875 2.0625 C-5.1875 1.4025 -5.1875 0.7425 -5.1875 0.0625 C-2.1875 -0.9375 -2.1875 -0.9375 0 0 Z " fill="#EB1820" transform="translate(119.1875,76.9375)"/>
    <path d="M0 0 C1.65 1.65 3.3 3.3 5 5 C3.6875 6.5 3.6875 6.5 2 8 C1.01 8 0.02 8 -1 8 C-1.93065133 5.39417629 -2.14917407 4.35801776 -1.0625 1.75 C-0.711875 1.1725 -0.36125 0.595 0 0 Z " fill="#F4F1EF" transform="translate(58,46)"/>
    <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 2.65 1.34 4.3 1 6 C1.66 6 2.32 6 3 6 C2.67 6.99 2.34 7.98 2 9 C0 9 -2 9 -4 9 C-2.68 6.03 -1.36 3.06 0 0 Z " fill="#F5E6E2" transform="translate(180,122)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 2.31 2.66 4.62 3 7 C3.66 7 4.32 7 5 7 C4.67 7.99 4.34 8.98 4 10 C3.01 10.33 2.02 10.66 1 11 C1 10.34 1 9.68 1 9 C0.01 8.67 -0.98 8.34 -2 8 C-1.01 8 -0.02 8 1 8 C0.67 5.36 0.34 2.72 0 0 Z " fill="#F4DDE5" transform="translate(119,100)"/>
    <path d="M0 0 C1 3 1 3 1 5 C2.65 4.67 4.3 4.34 6 4 C6 5.32 6 6.64 6 8 C5.4225 7.835 4.845 7.67 4.25 7.5 C1.73335631 6.85537969 1.73335631 6.85537969 -2 7 C-2.125 4.625 -2.125 4.625 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#ED2830" transform="translate(66,46)"/>
    <path d="M0 0 C5.61 0 11.22 0 17 0 C17 0.66 17 1.32 17 2 C15.35 1.67 13.7 1.34 12 1 C12 1.66 12 2.32 12 3 C6.06 2.01 6.06 2.01 0 1 C0 0.67 0 0.34 0 0 Z " fill="#F22533" transform="translate(94,163)"/>
    <path d="M0 0 C4.43090471 1.20842856 6.98112756 2.51668565 10 6 C9.67 6.99 9.34 7.98 9 9 C7.49704815 7.69088122 5.99770689 6.37761608 4.5 5.0625 C3.6646875 4.33160156 2.829375 3.60070313 1.96875 2.84765625 C1.3190625 2.23792969 0.669375 1.62820312 0 1 C0 0.67 0 0.34 0 0 Z " fill="#F3EEE9" transform="translate(158,40)"/>
    <path d="M0 0 C3.00617269 3.00617269 2.59585316 5.82381598 3 10 C2.01 10.495 2.01 10.495 1 11 C-0.62950412 6.87831311 -1.26264601 4.29299643 0 0 Z " fill="#E6232B" transform="translate(52,118)"/>
    <path d="M0 0 C2.33333333 0 4.66666667 0 7 0 C6.34 2.31 5.68 4.62 5 7 C4.34 6.01 3.68 5.02 3 4 C2.01 4.495 2.01 4.495 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#E71922" transform="translate(97,104)"/>
    <path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4 2.99 4 3.98 4 5 C2.35 5.66 0.7 6.32 -1 7 C-1.66 6.34 -2.32 5.68 -3 5 C-2.01 3.35 -1.02 1.7 0 0 Z " fill="#E5232A" transform="translate(59,54)"/>
    <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 1.99 1.34 2.98 1 4 C2.65 3.67 4.3 3.34 6 3 C4.35 4.32 2.7 5.64 1 7 C0.01 6.34 -0.98 5.68 -2 5 C-1.67 4.34 -1.34 3.68 -1 3 C-1.66 2.67 -2.32 2.34 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#E12838" transform="translate(106,77)"/>
    <path d="M0 0 C2.64 0 5.28 0 8 0 C7.01 0.495 7.01 0.495 6 1 C6 1.66 6 2.32 6 3 C5.01 3.33 4.02 3.66 3 4 C2.34 4.66 1.68 5.32 1 6 C0 5 0 5 -0.0625 2.4375 C-0.041875 1.633125 -0.02125 0.82875 0 0 Z " fill="#F5F6F5" transform="translate(96,23)"/>
    <path d="M0 0 C2.375 -0.125 2.375 -0.125 5 0 C5.66 0.66 6.32 1.32 7 2 C7.99 2.66 8.98 3.32 10 4 C7.03 4 4.06 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#E3181D" transform="translate(91,159)"/>
    <path d="M0 0 C0.598125 0.165 1.19625 0.33 1.8125 0.5 C4.11344336 1.1114124 4.11344336 1.1114124 7 1 C4.03 3.475 4.03 3.475 1 6 C0.01 5.34 -0.98 4.68 -2 4 C-1.34 3.34 -0.68 2.68 0 2 C0 1.34 0 0.68 0 0 Z " fill="#E4161E" transform="translate(160,143)"/>
    <path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C3.6875 3.5 3.6875 3.5 2 6 C1.01 6 0.02 6 -1 6 C-0.67 4.02 -0.34 2.04 0 0 Z " fill="#DE1D25" transform="translate(170,132)"/>
    <path d="M0 0 C1.32 0 2.64 0 4 0 C3.67 1.65 3.34 3.3 3 5 C1.35 5.33 -0.3 5.66 -2 6 C-1.34 4.02 -0.68 2.04 0 0 Z " fill="#E82F2F" transform="translate(127,103)"/>
    <path d="M0 0 C1.98 0.99 1.98 0.99 4 2 C4 3.32 4 4.64 4 6 C3.01 6.495 3.01 6.495 2 7 C0 4 0 4 0 0 Z " fill="#EB2833" transform="translate(144,73)"/>
    <path d="M0 0 C1.09658936 3.28976808 0.79953138 4.71303767 0 8 C-1.65 8.33 -3.3 8.66 -5 9 C-3.35 6.03 -1.7 3.06 0 0 Z " fill="#F9DDDB" transform="translate(175,132)"/>
    <path d="M0 0 C2.125 0.9375 2.125 0.9375 4 2 C-0.625 5 -0.625 5 -4 5 C-2.25 1.125 -2.25 1.125 0 0 Z " fill="#F9EBE9" transform="translate(132,124)"/>
    <path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C7.33 2.65 7.66 4.3 8 6 C6.68 5.67 5.36 5.34 4 5 C4 3.68 4 2.36 4 1 C2.68 0.67 1.36 0.34 0 0 Z " fill="#E41E34" transform="translate(114,83)"/>
    <path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C2.99 2 3.98 2 5 2 C4.34 3.65 3.68 5.3 3 7 C2.01 6.34 1.02 5.68 0 5 C-0.1875 2.375 -0.1875 2.375 0 0 Z " fill="#F2EDE8" transform="translate(131,78)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C0.125 5.75 0.125 5.75 -1 8 C-1.66 8 -2.32 8 -3 8 C-2.67 6.02 -2.34 4.04 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F3ECE3" transform="translate(52,62)"/>
    <path d="M0 0 C0.99 1.32 1.98 2.64 3 4 C1.68 5.32 0.36 6.64 -1 8 C-1.66 7.34 -2.32 6.68 -3 6 C-2.01 4.02 -1.02 2.04 0 0 Z " fill="#E6262F" transform="translate(55,60)"/>
    <path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4 2.66 4 3.32 4 4 C3.34 4 2.68 4 2 4 C2 4.66 2 5.32 2 6 C0.68 6 -0.64 6 -2 6 C-1.67 5.01 -1.34 4.02 -1 3 C-0.34 3.33 0.32 3.66 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#F1FAF9" transform="translate(50,58)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C1.875 1.875 1.875 1.875 1 4 C-2.0625 5.25 -2.0625 5.25 -5 6 C-5.66 5.34 -6.32 4.68 -7 4 C-6.030625 3.525625 -5.06125 3.05125 -4.0625 2.5625 C-1.19522563 1.29806053 -1.19522563 1.29806053 0 0 Z " fill="#F7DFD7" transform="translate(129,112)"/>
    <path d="M0 0 C4.455 1.98 4.455 1.98 9 4 C9 4.33 9 4.66 9 5 C7.5199159 4.88637738 6.04089926 4.75877092 4.5625 4.625 C3.73878906 4.55539063 2.91507812 4.48578125 2.06640625 4.4140625 C1.38449219 4.27742188 0.70257813 4.14078125 0 4 C-0.33 3.34 -0.66 2.68 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#F6E6DE" transform="translate(102,113)"/>
    <path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.67 2.32 5.34 3.64 5 5 C3.68 4.67 2.36 4.34 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#EF202C" transform="translate(105,112)"/>
    <path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.99 2.33 2.98 2.66 4 3 C3.34 4.65 2.68 6.3 2 8 C0.10786631 5.61426621 -1.02391783 3.92824652 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#F9E7E6" transform="translate(178,60)"/>
    <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C3.66 3.33 4.32 3.66 5 4 C0.99799622 5.60080151 -2.04556236 4.29279692 -6 3 C-6 2.67 -6 2.34 -6 2 C-3.69 2 -1.38 2 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#F6E9E0" transform="translate(138,26)"/>
    <path d="M0 0 C3 2 3 2 3.875 4.4375 C4 7 4 7 2.5625 8.8125 C2.046875 9.204375 1.53125 9.59625 1 10 C1.020625 9.278125 1.04125 8.55625 1.0625 7.8125 C1.00179441 5.08074862 0.60741465 2.65743909 0 0 Z " fill="#E42C34" transform="translate(132,84)"/>
    <path d="M0 0 C0.94875 0.04125 1.8975 0.0825 2.875 0.125 C3.205 1.115 3.535 2.105 3.875 3.125 C0.905 2.795 -2.065 2.465 -5.125 2.125 C-3.125 0.125 -3.125 0.125 0 0 Z " fill="#F5F4F1" transform="translate(115.125,79.875)"/>
    <path d="M0 0 C1.0625 1.875 1.0625 1.875 2 4 C1.67 4.66 1.34 5.32 1 6 C-0.32 6 -1.64 6 -3 6 C-3.33 4.35 -3.66 2.7 -4 1 C-3.01 1.99 -2.02 2.98 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#F31D2B" transform="translate(103,106)"/>
    <path d="M0 0 C2 3 2 3 1.625 6.1875 C1.41875 7.115625 1.2125 8.04375 1 9 C0.34 9 -0.32 9 -1 9 C-1.09765625 2.84765625 -1.09765625 2.84765625 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#F5E8EB" transform="translate(106,84)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C2.66 2 3.32 2 4 2 C3.67 3.98 3.34 5.96 3 8 C1.0549 5.08235 0.54723683 3.37462715 0 0 Z " fill="#FAECE7" transform="translate(180,68)"/>
    <path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C0.25 5 0.25 5 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#F9E0DF" transform="translate(75,35)"/>
    </svg>
    
  )
}

export default Logo
