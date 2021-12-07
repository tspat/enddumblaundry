import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-xl '
    : 'font-semibold text-lg';

  return (
    <span className={`text-tmbl-lght inline-flex items-center ${fontStyle}`}>
      {/* <img
        src="/assets/images/laundry.svg"
        alt=""
        className="hover:animate-spin"
        height={size}
        width={size}
      /> */}
      <div className="txt-2xl">
        {AppConfig.site_name}
        <div className="flex-col w-">
          <img src="/assets/images/slogan.png" alt="" height="" width="50%" />
        </div>
      </div>
    </span>
  );
};

export { Logo };
