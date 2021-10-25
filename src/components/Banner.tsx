import '../styles/Banner.css'

type childrenBanner = {
   children: any
  };
function Banner({ children }:childrenBanner): JSX.Element {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
