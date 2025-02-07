import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const Header = () => {
	const t = useTranslations();
	const { locale } = useRouter();

	return (
		<div className="min-h-[15rem] w-full bg-[#9d2344]">
			<div className="w-full flex justify-end items-center md:py-1 py-5 px-5">
				<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
					{ locale == 'en' &&
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
					}
					{ locale == 'es' &&
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#2c6748"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#bb3433" d="M17.875 19.221L17.874 19.221 17.875 19.221 17.875 19.221z"></path><path fill="#bb3433" d="M19.08 17.788L19.08 17.788 19.08 17.788 19.08 17.788z"></path><path fill="#bb3433" d="M15.938 18.943L15.938 18.944 15.938 18.944 15.938 18.943z"></path><path fill="#bb3433" d="M16.305 19.76L16.305 19.76 16.305 19.76 16.305 19.76z"></path><path fill="#854a29" d="M16.196 16.434L16.196 16.434 16.196 16.434 16.196 16.434z"></path><path d="M14.757,12.878h0s0,0,0,0Z" fill="#854a29"></path><path fill="#854a29" d="M15.137 12.715L15.137 12.715 15.137 12.715 15.137 12.715z"></path><path d="M18.701,18.611c-.462-.69-.74,.319-1.215,.252,.125-.81-.778-.5-1.196-.312l.165-.241c-.625,.291-1.368-.712-1.816,.028-.095-.205-.882-.689-1.201-.328,.025-1.017-1.723-.957-.807,.081,.63,.179,.975,.964,1.915,.554,.129,.53,1.025,.583,1.413,.297-.052,.161-.027,.622-.041,.715,.479,.384,.485-.223,.822-.414,.489-.25,2.275,.502,1.96-.631Z" fill="#3b8288"></path><path d="M14.624,17.264s.004,.003,.012,.007c-.007-.004-.011-.007-.012-.007h0Z" fill="#a27037"></path><path d="M18.215,13.019c.002-.497-3.62-1.554-2.526,.068-.258,.037-.691-.15-.712-.352,0,0,0,0,0,0,0,0,0,0,0,0,.015,.04-.11,.248-.151,.267-.006-.1-.03-.192-.03-.192v.004c-.125-.31-.028,.433-.249,.37,.076-.029,.006-.364-.052-.32,.037,.024-.047,.41-.121,.427,.045-.065-.042-.324-.062-.272,0,0,0,0,0,0,.063,.263-.45,.571-.376,.701-.336,.119-.481,.946,.12,.757-.256-.134-.135-.469,.172-.434-.014-.003,.043,.021,.027,.032,.079,.371,.485-.072,.645-.128-.169,.942-.602,1.836,.288,2.773-.295-.311-.349,.054-.016,.163-.201,.01-.431,.205-.085,.313-.071,.072-.345-.137-.195,.009-.003-.001-.006-.003-.009-.004,0,0,.002,.002,.006,.005-.572-.025-.025,.2,.214,.222-.194,.305,.482,.023,.548,.016,0,0,0,0,0,0,.133,.335,.238,.032,.208-.217,.095,.109,.19,.217,.287,.324h0s0,0,0,0h0c.152,.041,.318,.718,.432,.365,.004-.014,.006-.028,.008-.042,.226,.254,.334,.35,.235-.053,.123,.202,.233,.26,.201-.004,.186,.195,.137-.07,.118-.206,.179,.711,1.985,.561,1.799,.083-.312-.304-2.294-1.415-1.782-2.109,.194,.099,1.156,1.304,.738,.599-.371-.965,.316,0,.418,.358,.23,.415-.128-.724-.204-.764,.635,.793,.576,1.491,.375,.027,.025,.048,.066,.086,.116,.105-.037-.074-.08-.103-.104-.114,.039,.009,.087,.068,.107,.115-.001,0-.002,0-.003-.001,.339,1.803,.462,1.494,.249-.132,.512,2.02,.44,2.008,.384-.037,.367,.526,.103,1.624,.26,2.125,.274-.584,.176-2.301,.355-2.761-.337-.32-1.113-2.012-1.631-2.085Zm-2.889,4.239s0-.001,0-.002h.002s-.001,.001-.002,.002Z" fill="#a27037"></path><path d="M14.715,16.587c.079-.641-.499-.553-.914-.554-.811-.68,1.523-1.254,.432-1.993h.004s-.008-.002-.007-.002l.007,.002s-.023-.023-.022-.023c-.094,.015-.235,.019-.282,.136,0,0,.003,.002,.006,.005l-.126,.148c0,.006,.21,.147,.201,.157,.008-.002,.019,.009,.025,.013,.11,.347-.585,.486-.724,.802-.445,.914,.373,1.211,1.023,1.217-.875,.946-.794,.138-1.382-.416,.083-.354,.237-.801-.251-.948,.003-.079-.13-.161-.165-.041,.033-.034-.086-.136-.135-.069-.19-.243-.413,.369-.078,.307,.008,.075,.133,.04,.152,.023-.003,.095,.142,.085,.161,.025,.33,.191-.146,.548,.001,.847,.195,.36,.548,.505,.559,.978,.29,.474,1.476-.153,1.506-.487,.005-.039,.007-.081,.01-.123h0Zm-.254-1.951s.004,.004,.005,.005h0s-.004-.003-.006-.005h0Zm-.572,.62s0,0,0,0c0,0,0,0,0,0h0Z" fill="#a9ac78"></path><path d="M13.746,13.936c.005,.021-.459,.125-.392-.081,.088,.028,.498-.271,.332-.237-.458,.313-.307-.073-.156-.339,.045,.015,.052,.236,.028,.25,.133-.089,.077-.573-.109-.321-.182-.073-.67,.401-.397,.595-.096,.419,.233,.596,.585,.507l.002-.006h.031c-.052-.007,.077-.344,.076-.367Z" fill="#a9ac78"></path></svg>
					}
				</button>

				<div id="dropdown" className="z-10 hidden bg-white rounded-lg shadow-sm w-auto">
					<ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
						<li>
							<Link href="/es" className="block px-4 py-2 hover:bg-[#9d2344]">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#2c6748"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#bb3433" d="M17.875 19.221L17.874 19.221 17.875 19.221 17.875 19.221z"></path><path fill="#bb3433" d="M19.08 17.788L19.08 17.788 19.08 17.788 19.08 17.788z"></path><path fill="#bb3433" d="M15.938 18.943L15.938 18.944 15.938 18.944 15.938 18.943z"></path><path fill="#bb3433" d="M16.305 19.76L16.305 19.76 16.305 19.76 16.305 19.76z"></path><path fill="#854a29" d="M16.196 16.434L16.196 16.434 16.196 16.434 16.196 16.434z"></path><path d="M14.757,12.878h0s0,0,0,0Z" fill="#854a29"></path><path fill="#854a29" d="M15.137 12.715L15.137 12.715 15.137 12.715 15.137 12.715z"></path><path d="M18.701,18.611c-.462-.69-.74,.319-1.215,.252,.125-.81-.778-.5-1.196-.312l.165-.241c-.625,.291-1.368-.712-1.816,.028-.095-.205-.882-.689-1.201-.328,.025-1.017-1.723-.957-.807,.081,.63,.179,.975,.964,1.915,.554,.129,.53,1.025,.583,1.413,.297-.052,.161-.027,.622-.041,.715,.479,.384,.485-.223,.822-.414,.489-.25,2.275,.502,1.96-.631Z" fill="#3b8288"></path><path d="M14.624,17.264s.004,.003,.012,.007c-.007-.004-.011-.007-.012-.007h0Z" fill="#a27037"></path><path d="M18.215,13.019c.002-.497-3.62-1.554-2.526,.068-.258,.037-.691-.15-.712-.352,0,0,0,0,0,0,0,0,0,0,0,0,.015,.04-.11,.248-.151,.267-.006-.1-.03-.192-.03-.192v.004c-.125-.31-.028,.433-.249,.37,.076-.029,.006-.364-.052-.32,.037,.024-.047,.41-.121,.427,.045-.065-.042-.324-.062-.272,0,0,0,0,0,0,.063,.263-.45,.571-.376,.701-.336,.119-.481,.946,.12,.757-.256-.134-.135-.469,.172-.434-.014-.003,.043,.021,.027,.032,.079,.371,.485-.072,.645-.128-.169,.942-.602,1.836,.288,2.773-.295-.311-.349,.054-.016,.163-.201,.01-.431,.205-.085,.313-.071,.072-.345-.137-.195,.009-.003-.001-.006-.003-.009-.004,0,0,.002,.002,.006,.005-.572-.025-.025,.2,.214,.222-.194,.305,.482,.023,.548,.016,0,0,0,0,0,0,.133,.335,.238,.032,.208-.217,.095,.109,.19,.217,.287,.324h0s0,0,0,0h0c.152,.041,.318,.718,.432,.365,.004-.014,.006-.028,.008-.042,.226,.254,.334,.35,.235-.053,.123,.202,.233,.26,.201-.004,.186,.195,.137-.07,.118-.206,.179,.711,1.985,.561,1.799,.083-.312-.304-2.294-1.415-1.782-2.109,.194,.099,1.156,1.304,.738,.599-.371-.965,.316,0,.418,.358,.23,.415-.128-.724-.204-.764,.635,.793,.576,1.491,.375,.027,.025,.048,.066,.086,.116,.105-.037-.074-.08-.103-.104-.114,.039,.009,.087,.068,.107,.115-.001,0-.002,0-.003-.001,.339,1.803,.462,1.494,.249-.132,.512,2.02,.44,2.008,.384-.037,.367,.526,.103,1.624,.26,2.125,.274-.584,.176-2.301,.355-2.761-.337-.32-1.113-2.012-1.631-2.085Zm-2.889,4.239s0-.001,0-.002h.002s-.001,.001-.002,.002Z" fill="#a27037"></path><path d="M14.715,16.587c.079-.641-.499-.553-.914-.554-.811-.68,1.523-1.254,.432-1.993h.004s-.008-.002-.007-.002l.007,.002s-.023-.023-.022-.023c-.094,.015-.235,.019-.282,.136,0,0,.003,.002,.006,.005l-.126,.148c0,.006,.21,.147,.201,.157,.008-.002,.019,.009,.025,.013,.11,.347-.585,.486-.724,.802-.445,.914,.373,1.211,1.023,1.217-.875,.946-.794,.138-1.382-.416,.083-.354,.237-.801-.251-.948,.003-.079-.13-.161-.165-.041,.033-.034-.086-.136-.135-.069-.19-.243-.413,.369-.078,.307,.008,.075,.133,.04,.152,.023-.003,.095,.142,.085,.161,.025,.33,.191-.146,.548,.001,.847,.195,.36,.548,.505,.559,.978,.29,.474,1.476-.153,1.506-.487,.005-.039,.007-.081,.01-.123h0Zm-.254-1.951s.004,.004,.005,.005h0s-.004-.003-.006-.005h0Zm-.572,.62s0,0,0,0c0,0,0,0,0,0h0Z" fill="#a9ac78"></path><path d="M13.746,13.936c.005,.021-.459,.125-.392-.081,.088,.028,.498-.271,.332-.237-.458,.313-.307-.073-.156-.339,.045,.015,.052,.236,.028,.25,.133-.089,.077-.573-.109-.321-.182-.073-.67,.401-.397,.595-.096,.419,.233,.596,.585,.507l.002-.006h.031c-.052-.007,.077-.344,.076-.367Z" fill="#a9ac78"></path></svg>
							</Link>
						</li>
						<li>
							<Link href="/en" className="block px-4 py-2 hover:bg-[#9d2344]">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>


			<div className="w-full min-h-[10rem] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-y-5">
				<div className="md:w-1/4 w-full flex justify-center items-center">
					<Image
						src="/assets/fondo_conafe_nuevo.svg"
						alt="Conafe Logo"
						width={300}
						height={100}
					/>
				</div>
				<div className="md:w-3/4 w-full flex justify-center items-center lg:px-10">
					<p className="lg:text-left text-center lg:text-4xl md:text-2xl text-lg font-bold text-white">
						{ t('header') }
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
