

export const ErrorIcon = ()=>{
	return <svg style={{height:'16px', width: '16px', marginRight: 'var(--size-2)', flexShrink:'0', alignSelf:"flex-start"}} xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="var(--error-color)">
	</path></svg>
}



export const CorrectIcon = ({color, styleClassName})=>{


	console.log('cccorkir', color);
	return <svg fill={color?color:`var(--success-icon-color)`} className={styleClassName} xmlns="http://www.w3.org/2000/svg"  
	viewBox="0 0 335.765 335.765" width="800" height="800" >

	<path d="M311.757 41.803L107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z"/>
	
	</svg>;
}

export const CancelIcon = ({color, styleClassName, handleClick})=>{

	return <svg onClick={handleClick} className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
	<path fill={color} d="M9.156 6.313L6.313 9.156 22.156 25 6.219 40.969l2.813 2.813L25 27.844l15.938 15.938 2.844-2.844L27.844 25 43.688 9.156l-2.844-2.844L25 22.156z"/>
	</svg>
}








/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CREDIT CARD ICONS INITIALIZATION STARTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



export const Amex = ({styleClassName})=>{
    return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
        <path fill="#000" d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".08"/><path fill="#006fcf" d="M44.444 1C45.85 1 47 2.064 47 3.364v21.273c0 1.3-1.15 2.364-2.556 2.364H3.556C2.15 27 1 25.936 1 24.636V3.364C1 2.064 2.15 1 3.556 1h40.889"/><path fill="#fff" d="M11.332 11.979l.978 2.189h-1.948zm20.305.091h-3.76v.965h3.7v1.446h-3.692v1.076h3.76v.862l2.624-2.619-2.624-2.73zM13.873 9.34h5.046l1.12 2.258 1.038-2.265h13.099l1.362 1.388 1.408-1.388h6.016l-4.445 4.494 4.4 4.466h-6.106l-1.362-1.388-1.421 1.388h-21.36l-.624-1.388h-1.427l-.625 1.388h-4.94l4.151-8.96h4.333zm10.943 1.258h-2.828l-1.895 4.125-2.053-4.125h-2.807v5.612l-2.602-5.612h-2.517l-3.009 6.431h1.964l.624-1.388h3.279l.624 1.388h3.436v-4.591l2.212 4.598h1.503l2.198-4.584v4.585h1.842l.03-6.44zm11.798 3.229l3.197-3.229h-2.301l-2.022 2.014-1.955-2.014h-7.445v6.438h7.339l2.039-2.028 1.955 2.028h2.368l-3.173-3.208z"/>
    </svg>
}


export const Discover = ({styleClassName})=>{
	
	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
	<defs>
	<linearGradient id="DISCOVERGRADIENT" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse">
		<stop stopColor="#f89f20"/><stop offset=".25" stopColor="#f79a20"/><stop offset=".533" stopColor="#f68d20"/><stop offset=".62" stopColor="#f58720"/><stop offset=".723" stopColor="#f48120"/><stop offset="1" stopColor="#f37521"/></linearGradient><linearGradient id="B" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stopColor="#f58720"/><stop offset=".359" stopColor="#e16f27"/><stop offset=".703" stopColor="#d4602c"/><stop offset=".982" stopColor="#d05b2e"/>
	</linearGradient></defs>
	<path d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".08"/><g transform="matrix(1.276962 0 0 1.181818 -.276962 -.181818)"><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z" fill="#fff"/><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63a2.75 2.75 0 0 0 1-2.11c-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37s-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231f20"/>
	<path d="M20.16 12.86a2.931 2.931 0 1 0 0-5.862 2.931 2.931 0 0 0 0 5.862z" fill="url(#DISCOVERGRADIENT)"/>
	<path opacity=".65" d="M20.16 12.86a2.931 2.931 0 1 0 0-5.862 2.931 2.931 0 0 0 0 5.862z" fill="url(#B)"/><g fill="#231f20"><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"/><path d="M36.41 7.176c-.23 0-.42.19-.42.42s.19.42.42.42.42-.19.42-.42-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35s-.15.35-.33.35z"/>
	</g><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 0 0 2-1.984l.024-3.02L37 12.985z" fill="#f48120"/></g></svg>
	
}

