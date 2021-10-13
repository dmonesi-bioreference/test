import LogoStyled from './Logo.styles';

export interface LogoProps {
  type: 'color' | 'dark' | 'light';
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = (props) => {
  if (props.type == 'dark' || props.type == 'light') {
    return (
      <LogoStyled aria-label="logo" type={props.type}>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 416 108"
          width={props.width && `${props.width}px`}
          height={props.height && `${props.height}px`}
        >
          <path d="M40.966.148c13.641 0 30.027 5.517 30.027 15.248v8.317a1.247 1.247 0 01-1.192 1.192h-7.846a1.248 1.248 0 01-1.193-1.192v-4.519c0-6.543-10.341-9.675-19.408-9.675-18.299 0-29.694 12.364-29.694 30.051 0 17.687 11.7 30.939 29.972 30.939 6.903 0 20.85-2.08 20.85-9.648V50.576H48.618a1.248 1.248 0 01-1.193-1.192V43.12a1.275 1.275 0 011.193-1.192H72.74v21.707c0 11.92-20.073 16.217-31.774 16.217C16.983 79.851.348 62.608.348 39.71c0-22.9 16.358-39.56 40.618-39.56zM111.251 22.021c15.887 0 24.149 11.616 24.149 26.032 0 .749-.166 1.94-.166 2.772a1.2 1.2 0 01-.397.896 1.193 1.193 0 01-.934.297H94.338c.749 12.336 9.288 18.74 19.408 18.74a27.893 27.893 0 0015.471-5.156 1.305 1.305 0 011.941.443l3.133 5.35a1.582 1.582 0 01-.277 1.803 35.021 35.021 0 01-20.85 6.847A28.337 28.337 0 0183.525 51.02c-.138-17.548 11.84-28.997 27.726-28.997zm13.059 23.204c-.305-9.675-6.294-14.72-13.336-14.72-8.318 0-14.695 5.544-16.358 14.72h29.694zM153.533 70.51V34.08a2.141 2.141 0 00-.617-1.788 2.136 2.136 0 00-1.795-.596h-5.545a1.327 1.327 0 01-1.238-.84 1.33 1.33 0 01-.093-.518v-5.545a1.33 1.33 0 011.331-1.358h11.367c4.935 0 7.042 2.079 7.042 6.099v2.994a15.344 15.344 0 01-.305 3.105h.305a23.373 23.373 0 0121.737-13.39c12.727 0 18.577 7.014 18.577 21.29V70.76h7.486a1.325 1.325 0 01.959.38 1.328 1.328 0 01.399.95v5.545a1.324 1.324 0 01-.399.95 1.334 1.334 0 01-.959.38h-18.244V45.698c0-7.734-1.497-13.861-10.48-13.861-11.257 0-18.604 10.257-18.604 21.263v17.549h7.513a1.328 1.328 0 011.331 1.358v5.545a1.33 1.33 0 01-1.331 1.358h-25.784a1.358 1.358 0 01-1.359-1.358v-5.545a1.324 1.324 0 01.4-.95 1.32 1.32 0 01.959-.38h7.347v-.167zM247.495 22.021c15.887 0 24.122 11.616 24.122 26.032v2.772a1.216 1.216 0 01-.415.897 1.218 1.218 0 01-.944.295h-39.703c.749 12.337 9.288 18.741 19.408 18.741a27.725 27.725 0 0015.443-5.212 1.306 1.306 0 011.941.444l3.161 5.35a1.604 1.604 0 01-.305 1.802 34.992 34.992 0 01-20.822 6.848 28.31 28.31 0 01-29.611-28.97c-.305-17.549 11.838-28.999 27.725-28.999zm13.031 23.204c-.305-9.675-6.293-14.72-13.336-14.72-8.317 0-14.694 5.544-16.33 14.72h29.666zM365.552 100.422a2.3 2.3 0 01-2.246-2.246 2.19 2.19 0 012.246-2.218h35.378a2.188 2.188 0 012.245 2.218 2.137 2.137 0 01-1.367 2.108c-.28.107-.579.154-.878.138h-35.378zM368.768 88.362a2.275 2.275 0 01-2.246-2.218 2.3 2.3 0 012.246-2.245h28.945a2.303 2.303 0 012.246 2.245 2.271 2.271 0 01-2.246 2.218h-28.945zM377.418 62.026a52.356 52.356 0 01-13.863-6.987 19.681 19.681 0 01-8.317-11.865v-3.16c0-18.741-9.732-32.131-24.593-36.733a57.294 57.294 0 00-16.636-1.774h-30.997a1.969 1.969 0 00-1.941 1.913v4.463a1.966 1.966 0 001.941 1.94h7.791v60.408h-7.791a1.943 1.943 0 00-1.941 1.775v4.768a1.966 1.966 0 001.941 1.913h31.33a52.072 52.072 0 0016.469-2.08 33.272 33.272 0 0022.763-23.259 30.505 30.505 0 006.46 6.404 51.775 51.775 0 0010.813 6.1 91.547 91.547 0 006.571-3.438h.305l-.305-.389zm-50.655 5.821a59.694 59.694 0 01-13.169 1.775h-12.006V10.406h12.006a38.38 38.38 0 0113.336 1.802c10.175 3.714 16.774 13.695 16.774 27.972 0 14.277-6.544 24.091-16.941 27.667z" />
          <path d="M354.045 107.269a3.022 3.022 0 01-3.022-2.994v-4.602c0-14.72 8.54-22.621 15.277-27.223a112.345 112.345 0 0112.754-7.43l2.107-1.053c4.187-2.218 8.54-4.464 12.421-6.987a37.321 37.321 0 0011.701-10.7 12.315 12.315 0 001.94-5.074c.097-.643.153-1.29.167-1.94v-8.317a2.992 2.992 0 012.994-2.994 2.993 2.993 0 012.994 2.994v8.317c0 .748-.166 1.635-.305 2.966a18.818 18.818 0 01-2.772 7.457 42.919 42.919 0 01-13.336 12.475 129.463 129.463 0 01-12.893 7.153l-2.079 1.053a100.813 100.813 0 00-12.144 7.125c-8.845 6.238-12.892 13.085-12.754 22.178v4.602a2.995 2.995 0 01-3.05 2.994z" />
          <path d="M362.779 38.988a2.3 2.3 0 01-2.246-2.245 2.184 2.184 0 01.651-1.587 2.194 2.194 0 011.595-.631h35.378a2.275 2.275 0 012.246 2.218c.004.295-.052.589-.164.863a2.213 2.213 0 01-2.082 1.382h-35.378zM365.995 50.881a2.249 2.249 0 01-2.299-1.315 2.246 2.246 0 012.299-3.148h28.946a2.249 2.249 0 012.299 1.315 2.245 2.245 0 01-2.299 3.148h-28.946zM403.369 73.947a42.349 42.349 0 00-10.341-6.266c-2.246 1.359-4.52 2.55-6.904 3.715a54.166 54.166 0 0113.336 7.291 25.145 25.145 0 0110.203 20.404v5.794a2.995 2.995 0 005.989 0v-5.794a31.236 31.236 0 00-12.283-25.144z" />
        </svg>
      </LogoStyled>
    );
  }

  return (
    <LogoStyled aria-label="logo">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 416 108"
        width={props.width && `${props.width}px`}
        height={props.height && `${props.height}px`}
      >
        <path
          d="M40.966.148c13.641 0 30.027 5.517 30.027 15.248v8.317a1.248 1.248 0 01-1.192 1.192h-7.846a1.248 1.248 0 01-1.192-1.192v-4.519c0-6.543-10.342-9.675-19.408-9.675-18.3 0-29.695 12.364-29.695 30.051 0 17.687 11.7 30.939 29.972 30.939 6.903 0 20.85-2.08 20.85-9.648V50.576H48.618a1.248 1.248 0 01-1.193-1.192V43.12a1.275 1.275 0 011.193-1.192H72.74v21.707c0 11.92-20.073 16.217-31.774 16.217C16.983 79.851.348 62.608.348 39.71c0-22.9 16.358-39.56 40.618-39.56zM111.251 22.021c15.887 0 24.149 11.616 24.149 26.032 0 .749-.166 1.94-.166 2.772a1.2 1.2 0 01-.397.896 1.193 1.193 0 01-.934.297H94.338c.749 12.336 9.288 18.74 19.408 18.74a27.893 27.893 0 0015.471-5.156 1.305 1.305 0 011.941.443l3.133 5.35a1.582 1.582 0 01-.277 1.803 35.021 35.021 0 01-20.85 6.847A28.337 28.337 0 0183.525 51.02c-.138-17.548 11.84-28.997 27.726-28.997zm13.059 23.204c-.305-9.675-6.294-14.72-13.336-14.72-8.318 0-14.695 5.544-16.358 14.72h29.694zM153.533 70.51V34.08a2.141 2.141 0 00-.617-1.788 2.136 2.136 0 00-1.795-.596h-5.545a1.327 1.327 0 01-1.238-.84 1.33 1.33 0 01-.093-.518v-5.545a1.33 1.33 0 011.331-1.358h11.367c4.935 0 7.042 2.079 7.042 6.099v2.994a15.344 15.344 0 01-.305 3.105h.305a23.373 23.373 0 0121.737-13.39c12.726 0 18.577 7.014 18.577 21.29V70.76h7.486a1.325 1.325 0 01.959.38 1.328 1.328 0 01.399.95v5.545a1.324 1.324 0 01-.399.95 1.334 1.334 0 01-.959.38h-18.244V45.698c0-7.734-1.497-13.861-10.48-13.861-11.257 0-18.604 10.257-18.604 21.263v17.549h7.513a1.328 1.328 0 011.331 1.358v5.545a1.33 1.33 0 01-1.331 1.358h-25.785a1.358 1.358 0 01-1.358-1.358v-5.545a1.324 1.324 0 01.399-.95 1.334 1.334 0 01.959-.38h7.348v-.167zM247.495 22.021c15.887 0 24.122 11.616 24.122 26.032v2.772a1.216 1.216 0 01-.415.897 1.218 1.218 0 01-.944.295h-39.703c.749 12.337 9.288 18.741 19.408 18.741a27.725 27.725 0 0015.443-5.212 1.306 1.306 0 011.941.444l3.161 5.35a1.604 1.604 0 01-.305 1.802 34.992 34.992 0 01-20.822 6.848 28.31 28.31 0 01-29.611-28.97c-.305-17.549 11.838-28.999 27.725-28.999zm13.031 23.204c-.305-9.675-6.293-14.72-13.336-14.72-8.317 0-14.694 5.544-16.33 14.72h29.666z"
          fill="#0F4E71"
        />
        <path
          d="M365.552 100.422a2.3 2.3 0 01-2.246-2.246 2.19 2.19 0 012.246-2.218h35.378a2.188 2.188 0 012.245 2.218 2.137 2.137 0 01-1.367 2.108c-.28.107-.579.154-.878.138h-35.378zM368.768 88.362a2.275 2.275 0 01-2.246-2.218 2.3 2.3 0 012.246-2.245h28.945a2.303 2.303 0 012.246 2.245 2.271 2.271 0 01-2.246 2.218h-28.945zM377.418 62.026a52.356 52.356 0 01-13.863-6.987 19.681 19.681 0 01-8.317-11.865v-3.16c0-18.741-9.732-32.131-24.593-36.733a57.294 57.294 0 00-16.636-1.774h-30.997a1.969 1.969 0 00-1.941 1.913v4.463a1.966 1.966 0 001.941 1.94h7.791v60.408h-7.791a1.943 1.943 0 00-1.941 1.775v4.768a1.966 1.966 0 001.941 1.913h31.33a52.072 52.072 0 0016.469-2.08 33.272 33.272 0 0022.763-23.259 30.505 30.505 0 006.46 6.404 51.775 51.775 0 0010.813 6.1 91.547 91.547 0 006.571-3.438h.305l-.305-.389zm-50.655 5.821a59.695 59.695 0 01-13.17 1.775h-12.005V10.406h12.005c4.517-.19 9.032.42 13.337 1.802 10.175 3.714 16.774 13.695 16.774 27.972 0 14.277-6.544 24.091-16.941 27.667z"
          fill="#227881"
        />
        <path
          d="M354.045 107.269a3.022 3.022 0 01-3.022-2.994v-4.602c0-14.72 8.54-22.621 15.277-27.223a112.345 112.345 0 0112.754-7.43l2.107-1.053c4.187-2.218 8.54-4.464 12.421-6.987a37.321 37.321 0 0011.701-10.7 12.315 12.315 0 001.94-5.074c.097-.643.153-1.29.167-1.94v-8.317a2.992 2.992 0 012.994-2.994 2.993 2.993 0 012.994 2.994v8.317c0 .748-.166 1.635-.305 2.966a18.818 18.818 0 01-2.772 7.457 42.919 42.919 0 01-13.336 12.475 129.463 129.463 0 01-12.893 7.153l-2.079 1.053a100.813 100.813 0 00-12.144 7.125c-8.845 6.238-12.892 13.085-12.754 22.178v4.602a2.995 2.995 0 01-3.05 2.994z"
          fill="#EE6457"
        />
        <path
          d="M362.779 38.988a2.3 2.3 0 01-2.246-2.245 2.184 2.184 0 01.651-1.587 2.194 2.194 0 011.595-.631h35.378a2.275 2.275 0 012.246 2.218c.004.295-.052.589-.164.863a2.213 2.213 0 01-2.082 1.382h-35.378zM365.995 50.881a2.249 2.249 0 01-2.299-1.315 2.246 2.246 0 012.299-3.148h28.946a2.249 2.249 0 012.299 1.315 2.245 2.245 0 01-2.299 3.148h-28.946zM403.369 73.947a42.349 42.349 0 00-10.341-6.266c-2.246 1.359-4.52 2.55-6.904 3.715a54.184 54.184 0 0113.336 7.291 25.145 25.145 0 0110.203 20.404v5.794a2.995 2.995 0 005.989 0v-5.794a31.25 31.25 0 00-12.283-25.144z"
          fill="#227881"
        />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
