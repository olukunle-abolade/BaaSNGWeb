import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFormData = {
  accountdetailsid: number;
  transactionref: string;
  narration: string;
  senderaccount: string;
  sendername: string;
  senderbankname: string;
  senderbankcode: string;
  destinationaccountnumber: string;
  destinationaccountname: string;
  destinationbankcode:string;
  polarity: string;
  amount: string;
  balance:string;
  benefit: string;
  transferType: string
}


interface TransactionState {
  formData: IFormData | null;
}

const initialState  = {
  formData: null,
} as TransactionState;

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormData>) => {
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, clearFormData } = transactionSlice.actions;

export default transactionSlice.reducer;