export const GPay= ({styleClassName}) =>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
		<path d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".07"/>
		<path d="M44.444 1C45.85 1 47 2.064 47 3.364v21.273c0 1.3-1.15 2.364-2.556 2.364H3.556C2.15 27 1 25.936 1 24.636V3.364C1 2.064 2.15 1 3.556 1h40.889" fill="#fff"/>
		<path d="M22.854 13.972v3.733h-1.286V8.489h3.399c.823-.013 1.617.278 2.207.807.559.482.887 1.149.913 1.854s-.253 1.392-.774 1.907l-.139.135c-.594.522-1.387.805-2.207.786zm0-4.354v3.253h2.145a1.78 1.78 0 0 0 1.269-.471 1.53 1.53 0 0 0 .348-1.761c-.277-.598-.913-.986-1.618-.986zm8.19 1.573c.821-.035 1.624.219 2.246.715.562.502.861 1.202.821 1.924v3.89h-1.224v-.894h-.062c-.447.682-1.25 1.095-2.113 1.086-.692.021-1.367-.201-1.89-.622-.501-.378-.787-.947-.774-1.545-.03-.605.259-1.185.774-1.559.623-.414 1.378-.625 2.145-.601.653-.023 1.301.109 1.882.386v-.243c.009-.407-.186-.794-.527-1.051-.338-.284-.781-.438-1.238-.429-.675-.006-1.305.31-1.666.837l-1.131-.658c.624-.826 1.667-1.294 2.756-1.237zm-1.626 4.583c-.006.307.153.596.426.772a1.63 1.63 0 0 0 .992.307c.542-.001 1.061-.198 1.448-.551.385-.334.604-.799.604-1.287-.486-.319-1.077-.473-1.672-.436a2.3 2.3 0 0 0-1.301.343c-.308.19-.494.509-.495.852zm11.73-4.375l-4.282 9.088h-1.324l1.618-3.183-2.809-5.906h1.393l2.036 4.533 1.982-4.533z" fill="#5f6368"/><path d="M17.667 13.165c0-.359-.03-.719-.092-1.073h-5.419v2.038h3.096c-.127.655-.538 1.233-1.137 1.602v1.323h1.849c1.137-1.016 1.756-2.429 1.703-3.89z" fill="#4285f4"/><path d="M12.163 18.341c1.397.035 2.757-.422 3.802-1.28l-1.852-1.33c-.902.534-2.019.654-3.03.326s-1.8-1.068-2.142-2.006H7.045v1.365c.968 1.792 2.95 2.924 5.118 2.925z" fill="#34a853"/><path d="M8.942 14.058a2.93 2.93 0 0 1 0-2.024v-1.365H7.045a4.9 4.9 0 0 0 0 4.754z" fill="#fbbc04"/><path d="M12.163 9.847c.817-.014 1.607.271 2.198.793l1.642-1.509c-1.047-.908-2.436-1.403-3.872-1.38-2.155.01-4.121 1.137-5.087 2.917l1.897 1.366c.455-1.292 1.751-2.172 3.221-2.188z" fill="#ea4335"/>
	</svg>
}

export const MasterCard = ({styleClassName})=>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
		<path d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".08"/>
		<path fill="#fff" d="M44.445 1C45.85 1 47 2.063 47 3.363v21.273c0 1.3-1.15 2.364-2.556 2.364H3.556C2.15 27 1 25.936 1 24.636V3.363C1 2.063 2.15 1 3.556 1h40.889"/>
		<ellipse fill="#eb001b" cx="18.889" cy="14" rx="8.944" ry="8.273"/><ellipse fill="#f79e1b" cx="29.112" cy="14" rx="8.944" ry="8.273"/>
	<path fill="#ff5f00" d="M27.834 14c0-2.836-1.533-5.318-3.833-6.736C21.7 8.8 20.167 11.281 20.167 14S21.7 19.318 24 20.736c2.3-1.418 3.833-3.9 3.833-6.736z"/>
	</svg>
}

