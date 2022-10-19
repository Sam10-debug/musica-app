import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Link from 'next/link'

const MobileNav = () => {
	const {setShowMobileNav}=useContext(DataContext)
	const hideNav=()=>{
		setShowMobileNav(false)
	}
  return (
	<section className="md:hidden w-screen  h-screen flex pt-16 justify-center side-menu sticky top-0 z-10 left-0">
		<svg version="1.1" onClick={hideNav} className='close absolute top-0 left-0 cursor-pointer' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 40 40" enable-background="new 0 0 40 40" xmlSpace="preserve">
<g>
	<g>
		<g>
			<path fill="white" d="M25,25.5c-0.1,0-0.3,0-0.4-0.1l-10-10c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l10,10c0.2,0.2,0.2,0.5,0,0.7
				C25.3,25.5,25.1,25.5,25,25.5z"/>
		</g>
		<g>
			<path fill="white" d="M15,25.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l10-10c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-10,10
				C15.3,25.5,15.1,25.5,15,25.5z"/>
		</g>
	</g>
</g>
		</svg>
		<ul className=" leading-[500%]">
			<Link href="/">
				<li className="flex gap-x-4 items-center">
					<svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_d_19_204)">
		<g filter="url(#filter1_d_19_204)">
		<path d="M17.3818 29.0503V26.239C17.3818 25.5266 17.9611 24.9478 18.6786 24.9433H21.3132C22.034 24.9433 22.6183 25.5234 22.6183 26.239V29.0421C22.6182 29.66 23.1204 30.1622 23.7427 30.1667H25.5402C26.3797 30.1688 27.1855 29.8392 27.7799 29.2507C28.3743 28.6621 28.7084 27.8629 28.7084 27.0294V19.0437C28.7084 18.3704 28.4077 17.7318 27.8876 17.2999L21.7811 12.4514C20.7137 11.6034 19.1891 11.6308 18.1533 12.5166L12.1781 17.2999C11.6334 17.7191 11.3078 18.3596 11.2917 19.0437V27.0213C11.2917 28.7584 12.7101 30.1667 14.4598 30.1667H16.2163C16.5159 30.1688 16.804 30.0522 17.0167 29.8426C17.2294 29.633 17.349 29.3478 17.3489 29.0503H17.3818Z" fill="#FACD66"/>
		</g>
		</g>
		<defs>
		<filter id="filter0_d_19_204" x="5" y="10" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dy="4"/>
		<feGaussianBlur stdDeviation="2"/>
		<feComposite in2="hardAlpha" operator="out"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
		<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_204"/>
		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_204" result="shape"/>
		</filter>
		<filter id="filter1_d_19_204" x="0.291687" y="0.833344" width="39.4167" height="40.3334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset/>
		<feGaussianBlur stdDeviation="5.5"/>
		<feComposite in2="hardAlpha" operator="out"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.803921 0 0 0 0 0.4 0 0 0 0.25 0"/>
		<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_204"/>
		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_204" result="shape"/>
		</filter>
		</defs>
					</svg>
					<p className="top-chart-text">Home</p>
				</li>
			</Link>
			<Link href="/collections">
				<li className="flex gap-x-4 items-center">
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.5833 4.35416H14.6666V2.98832C14.6666 2.22749 14.0433 1.60416 13.2825 1.60416H8.71748C7.95665 1.60416 7.33331 2.22749 7.33331 2.98832V4.35416H6.41665C5.40831 4.35416 4.58331 5.17916 4.58331 6.18749V6.30666C4.87665 6.22416 5.17915 6.18749 5.49998 6.18749H16.5C16.8208 6.18749 17.1233 6.22416 17.4166 6.30666V6.18749C17.4166 5.17916 16.5916 4.35416 15.5833 4.35416Z" fill="#EFEEE0" fill-opacity="0.25"/>
	<path d="M12.7691 15.5192C12.4758 15.5192 12.2466 15.7575 12.2466 16.0417C12.2466 16.3258 12.485 16.5642 12.7691 16.5642C13.0533 16.5642 13.2916 16.3258 13.2916 16.0417C13.2916 15.7575 13.0533 15.5192 12.7691 15.5192Z" fill="#EFEEE0" fill-opacity="0.25"/>
	<path d="M8.31419 16.3258C8.02085 16.3258 7.79169 16.5642 7.79169 16.8483C7.79169 17.1325 8.03002 17.3708 8.31419 17.3708C8.59835 17.3708 8.83669 17.1325 8.83669 16.8483C8.83669 16.5642 8.60752 16.3258 8.31419 16.3258Z" fill="#EFEEE0" fill-opacity="0.25"/>
	<path d="M17.4166 7.68167C17.1233 7.59917 16.8208 7.5625 16.5 7.5625H5.49998C5.17915 7.5625 4.87665 7.59917 4.58331 7.68167C3.00665 8.09417 1.83331 9.53333 1.83331 11.2292V16.7292C1.83331 18.7458 3.48331 20.3958 5.49998 20.3958H16.5C18.5166 20.3958 20.1666 18.7458 20.1666 16.7292V11.2292C20.1666 9.53333 18.9933 8.09417 17.4166 7.68167ZM14.6666 12.1733V16.0417C14.6666 17.0867 13.8141 17.9392 12.7691 17.9392C11.7241 17.9392 10.8716 17.0867 10.8716 16.0417C10.8716 14.9967 11.7241 14.1442 12.7691 14.1442C12.9525 14.1442 13.1266 14.1808 13.2916 14.2267V13.0717L10.2208 13.9058V16.8483C10.2208 16.8575 10.2208 16.8667 10.2116 16.8758C10.2025 17.9117 9.34998 18.755 8.31415 18.755C7.26915 18.755 6.41665 17.9025 6.41665 16.8483C6.41665 15.7942 7.26915 14.9508 8.31415 14.9508C8.49748 14.9508 8.67165 14.9875 8.84581 15.0333V13.3833V11.9625C8.84581 11.1742 9.34081 10.5325 10.0925 10.3308L12.5216 9.66167C13.3008 9.45083 13.7958 9.6525 14.0708 9.86333C14.3458 10.0742 14.6666 10.4867 14.6666 11.3025V12.1733Z" fill="#EFEEE0" fill-opacity="0.25"/>
				</svg>
				<p className="top-chart-text">My collections</p>
				</li>
			</Link>
			<Link href="/viewchart">
				<li className="flex gap-x-4 items-center">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.10419 1.83333V4.58333H6.41669C6.17835 4.58333 5.94919 4.5925 5.72919 4.62916V1.83333C5.72919 1.45749 6.04085 1.14583 6.41669 1.14583C6.79252 1.14583 7.10419 1.45749 7.10419 1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
					<path d="M15.5833 4.58333H6.41665C6.17831 4.58333 5.94915 4.5925 5.72915 4.62916C3.36415 4.90416 1.83331 6.65499 1.83331 9.16666V15.5833C1.83331 18.3333 3.66665 20.1667 6.41665 20.1667H15.5833C18.3333 20.1667 20.1666 18.3333 20.1666 15.5833V9.16666C20.1666 6.41666 18.3333 4.58333 15.5833 4.58333ZM7.22331 14.6667C5.95831 14.6667 4.93165 13.64 4.93165 12.375C4.93165 11.11 5.95831 10.0833 7.22331 10.0833C8.48831 10.0833 9.51498 11.11 9.51498 12.375C9.51498 13.64 8.48831 14.6667 7.22331 14.6667ZM13.1816 14.8958H12.7233C12.3475 14.8958 12.0358 14.5842 12.0358 14.2083C12.0358 13.8325 12.3475 13.5208 12.7233 13.5208H13.1816C13.5575 13.5208 13.8691 13.8325 13.8691 14.2083C13.8691 14.5842 13.5575 14.8958 13.1816 14.8958ZM16.39 14.8958H15.9316C15.5558 14.8958 15.2441 14.5842 15.2441 14.2083C15.2441 13.8325 15.5558 13.5208 15.9316 13.5208H16.39C16.7658 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7658 14.8958 16.39 14.8958ZM16.39 11.2292H12.7233C12.3475 11.2292 12.0358 10.9175 12.0358 10.5417C12.0358 10.1658 12.3475 9.85416 12.7233 9.85416H16.39C16.7658 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7658 11.2292 16.39 11.2292Z" fill="#EFEEE0" fill-opacity="0.25"/>
					</svg>
					<p className="top-chart-text">Radio</p>
				</li>
			</Link>
			<li className="flex gap-x-4 items-center">
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.3125 7.205H1.83331V14.8408C1.83331 14.8958 1.83331 14.9508 1.84248 14.9967H10.3125V7.205Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M16.2342 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2434 1.97084V5.80251C16.2434 5.81167 16.2342 5.82084 16.2342 5.83001Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0017 16.3717H16.2433V20.0292Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
			<path d="M1.99835 16.3717C2.42919 18.3333 3.73085 19.6167 5.70169 20.02V16.3717H1.99835Z" fill="#EFEEE0" fill-opacity="0.25"/>
			</svg>
			<p className="top-chart-text">Music videos</p>
			</li>
			<li className="flex gap-x-4 items-center">
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.25">
			<path d="M11 1.83333C8.59831 1.83333 6.64581 3.78583 6.64581 6.1875C6.64581 8.54333 8.48831 10.45 10.89 10.5325C10.9633 10.5233 11.0366 10.5233 11.0916 10.5325C11.11 10.5325 11.1191 10.5325 11.1375 10.5325C11.1466 10.5325 11.1466 10.5325 11.1558 10.5325C13.5025 10.45 15.345 8.54333 15.3541 6.1875C15.3541 3.78583 13.4016 1.83333 11 1.83333Z" fill="#EFEEE0"/>
			<path d="M15.6567 12.9708C13.0992 11.2658 8.92836 11.2658 6.35253 12.9708C5.18836 13.75 4.54669 14.8042 4.54669 15.9317C4.54669 17.0592 5.18836 18.1042 6.34336 18.8742C7.62669 19.7358 9.31336 20.1667 11 20.1667C12.6867 20.1667 14.3734 19.7358 15.6567 18.8742C16.8117 18.095 17.4534 17.05 17.4534 15.9133C17.4442 14.7858 16.8117 13.7408 15.6567 12.9708Z" fill="#EFEEE0"/>
			</g>
			</svg>
			<p className="top-chart-text">Profile</p>
			</li>
			<li className="flex gap-x-4 items-center">
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.25">
			<path d="M10.535 1.83333C12.8107 1.83333 14.6666 3.6575 14.6666 5.90333V10.2942H9.07072C8.66967 10.2942 8.35257 10.6058 8.35257 11C8.35257 11.385 8.66967 11.7058 9.07072 11.7058H14.6666V16.0875C14.6666 18.3333 12.8107 20.1667 10.5163 20.1667H5.9743C3.6893 20.1667 1.83331 18.3425 1.83331 16.0967V5.9125C1.83331 3.6575 3.69862 1.83333 5.98363 1.83333H10.535ZM16.9952 7.83768C17.2702 7.55352 17.7193 7.55352 17.9943 7.82852L20.671 10.496C20.8085 10.6335 20.8818 10.8077 20.8818 11.0002C20.8818 11.1835 20.8085 11.3668 20.671 11.4952L17.9943 14.1627C17.8568 14.3002 17.6735 14.3735 17.4993 14.3735C17.316 14.3735 17.1327 14.3002 16.9952 14.1627C16.7202 13.8877 16.7202 13.4385 16.9952 13.1635L18.4618 11.706H14.6668V10.2943H18.4618L16.9952 8.83685C16.7202 8.56185 16.7202 8.11268 16.9952 7.83768Z" fill="#EFEEE0"/>
			</g>
			</svg>
			<p className="top-chart-text">Log out</p>
			</li>
		</ul>
	</section>
  )
}

export default MobileNav