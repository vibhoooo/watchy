export const LOGO_IMG = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg";

export const API_KEY = "7f3f64163ca769225753847919852c97";

export const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjNmNjQxNjNjYTc2OTIyNTc1Mzg0NzkxOTg1MmM5NyIsIm5iZiI6MTczOTEwNTg3Mi4zNTM5OTk5LCJzdWIiOiI2N2E4YTY1MGY1YWFhNmFmYTllMDhjZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1T3gQ9eHG4OVi3D8XcIybu6tggYAZtJKHbbCVoUU0pY";

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const API_URL_BG = "https://api.themoviedb.org/3/movie/";

export const BG_VID = "https://www.youtube.com/embed/hXzcyx9V0xw?si=eyPYBzDOOvOCrs71&autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1&playlist=hXzcyx9V0xw&cc_load_policy=0";

export const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const API_URL_TOP = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const API_URL_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjNmNjQxNjNjYTc2OTIyNTc1Mzg0NzkxOTg1MmM5NyIsIm5iZiI6MTczOTEwNTg3Mi4zNTM5OTk5LCJzdWIiOiI2N2E4YTY1MGY1YWFhNmFmYTllMDhjZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1T3gQ9eHG4OVi3D8XcIybu6tggYAZtJKHbbCVoUU0pY",
  },
};

export const LANG = [
	{
		identifier: "en",
		value: "English"
	},
	{
		identifier: "hin",
		value: "हिंदी"
	},
	{
		identifier: "spn",
		value: "Español"
	}
];

export const CONV = {
	placeholder: {
		en: "What would you like to see today?",
		hin: "आज आप क्या देखना चाहेंगे?",
		spn: "¿Qué te gustaría ver hoy?"
	},
	search: {
		en: "Search",
		hin: "खोज",
		spn: "Buscar"
	},
	home: {
		en: "Home",
		hin: "घर",
		spn: "Hogar"
	},
	signOut: {
		en: "Sign Out",
		hin: "साइन आउट",
		spn: "Desconectar"
	},
	gptSearch: {
		en: "GPT Search",
		hin: "जीपीटी खोज",
		spn: "Búsqueda GPT"
	},
	nowPlaying: {
		en: "NOW PLAYING",
		hin: "अब खेल रहे हैं",
		spn: "AHORA JUGANDO",
	},
	popular: {
		en: "POPULAR",
		hin: "लोकप्रिय",
		spn: "POPULAR",
	},
	topRated: {
		en: "TOP RATED",
		hin: "टॉप रेटेड",
		spn: "mejor valorado",
	},
	upcoming: {
		en: "UPCOMING",
		hin: "आगामी",
		spn: "próximo",
	}
};