export const PaypalWhite = ({styleClassName})=>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
		<path opacity=".07" d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z"/>
		<path fill="#fff" d="M44.444 1C45.85 1 47 2.064 47 3.364v21.273c0 1.3-1.15 2.364-2.556 2.364H3.556C2.15 27 1 25.936 1 24.636V3.364C1 2.064 2.15 1 3.556 1h40.889"/>
		<path fill="#003087" d="M30.189 9.683c.253-1.167 0-1.983-.758-2.683-.758-.817-2.147-1.167-3.916-1.167h-5.179c-.379 0-.632.233-.758.583L17.684 18.2c0 .233.126.467.379.467h3.411l.505-3.967 2.274-2.567z"/><path fill="#3086c8" d="M30.189 9.683l-.253.233c-.632 3.267-2.779 4.433-5.811 4.433h-1.389c-.379 0-.632.233-.758.583l-.758 4.55-.253 1.167c0 .233.126.467.379.467H24c.379 0 .632-.233.632-.467v-.117l.505-2.8v-.117c0-.233.379-.467.632-.467h.379c2.653 0 4.674-.933 5.179-3.733.253-1.167.126-2.1-.505-2.8-.126-.583-.379-.817-.632-.933z"/>
		<path fill="#012169" d="M29.432 9.45c-.126-.117-.253-.117-.379-.117s-.253 0-.379-.117c-.379-.117-.884-.117-1.389-.117h-3.789c-.126 0-.253 0-.253.117-.253.117-.379.233-.379.467l-.884 5.133v.117c0-.35.379-.583.758-.583h1.642c3.158 0 5.179-1.167 5.811-4.433v-.233a1.01 1.01 0 0 0-.632-.233z"/>
	</svg>
}


export const Visa = ({styleClassName}) =>{
	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28">
		<path d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".08"/>
		<path fill="#fff" d="M44.444 1C45.85 1 47 2.063 47 3.363v21.273c0 1.3-1.15 2.364-2.556 2.364H3.555C2.15 27 1 25.936 1 24.636V3.363C1 2.063 2.15 1 3.555 1h40.889"/>
		<path d="M35.883 11.754H35.5c-.511 1.182-.894 1.773-1.278 3.545h2.428c-.383-1.773-.383-2.6-.767-3.545zm3.706 6.973h-2.172c-.128 0-.128 0-.256-.118l-.256-1.064-.128-.236h-3.067c-.128 0-.256 0-.256.236l-.383 1.064c0 .118-.128.118-.128.118h-2.683l.256-.591 3.706-8.036c0-.591.383-.827 1.022-.827h1.917c.128 0 .256 0 .256.236l1.789 7.682c.128.473.256.827.256 1.3.128.118.128.118.128.236zm-17.122-.355l.511-2.127c.128 0 .256.118.256.118.894.355 1.789.591 2.683.473.256 0 .639-.118.894-.236.639-.236.639-.827.128-1.3-.256-.236-.639-.355-1.022-.591-.511-.236-1.022-.473-1.406-.827-1.533-1.182-1.022-2.836-.128-3.664.767-.473 1.15-.945 2.172-.945 1.533 0 3.194 0 3.961.236h.128c-.128.709-.256 1.3-.511 2.009-.639-.236-1.278-.473-1.917-.473-.383 0-.767 0-1.15.118-.256 0-.383.118-.511.236a.54.54 0 0 0 0 .827l.639.473 1.406.709c.639.355 1.278.945 1.406 1.655.256 1.064-.128 2.009-1.15 2.718-.639.473-.894.709-1.789.709-1.789 0-3.194.118-4.344-.236-.128.236-.128.236-.256.118zm-4.472.355c.128-.827.128-.827.256-1.182l1.789-7.918c.128-.236.128-.355.383-.355h2.3c-.256 1.418-.511 2.482-.894 3.782l-1.278 5.318c0 .236-.128.236-.383.236m-14.056-9.1c0-.118.256-.236.383-.236h4.344c.639 0 1.15.355 1.278.945l1.15 5.2c0 .118 0 .118.128.236 0-.118.128-.118.128-.118l2.683-6.027c-.128-.118 0-.236.128-.236h2.683c0 .118 0 .118-.128.236l-3.961 8.627c-.128.236-.128.355-.256.473s-.383 0-.639 0h-1.917c-.128 0-.256 0-.256-.236l-2.044-7.327c-.256-.236-.639-.591-1.15-.709-.767-.355-2.172-.591-2.428-.591z" fill="#142688"/>
	</svg>
}

