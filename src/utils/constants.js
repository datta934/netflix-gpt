export const LOGO =
  "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";
export const USER_AVATAR =
  "https://occ-0-5230-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUP340eNVgn-bsmlEkXhSOLf3sgzZmbB371G1fT0D09f4OoMWw7frqSIIvDdd78RjOOgxGlfr0zETjXfWJfDHoJAxQw6fqU.png?r=4b9";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmU0YTY0MGMxZTU3ODM1ZTdmYjY0ZWZhZjRkMjMzOCIsInN1YiI6IjY1YTI4YzIyMWYwMjc1MDEyNzA4NTM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2Ly5Y5Fqh5QmovzZC5WQ5lZWJlfTuD0mkju5EuH3eo",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;