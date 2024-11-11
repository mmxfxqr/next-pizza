import { Input } from "../../ui";
import { FormInput } from "../form";
import { WhiteBlock } from "../white-block";
interface Props {
  className?: string;
}
export const CheckoutPersonalData: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="fistName" placeholder="Имя" className="text-base" />
        <Input name="lastName" placeholder="Фамилия" className="text-base" />
        <Input name="email" placeholder="E-Mail" className="text-base" />
        <Input name="phone" placeholder="Телефон" className="text-base" />
      </div>
    </WhiteBlock>
  );
};