export const Jcb = ({styleClassName}) =>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 28" width="48" height="28">
		<path d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z" opacity=".08"/>
		<g fillRule="evenodd">
			<path d="M44.444 1C45.85 1 47 2.064 47 3.364v21.273c0 1.3-1.15 2.364-2.556 2.364H3.556C2.15 27 1 25.936 1 24.636V3.364C1 2.064 2.15 1 3.556 1h40.889" fill="#fff" fillRule="nonzero"/>
			<use xlinkHref="#JCBCHARWRAPPER" fill="#006ebc"/>
			<path d="M23.361 5.727h4.472v13.591c0 1.632-1.43 2.955-3.194 2.955h-4.472V8.682c0-1.632 1.43-2.955 3.194-2.955z" fill="#f00036"/>
			<use xlinkHref="#JCBCHARWRAPPER" x="17.889" fill="#2ab419"/>
			<path d="M13.465 16.955c-1.354 0-2.711-.359-3.394-1.166l.997-.799c.087 1.339 4.53 1.465 4.53-.225v-3.719H17.9v3.719c0 .86-.733 1.562-2.01 1.929-.595.17-1.744.261-2.425.261zm10.37 0c-.861 0-1.774-.126-2.511-.433-1.211-.502-1.676-1.425-1.661-2.599.015-1.198.557-2.106 1.876-2.559 1.685-.579 4.272-.308 5.017.319v1.149c-.731-.616-2.502-1.061-3.73-.544-.631.267-.942 1.084-.951 1.711-.008.662.313 1.48.951 1.769 1.218.552 3.054.047 3.73-.521v1.194c-.457.301-1.601.513-2.72.513zm11.09-3.057c.473-.278.744-.67.744-1.188s-.148-.812-.445-1.11c-.263-.245-.741-.554-1.582-.554h-4.531v5.909h4.531c.889 0 1.402-.272 1.68-.49.362-.295.544-.626.544-1.135s-.198-1.073-.942-1.432zm-2.435-.332h-1.825v-1.707h1.91c1.222 0 1.206 1.707-.086 1.707zm.368 2.549h-2.193v-1.788h2.193c1.26 0 1.384 1.788 0 1.788z" fill="#fff" fillRule="nonzero"/>
			</g>
			<defs>
		<path id="JCBCHARWRAPPER" d="M14.417 5.727h4.472v13.591c0 .784-.337 1.535-.936 2.089s-1.412.865-2.259.865h-4.472V8.682c0-.784.337-1.535.936-2.089s1.412-.865 2.259-.865z"/>
		</defs></svg>
}

