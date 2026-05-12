import React, { useState } from 'react';
import FinancialForm from './FinancialForm';
import Result from './Result';

const App = () => {
  const [result, setResult] = useState('');

  return (
    <div>
      <FinancialForm setResult={setResult} />
      {result ? <Result result={result} /> : null}
    </div>
  );
};

export default App;

