import Image from 'next/image';
import { ChangeEvent } from 'react';
import { SelectField } from '../FormComponent';

interface Beneficiary {
  id: string;
  bankLogo: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
}

interface BeneficiarySelectProps {
  beneficiaries: Beneficiary[];
  onSelectBeneficiary: (selectedBeneficiary: Beneficiary | null) => void;
}

const BeneficiarySelect: React.FC<BeneficiarySelectProps> = ({ beneficiaries, onSelectBeneficiary }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBeneficiaryId = event.target.value;
    const selectedBeneficiary = beneficiaries.find(
      (beneficiary) => beneficiary.id === selectedBeneficiaryId
    );
    onSelectBeneficiary(selectedBeneficiary || null);
  };

  return (
    <SelectField onChange={handleSelectChange}>
      <option value="">Select a beneficiary</option>
      {beneficiaries.map((beneficiary) => (
        <option key={beneficiary.id} value={beneficiary.id}>
          <div className='flex items-center space-x-2'>
            {/* <Image src={beneficiary.bankLogo} alt={beneficiary.bankName}  width={20} height={20} /> */}
            <div className="w-9 h-9 rounded bg-black"></div>

            <div className='flex flex-col space-x-2'>
              <p className='mx-2'>{beneficiary.accountName}</p>
              <p>{beneficiary.accountNumber}</p>
            </div>
          </div>
        </option>
      ))}
    </SelectField>
  );
};

export default BeneficiarySelect;