export const UntionPay = ({styleClassName}) =>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 28" width="48" height="28">
		<use xlinkHref="#UNIONPAYELWRAPPER" opacity=".08"/>
	<use xlinkHref="#UNIONPAYELWRAPPER" opacity=".08"/>
	<g transform="matrix(.958333 0 0 .928571 1 1)">
		<path d="M35 0H3C1.3 0 0 1.3 0 3v18a3.01 3.01 0 0 0 3 3h32c1.7 0 3-1.3 3-3V3a3.01 3.01 0 0 0-3-3z" opacity=".08" transform="scale(1.2631579 1.1666667)"/>
		<path fill="#005b9a" d="M0 25.433v.817zM22.358 0v28h-9.095c-1.642 0-2.653-1.167-2.274-2.683l5.558-22.633C16.926 1.167 18.947 0 20.589 0zm15.916 0c-1.642 0-3.663 1.167-4.042 2.683l-5.684 22.633c-.379 1.517.632 2.683 2.274 2.683h-6.189V0z"/>
		<path fill="#e9292d" d="M20.589 0c-1.642 0-3.663 1.283-4.042 2.683l-5.558 22.633c-.379 1.517.632 2.683 2.274 2.683H2.021c-1.011 0-1.895-.7-1.895-1.633v-24.5C.126.933 1.011 0 2.021 0z"/>
		<path fill="#0e73b9" d="M38.274 0c-1.642 0-3.663 1.283-4.042 2.683l-5.558 22.633c-.379 1.517.632 2.683 2.274 2.683H12.632h.632c-1.642 0-2.653-1.167-2.274-2.683l5.558-22.633C16.926 1.167 18.947 0 20.589 0z"/><path fill="#059da4" d="M48 1.867v24.5C48 27.3 47.242 28 46.105 28H30.821c-1.642 0-2.653-1.283-2.274-2.683l5.684-22.633C34.611 1.167 36.632 0 38.274 0h7.832A1.81 1.81 0 0 1 48 1.867z"/>
		<path fill="#fff" d="M18.793 15.919h.177c.177 0 .354-.082.354-.163l.531-.735h1.503l-.265.408h1.768l-.265.735h-2.122c-.265.327-.531.49-.884.49h-1.061l.265-.735m-.265 1.062h3.802l-.265.817h-1.503l-.265.817H21.8l-.265.817h-1.503l-.354 1.225c-.088.163 0 .327.354.245h1.238l-.265.817h-2.387c-.442 0-.619-.245-.442-.735l.442-1.552h-.973l.265-.817h.973l.265-.817h-.884zm6.101-2.042v.49s.707-.49 1.415-.49h2.476l-.973 3.103c-.088.327-.442.572-.973.572h-2.829l-.619 2.205c0 .082 0 .163.177.163h.531l-.177.653h-1.415c-.531 0-.707-.163-.619-.408l1.857-6.288zm2.122.898h-2.211l-.265.817s.354-.245.973-.245h1.326zm-.796 1.96c.177 0 .265 0 .265-.163l.177-.408h-2.211l-.177.653zm-1.503.98h1.238v.49h.354c.177 0 .265-.082.265-.163l.088-.327h1.061l-.177.572c-.088.408-.442.572-.973.653h-.707v.898c0 .163.088.245.442.245h.619l-.177.653h-1.503c-.442 0-.619-.163-.619-.572zm5.305-2.858l.265-.98h1.503l-.088.327s.707-.327 1.326-.327h1.857l-.265.98h-.265l-1.415 4.492h.265l-.265.898h-.265l-.088.408h-1.503l.088-.408h-2.741l.265-.898h.265l1.415-4.492h-.354m1.592 0l-.354 1.225s.619-.245 1.149-.327c.088-.408.265-.898.265-.898zm-.619 1.797l-.354 1.307s.707-.327 1.238-.327c.177-.49.265-.898.265-.898zm.265 2.695l.265-.898H30.2l-.265.898zm3.625-5.472h1.415l.088.49c0 .082.088.163.265.163h.265l-.265.817h-.973c-.354 0-.619-.082-.619-.408zm-.442 1.715h4.509l-.265.898H36.92l-.265.817h1.415l-.265.898h-1.592l-.354.49h.796l.177.98c0 .082.088.163.265.163h.265l-.265.817h-.884c-.442 0-.707-.082-.707-.408l-.177-.898-.707.98c-.177.245-.442.408-.796.408h-1.326l.265-.817h.442c.177 0 .265-.082.442-.245l1.061-1.47h-1.326l.265-.898h1.503l.265-.817h-1.503zm-24.935-5.88c-.177.817-.531 1.388-1.149 1.797s-1.415.653-2.387.653c-.884 0-1.592-.245-1.945-.653-.265-.327-.442-.653-.442-1.143 0-.163 0-.408.088-.653l1.061-4.573h1.503L5 10.774v.327c0 .245.088.408.177.572.177.245.442.327.884.327s.884-.082 1.149-.327.531-.49.619-.898l.973-4.573h1.503l-1.061 4.573m1.415-1.797h1.061l-.088.572.177-.163c.354-.327.796-.49 1.326-.49.442 0 .796.163.973.408s.265.572.177 1.062l-.619 2.777h-1.149l.531-2.532c.088-.327.088-.572 0-.653-.088-.163-.265-.163-.442-.163-.265 0-.531.082-.707.245s-.354.408-.354.735l-.531 2.368H9.863l.796-4.165m12.379 0h1.061l-.088.572.177-.163c.354-.327.796-.49 1.326-.49.442 0 .796.163.973.408s.265.572.177 1.062l-.619 2.777h-1.149l.531-2.613c.088-.245 0-.49-.088-.572-.088-.163-.265-.163-.442-.163-.265 0-.531.082-.707.245s-.354.408-.354.735l-.531 2.368h-1.149l.884-4.165m-7.339 0h1.238l-.973 4.083h-1.238l.973-4.083m.442-1.552h1.238l-.265.98h-1.238zm1.768 5.308c-.265-.245-.442-.653-.442-1.143v-.245c0-.082 0-.245.088-.327.177-.653.442-1.225.884-1.552.442-.408 1.061-.572 1.68-.572a2.29 2.29 0 0 1 1.326.408c.265.245.442.653.442 1.143v.245c0 .082 0 .245-.088.327-.177.653-.442 1.143-.884 1.552s-1.061.572-1.68.572c-.442 0-.884-.163-1.326-.408m2.387-.817a2.62 2.62 0 0 0 .442-.98v-.408c0-.245-.088-.408-.177-.572-.157-.162-.384-.251-.619-.245-.354 0-.619.082-.796.327a2.62 2.62 0 0 0-.442.98v.327c0 .245.088.408.177.572.177.163.354.245.619.245.354.082.531 0 .796-.245m8.223-5.472h3.183c.619 0 1.061.163 1.415.408s.442.653.442 1.062v.327c0 .082 0 .245-.088.327-.088.572-.442 1.143-.884 1.47-.531.408-1.061.572-1.768.572H29.05l-.531 2.368h-1.503l1.503-6.533m.707 3.022h1.415a1.58 1.58 0 0 0 .884-.245c.177-.163.354-.408.442-.735v-.327c0-.245-.088-.408-.265-.49s-.442-.163-.884-.163h-1.149zm10.964 4.328c-.442.898-.884 1.47-1.149 1.715s-.796.817-2.034.817l.088-.735c1.061-.327 1.592-1.633 1.945-2.287l-.354-4.41h1.503l.088 2.777 1.149-2.695h1.326l-2.564 4.818m-3.714-4.492l-.531.327c-.531-.408-1.061-.653-1.945-.245-1.238.572-2.387 4.818 1.149 3.43l.177.245h1.415l.884-3.838-1.149.082m-.707 2.123c-.265.653-.707.98-1.149.898-.354-.163-.442-.735-.265-1.388.265-.653.707-.98 1.149-.898.354.163.442.735.265 1.388"/>
		</g>
		<defs>
		<path id="UNIONPAYELWRAPPER" d="M44.211 0H3.789C1.642 0 0 1.517 0 3.5v21C0 26.483 1.768 28 3.789 28h40.421C46.358 28 48 26.483 48 24.5v-21C48 1.517 46.232 0 44.211 0z"/>
		</defs></svg>
}



