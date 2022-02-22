import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  lg?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.lg
    ? 'font-semibold text-sm '
    : 'font-semibold text-sm';

  return (
    <span className={`text-tmbl-lght inline-flex items-center ${fontStyle}`}>
      {/* <img
        src="/assets/images/laundry.svg"
        alt=""
        className="hover:animate-spin"
        height={size}
        width={size}
      /> */}
      <div className="sm:txt-sm">
        {AppConfig.site_name}
      </div>
    </span>
  );
};

export { Logo };
