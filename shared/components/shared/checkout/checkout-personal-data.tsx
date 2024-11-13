import { useFormContext } from "react-hook-form";
import { Input } from "../../ui";
import { FormInput } from "../form";
import { WhiteBlock } from "../white-block";
interface Props {
  className?: string;
}
export const CheckoutPersonalData: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" placeholder="Имя" className="text-base" />
        <FormInput name="lastName" placeholder="Фамилия" className="text-base" />
        <FormInput name="email" placeholder="E-Mail" className="text-base" />
        <FormInput name="phone" placeholder="Телефон" className="text-base" />
      </div>
    </WhiteBlock>
  );
};