export const ApplePay = ({styleClassName}) =>{

	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28" width="48" height="28"><g transform="scale(.28999341 .26424069)">
		<path d="M150.698 0H14.823l-1.698.003-1.43.022c-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43L0 14.823v76.318l.002 1.699.022 1.43c.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273l1.43.02 1.698.004h135.875l1.697-.004 1.431-.02c1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11l.022-1.43.004-1.699V14.824l-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022L150.698 0z"/>
		<path fill="#fff" d="M150.77 3.784l1.674.003 1.361.02c.794.022 1.721.065 2.586.219.751.134 1.381.338 1.986.645a6.399 6.359 0 0 1 2.807 2.793 6.83 6.83 0 0 1 .646 1.973c.154.85.197 1.774.218 2.567l.02 1.353.005 1.662v75.928l-.004 1.673-.02 1.343c-.022.792-.065 1.716-.221 2.576a6.862 6.82 0 0 1-.646 1.965 6.404 6.364 0 0 1-2.811 2.793c-.601.304-1.229.508-1.973.642-.882.156-1.849.199-2.577.219l-1.38.019-1.671.004H14.729c-.551 0-1.101 0-1.662-.004a75.072 74.609 0 0 1-1.351-.018c-.745-.02-1.712-.064-2.587-.219a6.945 6.903 0 0 1-1.988-.647 6.344 6.305 0 0 1-1.624-1.174 6.362 6.322 0 0 1-1.179-1.615 6.942 6.9 0 0 1-.647-1.975c-.156-.859-.2-1.779-.22-2.565a66.158 65.75 0 0 1-.02-1.348l-.003-1.32V14.67l.002-1.318a66.77 66.359 0 0 1 .02-1.35c.022-.788.065-1.708.222-2.574a6.931 6.889 0 0 1 .647-1.971 6.33 6.33 0 0 1 1.181-1.615 6.393 6.353 0 0 1 1.626-1.174 6.967 6.924 0 0 1 1.982-.643c.866-.154 1.794-.197 2.589-.219l1.355-.02 1.679-.003H150.77"/>
		<path d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858m2.079 3.309c-3.35-.2-6.196 1.9-7.795 1.9s-4.049-1.8-6.698-1.751c-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65s3.997 1.65 6.696 1.6c2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048m33.387-6.969c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46s-2.885-7.434-7.928-7.434h-6.706zm22.031 9.93c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03zm10.536 20.222v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"/>
	</g></svg>
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CREDIT CARD ICONS INITIALIZATION ENDED ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



export const BackIcon = ({color, styleClassName,handleClick})=>{
	
	return <svg fill={color} className={styleClassName} onClick={handleClick} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
</svg>
}




export const STARPATH = `M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
C22.602,0.567,25.338,0.567,26.285,2.486z`;


export const discountIcon = ({color, styleClassName })=>{
	return <svg className={styleClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
	<path fill="transparent" stroke={color} d="M7.284 1.402h4.964a.35.35 0 0 1 .35.35v4.964a.7.7 0 0 1-.205.495L7.49 12.115a.7.7 0 0 1-.99 0L1.885 7.5a.7.7 0 0 1 0-.99L6.79 1.607a.7.7 0 0 1 .495-.205Z"/>
	<circle fill={color} cx="9.1" cy="4.9" r="1"/>
	</svg>
}

export const discountIconTotal = ({color, styleClassName})=>{
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
<path stroke-linecap="round" stroke-linejoin="round" fill="transparent" stroke={color} d="m10.802 15.686 5.367-5.368a.15.15 0 0 0 .046-.109V4.144m-2.998-.95h-5.67a.16.16 0 0 0-.11.046L1.779 8.897a.154.154 0 0 0 0 .219l5.594 5.593c.06.06.158.06.218 0l5.658-5.657a.15.15 0 0 0 .045-.11v-5.67a.077.077 0 0 0-.077-.077Zm-3.06 3.749a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0m-.648-.005h.01v.01h-.01z"/>
</svg>
}