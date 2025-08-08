'use client';

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

const currencyFormat = (num: number) =>
  num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

type LoanCalculatorProps = {
  className?: string;
};
export function LoanCalculator({
  className = 'grid grid-cols-1 lg:grid-cols-2 gap-10'
}: LoanCalculatorProps) {
  const [houseValue, setHouseValue] = useState(3000000000);
  const [loanRate, setLoanRate] = useState(50);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate, setInterestRate] = useState(6);

  const loanAmount = (houseValue * loanRate) / 100;
  const ownCapital = houseValue - loanAmount;
  const totalMonths = loanTerm * 12;
  const monthlyPrincipal = loanAmount / totalMonths;

  const [totalInterest, setTotalInterest] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    let totalInt = 0;
    for (let i = 0; i < totalMonths; i++) {
      const remaining = loanAmount - i * monthlyPrincipal;
      totalInt += (remaining * interestRate) / 12 / 100;
    }
    setTotalInterest(Math.round(totalInt));
    setMonthlyPayment(Math.round(monthlyPrincipal + (loanAmount * interestRate) / 12 / 100));
  }, [houseValue, loanRate, loanTerm, interestRate]);

  return (
    <div className={clsx(className, 'mx-auto p-8 bg-white shadow-lg')}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Thông tin khoản vay</h2>

        <div className="grid gap-4">
          <label className="text-sm font-medium text-gray-700">
            Giá trị nhà đất
            <input
              type="number"
              value={houseValue}
              onChange={(e) => setHouseValue(+e.target.value)}
              className="mt-1 w-full border border-gray-300 p-2 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Tỉ lệ vay (%)
            <input
              type="number"
              value={loanRate}
              onChange={(e) => setLoanRate(+e.target.value)}
              className="mt-1 w-full border border-gray-300 p-2 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Thời hạn vay (năm)
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(+e.target.value)}
              className="mt-1 w-full border border-gray-300 p-2 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="text-sm font-medium text-gray-700">
            Lãi suất (%/năm)
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="mt-1 w-full border border-gray-300 p-2 focus:ring focus:ring-blue-200"
            />
          </label>
        </div>

        <p className="text-xs text-gray-500 mt-4">* Kết quả chỉ mang tính chất tham khảo</p>
      </div>

      <div className="bg-gray-50 p-6 shadow-inner space-y-5">
        <h3 className="text-xl font-bold text-gray-800">Kết quả dự tính</h3>

        <div className="text-3xl font-semibold text-red-600">
          {currencyFormat(houseValue + totalInterest)}
        </div>

        <ul className="text-sm space-y-2">
          <li className="flex justify-between border-b py-1">
            <span className="text-gray-600">• Vốn tự có</span>
            <span className="text-gray-800 font-medium">{currencyFormat(ownCapital)}</span>
          </li>
          <li className="flex justify-between border-b py-1">
            <span className="text-gray-600">• Gốc cần trả</span>
            <span className="text-gray-800 font-medium">{currencyFormat(loanAmount)}</span>
          </li>
          <li className="flex justify-between border-b py-1">
            <span className="text-gray-600">• Lãi cần trả</span>
            <span className="text-gray-800 font-medium">{currencyFormat(totalInterest)}</span>
          </li>
          <li className="flex justify-between border-b py-1">
            <span className="text-gray-600">• Thanh toán tháng đầu</span>
            <span className="text-gray-800 font-medium">{currencyFormat(monthlyPayment)}</span>
          </li>
        </ul>

        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2">
          📊 Xem chi tiết kế hoạch
        </button>
      </div>
    </div>
  );
}
