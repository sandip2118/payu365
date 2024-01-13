import { PHONE } from "@/Constants";
import { useRouter } from "next/router";
import { OrDivider } from "../Common/OrDivider";


type ContinueWithEmailorPhoneProps = {
  onClick?: (data?: any) => void;
  currentSelection?: string;
};

const ContinueWithEmailorPhone: React.FC<ContinueWithEmailorPhoneProps> = (props) => {
  const router = useRouter();
  const handleContinueWithEmailorPhoneClick = () => {
    props.onClick && props.onClick(props.currentSelection);
  };
  return (
    <>
      <OrDivider />
      <button
        onClick={handleContinueWithEmailorPhoneClick}
        className="mt-[30px] w-full bg-[#292932] flex justify-center items-center gap-2.5 self-stretch h-[48px] px-[13px] rounded-[5px] font14SB">
        {props.currentSelection === PHONE ? <img src="/assets/images/email.svg" className="w-[17px] h-[17px]" />
          : <img src="/assets/images/phone.svg" className="w-[17px] h-[17px]" />}
        <p className="font14SB text-[color:var(--Pure-White,#FFF)] text-sm not-italic leading-[normal]">
          Continue with {props.currentSelection == PHONE ? "email" : "Phone number"}
        </p>
      </button>
      <p className="text-white w-full text-[13px] not-italic mt-[30px] text-center font13RB">
        Not registered yet? {" "}
        <span onClick={() => router.push("/signup")} className="!font-semibold text-BLUE_201 leading-[normal] underline cursor-pointer">
          Create an Account
        </span>
      </p>

    </>
  );
};

export default ContinueWithEmailorPhone;
